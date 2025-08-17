"use client"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-sans text-primary" style={{ fontFamily: "var(--font-pacifico)" }}>
          Hi, I'm Zhi Yang
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          passionate about everything
          <span className="text-primary font-semibold"> science</span>,
          <span className="text-primary font-semibold"> space</span> and
          <span className="text-primary font-semibold"> robotics</span>
        </p>
      </div>
    </section>
  )
}