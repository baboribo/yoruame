import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Gnb from "@/components/gnb";
import LocaleAttributes from "@/components/locale-attributes";
import { isLocale } from "@/i18n/routing";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 들어오는 'locale'이 유효한지 확인합니다.
  if (!isLocale(locale)) {
    notFound();
  }

  // 클라이언트에게 모든 메시지를 제공합니다.
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleAttributes locale={locale} /> {/* [1] */}
      <Gnb /> {/* [2] */}
      {children}
    </NextIntlClientProvider>
  );
}

/**
 * Footnotes
 * [1] Hydrates the document-level language attribute to match the active locale, avoiding hydration mismatches without duplicating the root layout shell.
 * [2] Ensures the global navigation receives the i18n context before rendering client-side hooks.
 */
