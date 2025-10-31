"use client"

import { ArrowRight, Sparkles } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-500" />
            <span className="text-sm font-semibold text-cyan-500 uppercase tracking-widest">About</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance">My Journey & Education</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              I'm currently pursuing my B.Tech in Computer Science with specialization in AI & ML at VIT Chennai, and
              I'm enrolled in IIT Madras's BS Data Science Program starting September 2025.
            </p>
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              I'm passionate about technology and enjoy working on practical projects like IoT and automation. My goal
              is to build intelligent systems that solve real-world problems.
            </p>
            <button className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-semibold transition-colors group">
              Learn more about my work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Education Card 1 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-card/40 backdrop-blur border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">B.Tech Computer Science</h3>
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                </div>
                <p className="text-muted-foreground font-medium mb-1">VIT Chennai</p>
                <p className="text-sm text-muted-foreground mb-3">AI & ML Specialization</p>
                <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-500 text-xs font-semibold rounded-full">
                  Ongoing
                </div>
              </div>
            </div>

            {/* Education Card 2 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-card/40 backdrop-blur border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">BS Data Science</h3>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <p className="text-muted-foreground font-medium mb-1">IIT Madras</p>
                <p className="text-sm text-muted-foreground mb-3">Online Program</p>
                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-semibold rounded-full">
                  Sept 2025
                </div>
              </div>
            </div>

            {/* Education Card 3 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-card/40 backdrop-blur border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">AVR Club Design Team</h3>
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <p className="text-muted-foreground font-medium mb-1">VIT Chennai</p>
                <p className="text-sm text-muted-foreground mb-3">Tech & Design</p>
                <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 text-xs font-semibold rounded-full">
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
