"use client"

import { Code2 } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", level: "Beginner" },
        { name: "Data Science", level: "Beginner" },
      ],
      color: "from-cyan-500 to-blue-500",
      icon: "🤖",
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", level: "Intermediate" },
        { name: "C Language", level: "Basic" },
      ],
      color: "from-blue-500 to-purple-500",
      icon: "💻",
    },
    {
      title: "Specializations",
      skills: [
        { name: "IoT", level: "Intermediate" },
        { name: "Problem Solving", level: "Advanced" },
      ],
      color: "from-purple-500 to-pink-500",
      icon: "⚡",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-cyan-500" />
            <span className="text-sm font-semibold text-cyan-500 uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance">Technical Expertise</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="group">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 pointer-events-none`}
              />
              <div className="relative bg-card/50 backdrop-blur border border-muted-foreground/10 rounded-2xl p-8 hover:border-muted-foreground/30 transition-all h-full">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="font-bold text-xl">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-foreground">{skill.name}</span>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                          style={{
                            width:
                              skill.level === "Advanced"
                                ? "90%"
                                : skill.level === "Intermediate"
                                  ? "70%"
                                  : skill.level === "Beginner"
                                    ? "50%"
                                    : "30%",
                          }}
                        />
                      </div>
                    </div>
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
