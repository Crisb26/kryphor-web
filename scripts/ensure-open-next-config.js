const fs = require("fs");
const path = require("path");

const configPath = path.join(process.cwd(), "open-next.config.ts");

console.log("cwd:", process.cwd());
console.log("looking for:", configPath);
console.log("exists:", fs.existsSync(configPath));

// Print installed next version so we can verify cache isn't stale
try {
  const nextPkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), "node_modules/next/package.json"), "utf8"));
  console.log("installed next version:", nextPkg.version);
} catch (e) {
  console.log("could not read next version:", e.message);
}

if (!fs.existsSync(configPath)) {
  console.log("Creating open-next.config.ts...");
  fs.writeFileSync(
    configPath,
    'import { defineCloudflareConfig } from "@opennextjs/cloudflare";\nexport default defineCloudflareConfig();\n'
  );
  console.log("Created.");
} else {
  console.log("Already exists, skipping.");
}
