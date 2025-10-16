import NoContents from "@/components/no-contents";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home"); // useTranslations에서 ("home")에는 사용할 언어 파일 내 섹션 이름을 입력합니다.

  return (
    <div>
      <header className="pt-18 flex flex-col gap-1">
        {/* 私は世間を欺く事を、自分の天職のように思っている。 */}
        <h2>{t("title")}</h2>
      </header>
      <div>
        <NoContents />
      </div>
    </div>
  );
}
