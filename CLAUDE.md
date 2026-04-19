@AGENTS.md

# Content Management Rules

**ALL content data MUST be stored in `src/content/` using frontmatter-based Markdown/MDX files. No exceptions.**

## What belongs in `src/content/`:
- Homepage content and sections
- Page content (about, contact, privacy, etc.)
- Blog posts and articles
- Author profiles
- Reusable section data (CTA, testimonials, features, etc.)
- Any other content data

## Content folder structure:
```
src/content/
├── homepage/
│   └── _index.md
├── sections/
│   └── {section-name}.md
├── pages/
│   └── {page-name}.md
├── blog/
│   └── {post-name}.md
├── authors/
│   └── {author-name}.md
├── {page-slug}/
│   └── _index.md
```

## MUST DO:
1. Store ALL content data in `src/content/`
2. Use frontmatter (YAML) for all structured data
3. Use MDX body for long-form text content
4. Follow existing folder structure patterns
5. Use relative paths for images (`/images/filename.png`)
6. Include `enable: true/false` for toggleable sections
7. Use consistent field naming (title, description, image, button, etc.)

## MUST NOT DO:
1. Never hardcode content in component files
2. Never store content data in JSON/JS files outside `content/`
3. Never use inline content in `.tsx` or `.jsx` files
4. Never skip frontmatter for metadata
5. Never place content in `src/data/`, `src/config/`, or other folders

## Naming conventions:
- **Kebab case** for file names: `call-to-action.md`, `privacy-policy.md`
- **Image paths**: store in `/images/` and reference as `/images/filename.png`

## Content is loaded via:
- `src/lib/contentParser.ts` using `getListPage()` and `getSinglePage()`
- MDX rendered via `next-mdx-remote` with components from `src/components/mdx/`
- Page template: `MDXPage` from `src/lib/mdx.tsx` handles Hero, FAQ, CTA automatically from frontmatter

## Common frontmatter fields:
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Main title/headline |
| `description` | string | Meta description |
| `canonical` | string | Canonical URL |
| `heroLabel` | string | Hero section label |
| `heroTitle` | string | Hero main title |
| `heroAccent` | string | Hero gradient accent text |
| `heroDescription` | string | Hero description |
| `ctaTitle` | string | CTA section title |
| `ctaSubtitle` | string | CTA section subtitle |
| `faqs` | array | FAQ items with q/a fields |
| `breadcrumbs` | array | Breadcrumb items |
| `schema` | object | JSON-LD schema data |
| `draft` | boolean | Publish status |
