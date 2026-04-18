import type { Metadata } from "next";
import { HomeSchema, FAQSchema, WebSiteSchema } from "./schema";
import HomeClient from "./HomeClient";
import { SITE } from "@/lib/constants";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("homepage/_index.md");

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HomeSchema />
      <WebSiteSchema />
      <FAQSchema faqs={fm.faqs} />
      <HomeClient />
    </>
  );
}
