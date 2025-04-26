
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/5 rounded-bl-full" />
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 animate-fade-in">
            <p className="text-primary font-medium">Hi there, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold">Your Name</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">I build things for the web.</h2>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              I'm a passionate web developer specializing in creating exceptional digital experiences.
              Currently focused on building accessible, user-friendly applications.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button>Contact Me</Button>
              <Button variant="outline">View Projects</Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary relative flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" style={{ animationDuration: '15s' }} />
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-6xl">👋</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-primary h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
