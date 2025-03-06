import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="#home" className="text-2xl font-bold title-text">
              0x Zee
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Cloud & AI Engineer specializing in Kubernetes, VMware, RAG, and MLOps. Building the future of intelligent
              infrastructure.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/0xzee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/0xzee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/0xzee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:contact@0xzee.dev"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} <span className="title-text">0x Zee</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

