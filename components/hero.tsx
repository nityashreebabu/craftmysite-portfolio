"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 w-fit">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-xs font-semibold text-cyan-600 tracking-widest uppercase">
              Available for Opportunities
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-balance text-foreground">
              Hi, I'm a{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Computer Science
              </span>{" "}
              student
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-foreground/70">Specializing in AI, ML & IoT</p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Passionate about building intelligent systems and exploring emerging technologies. Currently pursuing B.Tech
            at VIT Chennai and BS Data Science at IIT Madras.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20 group">
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 border-foreground/20 hover:bg-foreground/5 px-8 py-6 text-base font-semibold transition-all duration-300 hover:border-foreground/40 bg-transparent"
            >
              Download Resume
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6">
          <div className="group">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl overflow-hidden shadow-xl border border-border/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="aspect-square relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30">
                  <div className="text-center">
                    <div className="text-7xl mb-3">👩‍💻</div>
                    <p className="text-foreground/60 font-semibold">Your Profile Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10 backdrop-blur-sm">
            <div className="mb-6">
              <p className="text-sm font-semibold text-white/90 mb-1">Passionate about</p>
              <h3 className="text-2xl font-bold">Tech & Innovation</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["Python", "ML/AI", "IoT", "Data Science", "Web Dev", "Ethics"].map((tag, idx) => (
                <div
                  key={tag}
                  className="bg-white/15 hover:bg-white/25 rounded-full px-4 py-3 text-sm font-semibold text-center backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px]"
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-card border border-border/50 rounded-2xl">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-background flex items-center justify-center text-white text-sm font-bold">
                V
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-background flex items-center justify-center text-white text-sm font-bold">
                I
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-background flex items-center justify-center text-white text-sm font-bold">
                T
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">VIT + IIT Madras</p>
              <p className="text-xs text-muted-foreground">Dual pursuit in tech excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
