import json
import re
import os

# Read the content files
with open('content-y7-maths.js', 'r', encoding='utf-8') as f:
    y7_content = f.read()

with open('content-y8-maths.js', 'r', encoding='utf-8') as f:
    y8_content = f.read()

def extract_y7_topics(content):
    topics = []
    topic_blocks = re.finditer(r'topic\("(\d+\.\d+)",\s*"([^"]+)",\s*\[(.*?)\]\)', content, re.DOTALL)
    
    for match in topic_blocks:
        topic_id = match.group(1)
        title = match.group(2)
        cards_str = match.group(3)
        
        cards = []
        card_matches = re.finditer(r'\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\]', cards_str)
        for card_match in card_matches:
            cards.append({
                'kind': card_match.group(1),
                'front': card_match.group(2),
                'back': card_match.group(3)
            })
            
        topics.append({
            'id': f"m7_{topic_id}",
            'title': f"{topic_id} {title}",
            'cards': cards
        })
    return topics

def extract_y8_topics(content):
    topics = []
    topic_blocks = re.finditer(r'id:\s*"(\d+\.\d+)",\s*title:\s*"([^"]+)",\s*cards:\s*\[(.*?)\]', content, re.DOTALL)
    
    for match in topic_blocks:
        topic_id = match.group(1)
        title = match.group(2)
        cards_str = match.group(3)
        
        cards = []
        card_matches = re.finditer(r'kind:\s*"([^"]+)",\s*front:\s*"([^"]+)",\s*back:\s*"([^"]+)"', cards_str)
        for card_match in card_matches:
            cards.append({
                'kind': card_match.group(1),
                'front': card_match.group(2),
                'back': card_match.group(3)
            })
            
        topics.append({
            'id': f"m8_{topic_id}",
            'title': f"{topic_id} {title}",
            'cards': cards
        })
    return topics

y7_topics = extract_y7_topics(y7_content)
y8_topics = extract_y8_topics(y8_content)

all_topics = y7_topics + y8_topics

# Read the restored whiteboard data
with open('restored_whiteboard_data.js', 'r', encoding='utf-16le') as f:
    restored_content = f.read()

# Extract the existing JSON object
json_start = restored_content.find('{')
json_str = restored_content[json_start:]
# Remove the trailing semicolon if it exists
if json_str.endswith(';'):
    json_str = json_str[:-1]

# We can't easily parse it with json.loads because it might have unquoted keys or trailing commas.
# Instead, we'll just append to the JS file directly.

output_js = restored_content.strip()
if output_js.endswith(';'):
    output_js = output_js[:-1]
if output_js.endswith('}'):
    output_js = output_js[:-1]

# Find existing keys to avoid overwriting
existing_keys = re.findall(r'"(m[78]_\d+\.\d+|s7_\d+\.\d+)":\s*\{', restored_content)

new_data_str = ""

for topic in all_topics:
    if topic['id'] in existing_keys:
        continue
    
    subtopics = []
    scenes = {}
    
    for i, card in enumerate(topic['cards']):
        subtopic_id = f"card_{i}"
        subtopics.append({ "id": subtopic_id, "label": card['kind'] })
        
        # Split text into lines if it's too long
        def split_text(text, max_len=50):
            words = text.split()
            lines = []
            current_line = []
            current_len = 0
            for word in words:
                if current_len + len(word) > max_len:
                    lines.append(" ".join(current_line))
                    current_line = [word]
                    current_len = len(word)
                else:
                    current_line.append(word)
                    current_len += len(word) + 1
            if current_line:
                lines.append(" ".join(current_line))
            return lines
            
        front_lines = split_text(card['front'])
        back_lines = split_text(card['back'])
        
        elements = [
            { "type": "text", "x": 400, "y": 100, "text": topic['title'], "color": "#0f172a", "size": 30 }
        ]
        
        y_pos = 180
        for line in front_lines:
            elements.append({ "type": "text", "x": 400, "y": y_pos, "text": line, "color": "#2563eb", "size": 24 })
            y_pos += 35
            
        y_pos += 20
        for line in back_lines:
            elements.append({ "type": "text", "x": 400, "y": y_pos, "text": line, "color": "#059669", "size": 24 })
            y_pos += 35
        
        scenes[subtopic_id] = [
            {
                "narration": card['front'],
                "rule": card['back'],
                "quizQ": "",
                "quizA": "",
                "elements": elements
            }
        ]
        
    topic_data = {
        "title": topic['title'],
        "watermark": f"Section {topic['id'].split('_')[1]}",
        "subtopics": subtopics,
        "scenes": scenes
    }
    
    new_data_str += f',\n  "{topic["id"]}": ' + json.dumps(topic_data, indent=4)

output_js += new_data_str + "\n};\n"

with open('interactive-whiteboard-data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print("Successfully merged new whiteboard data with existing SVGs/sketches!")
