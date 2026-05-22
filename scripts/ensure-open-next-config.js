const fs = require("fs");
const path = require("path");

const configPath = path.join(process.cwd(), "open-next.config.ts");

console.log("cwd:", process.cwd());
console.log("looking for:", configPath);
console.log("exists:", fs.existsSync(configPath));

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
