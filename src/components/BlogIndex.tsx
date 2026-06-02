import Link from "next/link";
import { PAGES } from "@/lib/page-data";

// Ordered categories. Each post is placed in the first category whose pattern
// matches its slug; anything unmatched falls into "EIN Basics & Process".
const CATEGORIES: { title: string; pattern: RegExp }[] = [
  { title: "EIN by Country", pattern: /(bangladesh|brazil|canada|china|germany|india|mexico|nigeria|pakistan|philippines|uk-citizens)/ },
  { title: "EIN for Sellers, Creators & Platforms", pattern: /(airbnb|amazon|dropshipping|etsy|shopify|youtube|gig-economy|freelancers|real-estate|payoneer|paypal|stripe|cryptocurrency)/ },
  { title: "EIN by Entity Type", pattern: /(llc|nonprofit|partnership|sole-proprietor|trust|foreign-entity|s-corp|without-llc)/ },
  { title: "EIN vs Other Tax IDs", pattern: /(vs-|do-i-need-ein-or-itin)/ },
  { title: "BOI & Compliance", pattern: /(boi-|s-corp-election)/ },
];
const FALLBACK = "EIN Basics & Process";

type Post = { slug: string; title: string; metaDesc: string };

function categorize(posts: Post[]) {
  const buckets = new Map<string, Post[]>();
  const order = [...CATEGORIES.map((c) => c.title), FALLBACK];
  for (const post of posts) {
    const cat = CATEGORIES.find((c) => c.pattern.test(post.slug))?.title ?? FALLBACK;
    if (!buckets.has(cat)) buckets.set(cat, []);
    buckets.get(cat)!.push(post);
  }
  return order
    .filter((title) => buckets.has(title))
    .map((title) => ({ title, posts: buckets.get(title)!.sort((a, b) => a.title.localeCompare(b.title)) }));
}

export default function BlogIndex() {
  const posts: Post[] = PAGES.filter(
    (p) => p.slug.startsWith("/blog/") && p.slug !== "/blog/"
  ).map((p) => ({ slug: p.slug, title: p.title, metaDesc: p.metaDesc }));

  const groups = categorize(posts);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">
          All Articles
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-3">
          Browse All {posts.length} EIN Guides
        </h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed mb-12 max-w-2xl">
          Every guide on EINs, ITINs, BOI filing, and US tax compliance for
          non-residents, organized by topic.
        </p>

        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-blue-glow)] mb-5">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={post.slug}
                    className="group block rounded-2xl border border-[var(--color-border)] p-5 hover:border-[var(--color-blue)] hover:shadow-lg transition-all"
                  >
                    <h4 className="text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-blue)] transition-colors mb-2">
                      {post.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                      {post.metaDesc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
