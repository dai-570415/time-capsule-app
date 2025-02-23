import type React from "react"
import "./globals.css"

export const metadata = {
  title: "未来の自分へ、今の想いを残そう",
  description: "1年後の自分にメッセージを届けるタイムカプセルアプリ。今の気持ちや目標を記録し、未来の自分へサプライズを。思い出や決意を大切に保管し、成長を実感しよう。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body style={{ backgroundImage: "url('/background.jpg')" }}>
        <main className="flex flex-col min-h-screen justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}

