
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

const projectsData: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description: "A responsive admin dashboard for an e-commerce platform with data visualization, user management, and order tracking.",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Recipe Finder App",
    description: "A web application that allows users to search for recipes by ingredients, dietary restrictions, and meal type.",
    image: "/placeholder.svg",
    tags: ["Next.js", "API Integration", "Responsive Design"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management Tool",
    description: "A Kanban-style task management application with drag-and-drop functionality, user authentication, and task filtering.",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "Redux", "CSS Modules"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Weather Application",
    description: "A weather forecast application that displays current weather and 5-day forecast based on user location or search.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "OpenWeather API", "CSS Grid", "Geolocation API"],
    demoLink: "#",
    githubLink: "#"
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A showcase of my recent web development work</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ 
                    transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" /> 
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
