import re

with open("engine/core/monogatari.js", "r", encoding="utf-8") as f:
    content = f.read()

# Let's search for "assets:" or ".assets =" or "assets = function" or "_assets"
# We can search for "assets" as a function or method definition
matches = list(re.finditer(r"\bassets\s*[:=]\s*function|\bassets\s*\(", content))
print(f"Found {len(matches)} potential matches:")
for i, match in enumerate(matches):
    start = max(0, match.start() - 200)
    end = min(len(content), match.end() + 300)
    print(f"\n--- Match {i+1} at index {match.start()} ---")
    print(content[start:end])
    print("-" * 50)
