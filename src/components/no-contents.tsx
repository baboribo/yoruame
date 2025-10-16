"use client";
import { motion } from "motion/react";
import { noContentsLinks } from "@/constants/links";
import { useTranslations } from "next-intl";

export default function NoContentPage() {
  const t = useTranslations("noContents");

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.1, duration: 0.38, ease: [0.15, 0.26, 0, 1] }}
      className="pt-10 items-center flex flex-col gap-1.5"
    >
      <a href={noContentsLinks.iconLink}>
        <motion.img
          whileHover={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.0,
            duration: 0.38,
            ease: [0.15, 0.26, 0, 1],
          }}
          className="w-55 h-53 mb-1 mask-b-from-78% mask-b-to-100%"
          src={noContentsLinks.iconSrc}
        />
      </a>
      <motion.div
        className="items-center flex flex-col gap-1.5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.14, duration: 0.44, ease: [0.15, 0.26, 0, 1] }}
      >
        <h4>{t("title")}</h4>
        <motion.p
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.21, duration: 0.44, ease: [0.15, 0.26, 0, 1] }}
        >
          {t("description")}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
