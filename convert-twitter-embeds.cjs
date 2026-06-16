const fs = require("fs");
const path = require("path");

const postsDir = path.join(process.cwd(), "src", "content", "posts");

const tweetRe =
  /https:\/\/(?:twitter|x)\.com\/([A-Za-z0-9_\\]+)\/status\/(\d+)(?:[^\s)\]<>"]*)?/g;

function embed(user, id) {
  const cleanUser = user.replace("\\", "");
  return `<blockquote class="twitter-tweet">
  <a href="https://twitter.com/${cleanUser}/status/${id}"></a>
</blockquote>`;
}

let totalFiles = 0;
let totalTweets = 0;

for (const file of fs.readdirSync(postsDir)) {
  if (!file.endsWith(".md")) continue;

  const fullPath = path.join(postsDir, file);
  const before = fs.readFileSync(fullPath, "utf8");
  const lines = before.split(/\r?\n/);
  const out = [];
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith(">")) {
      const block = [];

      while (i < lines.length && lines[i].startsWith(">")) {
        block.push(lines[i]);
        i++;
      }
      i--;

      const blockText = block.join("\n");
      const matches = [...blockText.matchAll(tweetRe)];

      if (matches.length > 0) {
        const seen = new Set();

        for (const match of matches) {
          const key = `${match[1]}:${match[2]}`;
          if (seen.has(key)) continue;
          seen.add(key);
          out.push(embed(match[1], match[2]));
          out.push("");
          totalTweets++;
        }

        changed = true;
        continue;
      }

      out.push(...block);
      continue;
    }

    out.push(line);
  }

  const after = out.join("\n");

  if (changed && after !== before) {
    fs.writeFileSync(fullPath, after, "utf8");
    console.log("updated:", file);
    totalFiles++;
  }
}

console.log(`done: ${totalFiles} files, ${totalTweets} tweets`);