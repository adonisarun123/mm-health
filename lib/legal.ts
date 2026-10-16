import fs from "fs";
import path from "path";
export type Legal = { slug: string; title: string; description: string; updated: string; html: string };
export const getLegal = (slug: string): Legal => JSON.parse(fs.readFileSync(path.join(process.cwd(), "content/legal", `${slug}.json`), "utf8"));
