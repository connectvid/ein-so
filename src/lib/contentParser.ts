import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "src/content");

export function getListPage(filePath: string) {
  const fullPath = path.join(CONTENT_PATH, filePath);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  return { frontmatter, content };
}

export function getSinglePage(folder: string) {
  const folderPath = path.join(CONTENT_PATH, folder);
  const files = fs.readdirSync(folderPath).filter((f) => f.endsWith(".md"));

  return files
    .filter((f) => f !== "_index.md")
    .map((file) => {
      const fileContent = fs.readFileSync(path.join(folderPath, file), "utf-8");
      const { data: frontmatter, content } = matter(fileContent);
      const slug = file.replace(/\.md$/, "");
      return { frontmatter, slug, content };
    })
    .filter((p) => !p.frontmatter.draft);
}
