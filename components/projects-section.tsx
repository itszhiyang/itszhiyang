import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// This will be populated from MDX files
const projects = [
  {
    title: "Weather Prediction Model",
    description: "Machine learning model using Python to predict local weather patterns with 85% accuracy.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "/weather-dashboard.png",
    github: "#",
    demo: "#",
  },
  {
    title: "School Management System",
    description: "Full-stack web application for managing student records and course scheduling.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/school-management-dashboard.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Mathematical Visualization Tool",
    description: "Interactive tool for visualizing complex mathematical functions and equations.",
    technologies: ["JavaScript", "D3.js", "HTML5 Canvas", "CSS3"],
    image: "/placeholder-zj3us.png",
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-3xl md:text-4xl mb-4 text-foreground">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical projects demonstrating problem-solving skills, programming proficiency, and
            creative thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-work-sans text-xl text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    View Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button variant="outline" size="lg">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
