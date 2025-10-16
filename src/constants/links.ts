// links
export const gnb = {
  navLinks: [
    { href: "/", messageKey: "home.title" },
    { href: "/c", messageKey: "creatives.title" },
    { href: "/font-size", messageKey: "font-size.title" },
  ],
  quickLinks: [
    { href: "https://sora.yume.place", messageKey: "links.weather" },
  ],
  socialLinks: [
    { href: "https://github.com/baboribo", icon: "github", label: "GitHub" },
  ],
} as const;

export const notFoundLinks = {
  iconLink:
    "https://tensor.art/images/825657422271211978?post_id=825657422267017676",
  iconSrc: "/assets/illustrations/a.png",
  notfoundreturn: "/",
};

export const noContentsLinks = {
  iconLink:
    "https://tensor.art/images/825657422271211978?post_id=825657422267017676",
  iconSrc: "/assets/illustrations/a.png",
};
