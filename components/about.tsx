"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            About <span className="title-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-xl"
          >
            <Image src="/placeholder.svg?height=500&width=500" alt="0x Zee" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Cloud & AI Engineer at <span className="title-text">0x Zee</span>
            </h3>
            <p className="text-muted-foreground">
              With over 8 years of experience in cloud infrastructure and AI development, I specialize in building
              scalable, resilient systems that leverage the latest in machine learning technologies. My expertise spans
              Kubernetes orchestration, VMware virtualization, and cutting-edge AI techniques including Retrieval
              Augmented Generation (RAG) and MLOps.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating efficient, automated solutions that bridge the gap between complex
              infrastructure and practical business applications. My background in both traditional IT and modern AI
              development allows me to approach problems with a unique perspective.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

