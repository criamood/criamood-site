import type { MetadataRoute } from "next";
import { categories, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/produtos", "/como-pedir", "/contato", "/criaclick", "/doxa", "/politica-de-privacidade"];
  return [
    ...fixed.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: new Date() })),
    ...categories.map((c) => ({ url: `${SITE_URL}/produtos/${c.slug}`, lastModified: new Date() })),
  ];
}
