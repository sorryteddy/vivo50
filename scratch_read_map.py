import json

with open("engine/core/monogatari.js.map", "r", encoding="utf-8") as f:
    sourcemap = json.load(f)

for name, content in zip(sourcemap.get("sources", []), sourcemap.get("sourcesContent", [])):
    if "Dialog.js" in name or "dialog.js" in name:
        print(f"Found: {name}")
        with open("scratch_Dialog_source.js", "w", encoding="utf-8") as out:
            out.write(content)
        print("Written to scratch_Dialog_source.js")
        break
else:
    print("Not found")
