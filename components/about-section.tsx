import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  { subject: "Mathematics", grade: "A*", description: "Advanced calculus and statistics" },
  { subject: "Computer Science", grade: "A*", description: "Programming and algorithms" },
  { subject: "Physics", grade: "A", description: "Mechanics and quantum physics" },
  { subject: "Further Mathematics", grade: "A", description: "Complex numbers and matrices" },
]

const skills = [
  "Python Programming",
  "JavaScript & React",
  "Mathematical Modeling",
  "Data Analysis",
  "Problem Solving",
  "Research & Writing",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-primary">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I believe in using technology to address climate change and other world issues. To start, I have been
            learning physics and playing with microcontrollers in my free time. Exploring the world (and beyond) is also
            on my agenda. Looking forward to meeting fun and ambitious people!
          </p>
        </div>
      </div>
    </section>
  )
}
