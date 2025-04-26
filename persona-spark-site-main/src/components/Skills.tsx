
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Teamwork", level: 85 },
      { name: "Adaptability", level: 80 },
      { name: "Time Management", level: 75 },
      { name: "Leadership", level: 70 },
    ]
  }
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full">
        <div 
          className="h-2 bg-primary rounded-full transition-all duration-1000" 
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">A comprehensive list of my technical and soft skills</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
