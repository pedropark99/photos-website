import json
from pathlib import Path

images = {
    'image_list': list()
}

with open("src/routes/events/events.json", "r") as file_con:
    events_list = '\n'.join(file_con.readlines())
    events_list = json.loads(events_list)

for i in range(len(events_list['events_list'])):
    event = events_list['events_list'][i]
    pf = event['path_to_folder']
    path = Path(pf)
    image_paths = list(path.glob("**/*.webp"))
    image_paths = [str(p).replace("static/", "") for p in image_paths]
    images['image_list'].append({
        'id': i,
        'image_paths': image_paths
    })


json_str = json.dumps(images)
with open("src/routes/events/image_paths.json", "w") as file_con:
    file_con.write(json_str)