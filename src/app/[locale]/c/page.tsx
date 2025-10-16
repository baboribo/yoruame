"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MyCreative() {
  const t = useTranslations("creatives");

  return (
    <div>
      <header className="pt-24 pb-5 flex flex-col gap-1">
        <h3>{t("title")}</h3>
        {/* <p>m_ny29*에서 쓰이는 폰트 크기들을 모아둔 페이지입니다.</p> */}
      </header>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.38, ease: [0.15, 0.26, 0, 1] }}
        className="flex col-span-4 gap-4"
      >
        <ul className="w-fit">
          <li>
            <Link href="https://sora.yume.place">
              <Image
                className="w-100 border-1 border-gray-700 hover:border-gray-300 ease-in-out transition-all rounded-[10px]"
                width={100}
                height={100}
                src="/img/my-creative/tenki/preview.png"
                alt="Tenki 미리보기 화면"
              />
              <div className="flex flex-col gap-1 ml-1 mt-2 mb-2 mr-1">
                <h4>Tenki</h4>
                <p>날씨</p>
              </div>
            </Link>
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
