"use client"
// import { notFound } from 'next/navigation';
import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <motion.div initial={{ opacity: 0, y: 60, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.1, duration: 0.45, ease: [.15,.26,0,1] }} className="pt-30 items-center flex flex-col gap-1.5">
                <Link href="https://tensor.art/images/825657422271211978?post_id=825657422267017676">
                    <motion.img whileHover={{ scale: 0.98 }} initial={{ opacity: 0, y: 60, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.0, duration: 0.38, ease: [.15,.26,0,1] }} className="w-55 h-53 mb-1 mask-b-from-78% mask-b-to-100%" src="assets/illustrations/a.png" />
                </Link>
                <motion.div className="items-center flex flex-col gap-1.5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 0.45, ease: [.15,.26,0,1] }}>
                    <h4>페이지가 없었어요</h4>
                    <motion.p className="text-center" initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.21, duration: 0.45, ease: [.15,.26,0,1] }}>경로로 진입해서 찾아봤지만, 나오는 건 먼지 뿐이네요.<br/>(에러 코드: 404)</motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
}
