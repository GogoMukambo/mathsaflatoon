-- Website database (SQLite).
-- Parents live in users. Each child profile belongs to one parent.
-- Progress is stored per child: lessons, home choices, mental scores,
-- Aflatoon / Maths Sprint days, and mental-quest module stats.
-- progress_documents keeps the exact app payload so a page can reload it.

PRAGMA user_version = 1;

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL DEFAULT '',
  surname TEXT NOT NULL DEFAULT '',
  dob TEXT NOT NULL DEFAULT '',
  gender TEXT NOT NULL DEFAULT '',
  provider TEXT NOT NULL DEFAULT 'email' CHECK (provider IN ('email', 'google')),
  password_salt TEXT,
  password_hash TEXT,
  google_sub TEXT UNIQUE,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);

CREATE TABLE IF NOT EXISTS children (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  gender TEXT NOT NULL CHECK (gender IN ('Female', 'Male', 'Other', 'Prefer not to say')),
  dob TEXT NOT NULL,
  board TEXT NOT NULL CHECK (board IN ('CBSE', 'IGCSE')),
  school TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_children_user ON children(user_id);

CREATE TABLE IF NOT EXISTS active_children (
  user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  child_id TEXT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  updated_at TEXT NOT NULL
);

-- One row per topic the child has opened: study notes, flashcards, or a quiz.
CREATE TABLE IF NOT EXISTS topic_progress (
  child_id TEXT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  year_id TEXT NOT NULL,
  subject TEXT NOT NULL,
  unit_id TEXT NOT NULL,
  topic_id TEXT NOT NULL DEFAULT '_chapter',
  studied INTEGER NOT NULL DEFAULT 0 CHECK (studied IN (0, 1)),
  cards_done INTEGER NOT NULL DEFAULT 0 CHECK (cards_done IN (0, 1)),
  quiz_done INTEGER NOT NULL DEFAULT 0 CHECK (quiz_done IN (0, 1)),
  updated_at TEXT NOT NULL,
  PRIMARY KEY (child_id, year_id, subject, unit_id, topic_id)
);

CREATE INDEX IF NOT EXISTS idx_topic_progress_child ON topic_progress(child_id);

-- Board and year last chosen for this child on the curriculum pages.
CREATE TABLE IF NOT EXISTS home_preferences (
  child_id TEXT PRIMARY KEY REFERENCES children(id) ON DELETE CASCADE,
  board TEXT,
  year_id TEXT,
  updated_at TEXT NOT NULL
);

-- Quick mental-maths high score, one per child per year.
CREATE TABLE IF NOT EXISTS mental_scores (
  child_id TEXT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  year_id TEXT NOT NULL,
  high_score INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (child_id, year_id)
);

-- Aflatoon courses and the Year 4–5 sprint. course is beginner, foundation, advanced, or y45.
CREATE TABLE IF NOT EXISTS course_enrolments (
  child_id TEXT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  course TEXT NOT NULL CHECK (course IN ('beginner', 'foundation', 'advanced', 'y45')),
  enrolled_on TEXT,
  is_active INTEGER NOT NULL DEFAULT 0 CHECK (is_active IN (0, 1)),
  is_recommended INTEGER NOT NULL DEFAULT 0 CHECK (is_recommended IN (0, 1)),
  PRIMARY KEY (child_id, course)
);

CREATE TABLE IF NOT EXISTS course_day_progress (
  child_id TEXT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  course TEXT NOT NULL CHECK (course IN ('beginner', 'foundation', 'advanced', 'y45')),
  day_num INTEGER NOT NULL CHECK (day_num >= 1),
  completed INTEGER NOT NULL DEFAULT 0 CHECK (completed IN (0, 1)),
  medal TEXT,
  medal_points INTEGER,
  stars INTEGER,
  best_score INTEGER,
  best_time_sec INTEGER,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (child_id, course, day_num)
);

CREATE INDEX IF NOT EXISTS idx_course_day_child ON course_day_progress(child_id);

-- Mental maths quest players saved for a parent child (Year 4, 5, or 6 modules).
CREATE TABLE IF NOT EXISTS quest_players (
  id TEXT NOT NULL,
  child_id TEXT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  quest TEXT NOT NULL CHECK (quest IN ('y4', 'y5', 'y6')),
  name TEXT NOT NULL,
  avatar TEXT NOT NULL DEFAULT '',
  badges TEXT NOT NULL DEFAULT '{}',
  is_active INTEGER NOT NULL DEFAULT 0 CHECK (is_active IN (0, 1)),
  PRIMARY KEY (child_id, quest, id)
);

CREATE TABLE IF NOT EXISTS quest_module_stats (
  child_id TEXT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  quest TEXT NOT NULL CHECK (quest IN ('y4', 'y5', 'y6')),
  player_id TEXT NOT NULL,
  module_id TEXT NOT NULL,
  high_score INTEGER NOT NULL DEFAULT 0,
  best_accuracy REAL NOT NULL DEFAULT 0,
  games_played INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL DEFAULT 0,
  correct_questions INTEGER NOT NULL DEFAULT 0,
  best_streak INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (child_id, quest, player_id, module_id)
);

-- Exact JSON the pages save, keyed by child and kind
-- (curriculum, aflatoon, mathsprint-y45, quest-y4, quest-y4-active, ...).
CREATE TABLE IF NOT EXISTS progress_documents (
  child_id TEXT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  payload TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (child_id, kind)
);

CREATE VIEW IF NOT EXISTS child_progress_summary AS
SELECT
  c.id AS child_id,
  c.user_id,
  c.name AS child_name,
  c.board,
  c.school,
  u.email AS parent_email,
  u.first_name AS parent_first_name,
  u.surname AS parent_surname,
  COUNT(tp.child_id) AS topics_touched,
  SUM(CASE WHEN tp.studied = 1 THEN 1 ELSE 0 END) AS topics_studied,
  SUM(CASE WHEN tp.cards_done = 1 THEN 1 ELSE 0 END) AS topics_with_cards,
  SUM(CASE WHEN tp.quiz_done = 1 THEN 1 ELSE 0 END) AS topics_quizzed,
  MAX(tp.updated_at) AS last_topic_activity
FROM children c
JOIN users u ON u.id = c.user_id
LEFT JOIN topic_progress tp ON tp.child_id = c.id
GROUP BY c.id;

CREATE VIEW IF NOT EXISTS child_course_summary AS
SELECT
  child_id,
  course,
  SUM(CASE WHEN completed = 1 THEN 1 ELSE 0 END) AS days_completed,
  SUM(COALESCE(stars, 0)) AS stars,
  SUM(COALESCE(medal_points, 0)) AS medal_points,
  MIN(best_time_sec) AS best_time_sec,
  MAX(updated_at) AS updated_at
FROM course_day_progress
GROUP BY child_id, course;

-- Maths Aflatoon phone login. The focus code is a hash, never the 4 digits.
CREATE TABLE IF NOT EXISTS phone_accounts (
  id TEXT PRIMARY KEY,
  phone TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS phone_sessions (
  token TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES phone_accounts(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_phone_sessions_account ON phone_sessions(account_id);

CREATE TABLE IF NOT EXISTS phone_otps (
  phone TEXT PRIMARY KEY,
  code_hash TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  sent_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS phone_otp_sends (
  id TEXT PRIMARY KEY,
  phone TEXT NOT NULL,
  sent_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_phone_otp_sends_phone ON phone_otp_sends(phone, sent_at);

CREATE TABLE IF NOT EXISTS focus_passcodes (
  account_id TEXT PRIMARY KEY REFERENCES phone_accounts(id) ON DELETE CASCADE,
  pin_hash TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
