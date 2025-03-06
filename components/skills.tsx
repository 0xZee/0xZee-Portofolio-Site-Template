"use client"

import { motion } from "framer-motion"
import { Cloud, Database, Server, Code, Brain, GitBranch, Monitor, Terminal } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Cloud Technologies",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Kubernetes", level: 95 },
        { name: "Docker", level: 90 },
        { name: "AWS", level: 85 },
        { name: "Azure", level: 80 },
        { name: "GCP", level: 75 },
      ],
    },
    {
      title: "Virtualization",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: [
        { name: "VMware", level: 90 },
        { name: "Proxmox", level: 85 },
        { name: "Hyper-V", level: 75 },
        { name: "KVM", level: 80 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Elasticsearch", level: 75 },
      ],
    },
    {
      title: "Programming",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "Go", level: 80 },
        { name: "Bash", level: 90 },
      ],
    },
    {
      title: "AI & ML",
      icon: <Brain className="h-8 w-8 text-primary" />,
      skills: [
        { name: "RAG Systems", level: 90 },
        { name: "MLOps", level: 85 },
        { name: "Fine-tuning", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "PyTorch", level: 80 },
      ],
    },
    {
      title: "DevOps",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      skills: [
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 85 },
        { name: "Ansible", level: 80 },
        { name: "Monitoring", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Skills & <span className="title-text">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm">
            <Terminal className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-xl font-bold">50+</h4>
            <p className="text-sm text-muted-foreground text-center">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm">
            <Cloud className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-xl font-bold">100+</h4>
            <p className="text-sm text-muted-foreground text-center">Cloud Deployments</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm">
            <Brain className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-xl font-bold">25+</h4>
            <p className="text-sm text-muted-foreground text-center">AI Models Trained</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm">
            <Monitor className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-xl font-bold">8+</h4>
            <p className="text-sm text-muted-foreground text-center">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

