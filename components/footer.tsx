"use client"

import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-2">Nitya Shree B</h3>
            <p className="text-sm text-muted-foreground">CS Student | AI/ML Enthusiast | IoT Developer</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Links</p>
            <div className="space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Projects
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Legal</p>
            <div className="space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Nitya Shree B. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-muted transition-colors text-sm font-medium group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
