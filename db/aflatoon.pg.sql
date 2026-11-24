-- Maths Aflatoon only. The rest of the website is not stored here.
-- Google login, the focus-code hash, and course progress live in schema aflatoon.
-- The Node server connects with DATABASE_URL. The public Supabase API is denied.

CREATE SCHEMA IF NOT EXISTS aflatoon;

CREATE TABLE IF NOT EXISTS aflatoon.phone_accounts (
  id TEXT PRIMARY KEY,
  phone TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS aflatoon.phone_sessions (
  token TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES aflatoon.phone_accounts(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_aflatoon_sessions_account ON aflatoon.phone_sessions(account_id);

CREATE TABLE IF NOT EXISTS aflatoon.phone_otps (
  phone TEXT PRIMARY KEY,
  code_hash TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  sent_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS aflatoon.phone_otp_sends (
  id TEXT PRIMARY KEY,
  phone TEXT NOT NULL,
  sent_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_aflatoon_otp_sends_phone ON aflatoon.phone_otp_sends(phone, sent_at);

CREATE TABLE IF NOT EXISTS aflatoon.focus_passcodes (
  account_id TEXT PRIMARY KEY REFERENCES aflatoon.phone_accounts(id) ON DELETE CASCADE,
  pin_hash TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS aflatoon.course_progress (
  account_id TEXT PRIMARY KEY REFERENCES aflatoon.phone_accounts(id) ON DELETE CASCADE,
  payload TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS aflatoon.accounts (
  id TEXT PRIMARY KEY,
  google_sub TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  name TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS aflatoon.focus_temp_codes (
  account_id TEXT PRIMARY KEY REFERENCES aflatoon.accounts(id) ON DELETE CASCADE,
  code_hash TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  sent_at TEXT NOT NULL
);

-- Existing session, focus, and progress rows pointed at phone accounts.
-- Point them at the Google account instead. The phone tables are left unused.
DO $$
DECLARE
  spec record;
  constraint_name text;
BEGIN
  FOR spec IN
    SELECT * FROM (VALUES
      ('phone_sessions'),
      ('focus_passcodes'),
      ('course_progress')
    ) AS listed(table_name)
  LOOP
    SELECT c.conname INTO constraint_name
    FROM pg_constraint c
    JOIN pg_class rel ON rel.oid = c.conrelid
    JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
    JOIN pg_class parent ON parent.oid = c.confrelid
    WHERE nsp.nspname = 'aflatoon'
      AND rel.relname = spec.table_name
      AND c.contype = 'f'
      AND parent.relname = 'phone_accounts'
    LIMIT 1;
    IF constraint_name IS NOT NULL THEN
      EXECUTE format('ALTER TABLE aflatoon.%I DROP CONSTRAINT %I', spec.table_name, constraint_name);
      EXECUTE format(
        'ALTER TABLE aflatoon.%I ADD CONSTRAINT %I FOREIGN KEY (account_id) REFERENCES aflatoon.accounts(id) ON DELETE CASCADE',
        spec.table_name,
        spec.table_name || '_account_id_fkey'
      );
    END IF;
  END LOOP;
END $$;

ALTER TABLE aflatoon.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE aflatoon.phone_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE aflatoon.phone_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE aflatoon.phone_otps ENABLE ROW LEVEL SECURITY;
ALTER TABLE aflatoon.phone_otp_sends ENABLE ROW LEVEL SECURITY;
ALTER TABLE aflatoon.focus_passcodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE aflatoon.focus_temp_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE aflatoon.course_progress ENABLE ROW LEVEL SECURITY;

DO $$
DECLARE
  role_name text;
BEGIN
  FOREACH role_name IN ARRAY ARRAY['anon', 'authenticated']
  LOOP
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = role_name) THEN
      EXECUTE format('REVOKE ALL ON SCHEMA aflatoon FROM %I', role_name);
      EXECUTE format(
        'REVOKE ALL ON TABLE
          aflatoon.accounts, aflatoon.phone_accounts, aflatoon.phone_sessions, aflatoon.phone_otps,
          aflatoon.phone_otp_sends, aflatoon.focus_passcodes, aflatoon.focus_temp_codes,
          aflatoon.course_progress
        FROM %I',
        role_name
      );
    END IF;
  END LOOP;
END $$;
