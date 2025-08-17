"use client"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12">
          <img
            src="/professional-student-portrait.png"
            alt="Zhi Yang Profile"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-primary shadow-2xl"
          />
        </div>
        
        <h1 className="font-playfair font-black text-5xl md:text-7xl mb-8 text-primary leading-tight">
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
