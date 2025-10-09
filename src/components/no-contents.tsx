"use client"
import Link from "next/link";
import { motion } from "motion/react";
// import { SiSpotify } from '@icons-pack/react-simple-icons';
export default function nce() {
  return (
    <motion.div initial={{ opacity: 0, y: 60, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.1, duration: 0.38, ease: [.15,.26,0,1] }} className="pt-10 items-center flex flex-col gap-1.5">
        <Link href="https://tensor.art/images/825657422271211978?post_id=825657422267017676">
            <img className="w-55 h-53 mb-1 mask-b-from-78% mask-b-to-100%" src="assets/illustrations/a.png" />
        </Link>
        <motion.div className="items-center flex flex-col gap-1.5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.13, duration: 0.38, ease: [.15,.26,0,1] }}>
            <h4>콘텐츠 없음</h4>
            <motion.p initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.20, duration: 0.38, ease: [.15,.26,0,1] }}>이 페이지 내에 콘텐츠가 존재하지 않습니다.</motion.p>
        </motion.div>
    </motion.div>
  );
}
