const fs = require("fs");
const path = require("path");

const postsDir = path.join(process.cwd(), "src", "content", "posts");

for (const file of fs.readdirSync(postsDir)) {
  if (!file.endsWith(".md")) continue;

  const fullPath = path.join(postsDir, file);
  const before = fs.readFileSync(fullPath, "utf8");

  const after = before.replaceAll(
    "https://noeye69.com/wp-content/uploads/",
    "/images/wp/"
  );

  if (before !== after) {
    fs.writeFileSync(fullPath, after, "utf8");
    console.log("updated:", file);
  }
}