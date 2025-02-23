"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useMotion } from "../hooks/useMotion";

export default function ConfirmationPage() {
    const { showLink } = useMotion();

    return (
        <div className="max-w-[calc(100%-80px)] mx-auto md:max-w-sm">
            {showLink && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h1 className="mb-6 text-sm">Time Capsule</h1>
                    <h2 className="text-3xl leading-[1.4] mb-6">メッセージを<br />保存しました</h2>
                    <p className="text-sm leading-[1.6] mb-8">
                        あなたのメッセージは1年間封印されました。1年後にアプリを開くと、メッセージを読むことができます。
                    </p>
                    <Link href="/view" className="block text-center text-sm bg-white text-green-500 my-6 px-6 py-3 rounded-full hover:bg-green-500 hover:text-white transition-colors">
                        1年後に確認できます
                    </Link>
                    <Link
                        href="/"
                        className="text-center text-sm text-white hover:border-b hover:py-1"
                    >
                        TOPへ戻る
                    </Link>
                </motion.div>
            )}
        </div>
    )
}