"use client";
//import { notFound } from 'next/navigation';
import { motion } from "motion/react";
import { notFoundLinks } from "@/constants/links";
//import { useTranslations } from "next-intl";

export default function notfound() {
  //const t = useTranslations("notFound");
  // ㅎㅎㅎ 도대체 어떻게 해야 로케일에서 404를 띄ㅇ루 수 있을까?????????
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.45, ease: [0.15, 0.26, 0, 1] }}
        className="pt-30 items-center flex flex-col gap-1.5"
      >
        <a href={notFoundLinks.iconLink}>
          <motion.img
            whileHover={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.0,
              duration: 0.38,
              ease: [0.15, 0.26, 0, 1],
            }}
            className="w-46 h-46 mb-3 rounded-2xl"
            src={notFoundLinks.iconSrc}
          />
        </a>
        <motion.div
          className="items-center flex flex-col gap-1.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.45, ease: [0.15, 0.26, 0, 1] }}
        >
          <h4>원하시는 걸 찾지 못했어요</h4>
          <motion.p
            className="text-center"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.21,
              duration: 0.45,
              ease: [0.15, 0.26, 0, 1],
            }}
          >
            경로로 진입해서 찾아봤지만, 나오는 건 먼지 뿐이네요.<br />(에러 코드: 404)
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
