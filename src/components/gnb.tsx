import type { ComponentType } from "react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { gnb } from "@/constants/links";

const NAV_LINK_CLASS =
  "pl-3 pr-3 pt-1 pb-1 rounded-4xl hover:bg-blend-overlay hover:bg-[#35313f] hover:blend-multiply transition";

const SOCIAL_ICON_MAP = {
  github: SiGithub,
} satisfies Record<
  (typeof gnb.socialLinks)[number]["icon"],
  ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>
>;

export default function Gnb() {
  const t = useTranslations();

  return (
    <header className="fixed z-50 backdrop-blur-xs top-0 left-0 right-0 bg-[#0f0e12cd] hover:bg-[#1c1a21] transition">
      <div className="flex pt-2 pb-2 pl-6 pr-6 w-full justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link href="/" className="flex gap-4 items-center">
            <Image
              className="w-8.5 h-8.5 rounded-4xl"
              src={gnb.avatarSrc}
              alt="profile"
              width={34}
              height={34}
            />
            <div className="flex gap-2 items-center">
              <h5>m_ny29*</h5>
            </div>
          </Link>
          <nav className="flex" aria-label="Primary">
            {gnb.navLinks.map(({ href, messageKey }) => (
              <Link key={href} href={href} className={NAV_LINK_CLASS}>
                <p>{t(messageKey)}</p>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          {gnb.quickLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="opacity-70 hover:opacity-100 transition cursor-pointer"
            >
              <p>{label}</p>
            </a>
          ))}
          {gnb.socialLinks.map(({ href, icon, label }) => {
            const Icon = SOCIAL_ICON_MAP[icon];

            if (!Icon) {
              return null;
            }

            return (
              <a
                key={href}
                href={href}
                aria-label={label}
                className="opacity-70 hover:opacity-100 transition cursor-pointer"
              >
                <Icon size={26} color="#ffffff" />
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
