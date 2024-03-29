/**
 * Reset CHANGELOG
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95] (https://github.com/AliShadman95)
 *
 * @license: MIT License
 *
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const changelog = `# v1.0.0 (${new Date().toLocaleString("en-us", {
	month: "long",
	year: "numeric",
	day: "numeric",
})})

-   First release

<!-- all-shields/sponsors-badges:START -->
<!-- all-shields/sponsors-badges:END -->
`;

fs.unlinkSync(`${__dirname}/../CHANGELOG.md`);
fs.writeFileSync(`${__dirname}/../CHANGELOG.md`, `${changelog}`, {
	encoding: "utf8",
});
