import type { Metadata } from "next";

export const siteBrand = {
  name: "m_ny29*",
  homeHref: "/",
  avatar: {
    src: "/img/avatar/Im-just-watching.jpg",
    alt: "mny29 profile avatar",
  },
} as const; // [1]

export const siteMetadata: Metadata = {
  title: "Yoruame",
  description: "A personal site by mny29",
  icons: {
    icon: "/assets/favicons/favicon-bg-none.avif",
  },
}; // [2]

export const site = {
  brand: siteBrand,
  metadata: siteMetadata,
} as const;

/**
 * Footnotes
 * [1] Normalizes brand usage (name, avatar, home link) so components read from a single source of truth.
 * [2] Provides an exported Metadata object to eliminate layout-level duplication and keep document metadata centralized.
 */
