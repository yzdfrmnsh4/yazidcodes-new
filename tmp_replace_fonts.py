import os
import glob
import re

directory = r"c:\Users\YAZID\Documents\CODING\yazidcodes-new\src"
files = glob.glob(f"{directory}/**/*.tsx", recursive=True)

changed = 0
for fpath in files:
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = re.sub(r'\bfont-bold\b', 'font-semibold', content)
    new_content = re.sub(r'\bfont-extrabold\b', 'font-semibold', new_content)

    if new_content != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)
        changed += 1
        print(f"Updated {fpath}")

print(f"Total files updated: {changed}")
