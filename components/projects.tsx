"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "KubeFlow Orchestrator",
      description:
        "An advanced Kubernetes-based workflow orchestration system for ML pipelines, enabling seamless deployment and monitoring of machine learning models.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Kubernetes", "Python", "MLOps", "Docker"],
      github: "https://github.com/0xzee/kubeflow-orchestrator",
      demo: "https://kubeflow-demo.example.com",
    },
    {
      title: "RAG Knowledge Base",
      description:
        "A Retrieval Augmented Generation system that enhances LLM responses with domain-specific knowledge, improving accuracy and reducing hallucinations.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["RAG", "Python", "Vector DB", "LangChain"],
      github: "https://github.com/0xzee/rag-knowledge-base",
      demo: "https://rag-demo.example.com",
    },
    {
      title: "VMware Automation Suite",
      description:
        "Comprehensive automation toolkit for VMware environments, enabling infrastructure as code, automated provisioning, and configuration management.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["VMware", "PowerCLI", "Terraform", "Ansible"],
      github: "https://github.com/0xzee/vmware-automation",
      demo: null,
    },
    {
      title: "MongoDB Analytics Platform",
      description:
        "Real-time analytics platform built on MongoDB, providing insights and visualization for large-scale data processing applications.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["MongoDB", "Node.js", "Express", "D3.js"],
      github: "https://github.com/0xzee/mongo-analytics",
      demo: "https://mongo-analytics.example.com",
    },
    {
      title: "LLM Fine-tuning Framework",
      description:
        "End-to-end framework for fine-tuning large language models on domain-specific data, with tools for data preparation, training, and evaluation.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["PyTorch", "Transformers", "PEFT", "Python"],
      github: "https://github.com/0xzee/llm-finetuning",
      demo: null,
    },
    {
      title: "Cloud Cost Optimizer",
      description:
        "Intelligent system for monitoring and optimizing cloud resource usage across AWS, Azure, and GCP, providing recommendations for cost reduction.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["AWS", "Azure", "GCP", "Terraform", "Python"],
      github: "https://github.com/0xzee/cloud-cost-optimizer",
      demo: "https://cost-optimizer.example.com",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Featured <span className="title-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm" className="gap-2">
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="https://github.com/0xzee" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github className="h-5 w-5" />
              View All Projects
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

