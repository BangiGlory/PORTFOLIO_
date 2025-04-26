
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A brief introduction about who I am and what I do</p>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-primary/10 rounded-lg overflow-hidden">
                {/* Replace with your own image */}
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  <span className="text-8xl">😊</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg border-4 border-background" />
            </div>
          </div>
          
          <div className="lg:w-3/5 space-y-6">
            <p className="text-lg">
              Hello! My name is <span className="font-semibold text-primary">Your Name</span>, and I enjoy creating things that live on the internet. My interest in web development started back in 2010 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            
            <p className="text-lg">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            
            <p className="text-lg">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-4">
              {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Next.js", "Tailwind CSS"].map((tech, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2 text-primary">▹</span> {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
