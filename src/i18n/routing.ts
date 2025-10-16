import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // 지원되는 언어를 입력하세요 !
  locales: ["ko", "en", "ja",],

  // 기본 언어 설정
  defaultLocale: "ko",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
