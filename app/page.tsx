"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useMotion } from "./hooks/useMotion";
import { useEffect, useState } from "react";

export default function Home() {
  const { showLink } = useMotion();
  const [hasMessage, setHasMessage] = useState(false)

  useEffect(() => {
    const storedData = localStorage.getItem("oneYearMessage")
    if (storedData) {
      setHasMessage(true)
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
          <h2 className="text-3xl leading-[1.4] mb-6">1年後の自分に<br />メッセージを送ろう</h2>
          <p className="text-sm leading-[1.6] mb-8">
            1年後の自分に向けてメッセージを<br className="sp" />書いてみませんか？<br />
            書いたメッセージは1年間封印され、<br />
            1年後にアプリを開くと読むことができます。
          </p>
          <Link
            href="/write"
            className="block text-center text-sm bg-white text-green-500 mb-6 px-6 py-3 rounded-full hover:bg-green-500 hover:text-white transition-colors"
          >
            メッセージを書く
          </Link>

          {hasMessage && (
            <Link
              href="/view"
              className="text-center text-sm text-white hover:border-b hover:py-1"
            >
              1年後のメッセージをみる
            </Link>
          )}
        </motion.div>
      )}
    </div>
  )
}
