"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import ScrollTopButton from "@/components/scroll-top-button"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header />
      <div>{children}</div>
      <Footer />
      <ScrollTopButton />
    </main>
  )
}
