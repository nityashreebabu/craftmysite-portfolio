"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Zap } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      description: "A Python-based application to record and manage daily expenses with data visualization.",
      tags: ["Python", "Data Management"],
      type: "Python Application",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "IoT Project",
      description:
        "An intelligent IoT system designed to solve real-world problems through automation and data collection.",
      tags: ["IoT", "Hardware", "Integration"],
      type: "In Progress",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "ML Model Development",
      description: "Building and training machine learning models for predictive analysis and pattern recognition.",
      tags: ["Machine Learning", "Python", "Data Science"],
      type: "In Progress",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-cyan-500" />
            <span className="text-sm font-semibold text-cyan-500 uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance">Featured Work</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group h-full">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500 pointer-events-none`}
              />
              <div className="relative bg-card/40 backdrop-blur border border-muted-foreground/10 rounded-2xl p-8 hover:border-muted-foreground/30 transition-all h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className={`bg-gradient-to-r ${project.gradient} text-white border-0 text-xs font-semibold`}
                    >
                      {project.type}
                    </Badge>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-cyan-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs bg-muted/50 hover:bg-muted transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
