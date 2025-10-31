"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, ArrowRight, MessageSquare } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">Let's Connect</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out and let's
            create something amazing together!
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {[
            {
              icon: Mail,
              title: "Email",
              contact: "nityashree.babu@gmail.com",
              href: "mailto:nityashree.babu@gmail.com",
              color: "from-cyan-500 to-blue-500",
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              contact: "Connect with me",
              href: "#",
              color: "from-blue-500 to-purple-500",
            },
            {
              icon: Github,
              title: "GitHub",
              contact: "View my repositories",
              href: "#",
              color: "from-purple-500 to-pink-500",
            },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <a key={idx} href={item.href} className="group block">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl blur opacity-0 group-hover:opacity-15 transition duration-500 pointer-events-none`}
                />
                <div className="relative bg-card/40 backdrop-blur border border-muted-foreground/10 rounded-xl p-6 hover:border-muted-foreground/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10`}>
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">{item.title}</p>
                        <p className="font-semibold group-hover:text-cyan-500 transition-colors">{item.contact}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-cyan-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <Button className="w-full md:w-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all group">
          <MessageSquare className="w-4 h-4 mr-2" />
          Send me a message
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
