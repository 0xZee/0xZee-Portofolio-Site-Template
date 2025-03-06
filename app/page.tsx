"use client"

import { useEffect } from "react"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

