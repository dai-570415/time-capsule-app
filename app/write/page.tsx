"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { useMotion } from "../hooks/useMotion"

export default function WritePage() {
    const [message, setMessage] = useState("")
    const { showLink } = useMotion();

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const now = new Date()
        localStorage.setItem(
            "oneYearMessage",
            JSON.stringify({
                message,
                timestamp: now.getTime(),
            }),
        )
        router.push("/confirmation")
    }

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
                    <h2 className="text-3xl leading-[1.4] mb-6">1年後の自分へのメッセージを書こう</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full text-black h-40 mb-6 p-4 border rounded"
                            placeholder="ここにメッセージを入力してください..."
                            required
                        />
                        <button
                            type="submit"
                            className="block text-center text-sm text-white bg-red-500 w-full mx-auto mb-6 px-6 py-3 rounded-full hover:text-red-500 hover:bg-white transition-colors">
                            メッセージを保存
                        </button>
                        <p className="text-sm leading-[1.6] mb-8">
                            ※注. デモ用なので1分後にメッセージが見られます。
                        </p>
                        <Link
                            href="/"
                            className="text-center text-sm text-white hover:border-b hover:py-1"
                        >
                            TOPへ戻る
                        </Link>
                    </form>
                </motion.div>
            )}
        </div>
    )
}