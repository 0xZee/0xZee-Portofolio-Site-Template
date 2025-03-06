"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]" />

      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Hi, I'm <span className="title-text">0x Zee</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
            Cloud & AI Engineer specializing in Kubernetes, VMware, RAG, and MLOps
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mt-8 justify-center"
        >
          <Button asChild size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 mt-8"
        >
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/0xzee" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/0xzee" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com/0xzee" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

