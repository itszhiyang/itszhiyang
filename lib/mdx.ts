import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export interface ProjectMetadata {
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
  demo: string
  featured: boolean
  date: string
}

export interface Project {
  slug: string
  metadata: ProjectMetadata
  content: string
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  const projects = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => {
      const slug = name.replace(/\.mdx$/, "")
      const fullPath = path.join(projectsDirectory, name)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        metadata: data as ProjectMetadata,
        content,
      }
    })
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())

  return projects
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      metadata: data as ProjectMetadata,
      content,
    }
  } catch {
    return null
  }
}
