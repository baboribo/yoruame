"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div
      style={{ position: "relative" }}
      className="min-h-screen overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.15, 0.26, 0, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
