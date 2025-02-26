"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useMotion } from "../hooks/useMotion";

export default function ViewPage() {
    const { showLink } = useMotion();
    const [message, setMessage] = useState<string | null>(null)
    const [canView, setCanView] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const storedData = localStorage.getItem("oneYearMessage")
        if (storedData) {
            const { message, timestamp } = JSON.parse(storedData)
            const now = new Date().getTime()
            // const oneYearInMs = 365 * 24 * 60 * 60 * 1000 // 1年
            const oneYearInMs = 60 * 1000 // 1分 デモ用
            if (now - timestamp >= oneYearInMs) {
                setMessage(message)
                setCanView(true)
            }
        }
    }, [])

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
                    <h2 className="text-3xl leading-[1.4] mb-6">1年前のメッセージ</h2>
                    {canView ? (
                        <div>
                            <button onClick={() => setIsOpen(true)} className="relative block w-64 mx-auto mb-8">
                                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-sm text-white w-full p-2 border bg-green-500 hover:text-green-500 hover:bg-white">開封できます</p>
                                <img src="/time-capsule.webp" className="w-full" alt="Time Capsule" />
                            </button>
                            {isOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="bg-white p-8 rounded-[2vw] shadow-lg w-80 text-center"
                                    >
                                        <p className="text-left text-black text-base mb-4">1年後の自分へ</p>
                                        <p className="text-justify text-sm text-black mb-6 pt-4 pb-4 border-t border-b border-dashed border-black-500">{message}</p>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="text-center text-sm text-black hover:text-green-500"
                                        >
                                            閉じる
                                        </button>
                                    </motion.div>
                                </div>
                            )}
                            <Link
                                href="/"
                                className="text-center text-sm text-white hover:border-b hover:py-1"
                            >
                                TOPへ戻る
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="relative">
                                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-sm text-white w-full p-2 border bg-red-500">1年後に確認できます</p>
                                <img src="/time-capsule.webp" className="block w-64 mx-auto mb-8" alt="" />
                            </div>
                            <p className="text-sm leading-[1.6] mb-8">
                                ※注. デモ用なので1分後にメッセージが見られます。
                            </p>
                            <Link
                                href="/"
                                className="text-center text-sm text-white hover:border-b hover:py-1"
                            >
                                TOPへ戻る
                            </Link>
                        </>
                    )}
                </motion.div>
            )}
        </div>
    )
}