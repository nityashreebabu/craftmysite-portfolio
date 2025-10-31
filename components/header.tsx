"use client"

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"></div>
          <span className="font-semibold text-lg">Nitya Shree B</span>
        </div>
        <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">Get in Touch</Button>
      </div>
    </header>
  )
}
