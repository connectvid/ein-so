import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // OpenAI (ChatGPT Search + Training)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Anthropic (Claude Search + Training)
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // Apple Intelligence
      { userAgent: "Applebot-Extended", allow: "/" },
      // Google (Gemini)
      { userAgent: "Google-Extended", allow: "/" },
      // Meta AI (WhatsApp, Instagram, Facebook)
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      // Bing (Copilot + feeds ChatGPT)
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: "https://www.ein.so/sitemap.xml",
  };
}
