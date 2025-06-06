
import { useState, useEffect } from 'react';
import { TerminalWindow } from '../TerminalWindow';
import { TypewriterText } from '../TypewriterText';

export const AboutSection = () => {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Node.js/Express',
    'MongoDB/PostgreSQL',
    'Security & Authentication',
    'API Development',
    'Three.js/WebGL',
    'Docker/AWS'
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <TerminalWindow title="about@developer:~$ whoami">
          <div className="space-y-4">
            <div className="terminal-prompt">
              <span className="text-terminal-accent">dev@terminal:~$</span>{' '}
              <TypewriterText 
                text="whoami"
                speed={100}
                onComplete={() => setShowSkills(true)}
              />
            </div>
            
            {showSkills && (
              <div className="terminal-output space-y-3 animate-fade-in">
                <div className="text-terminal-primary">
                  <span className="text-terminal-accent">Name:</span> Full Stack Developer
                </div>
                <div className="text-terminal-primary">
                  <span className="text-terminal-accent">Role:</span> MERN Stack Specialist
                </div>
                <div className="text-terminal-primary">
                  <span className="text-terminal-accent">Focus:</span> Security + Performance + UX
                </div>
                <div className="text-terminal-primary">
                  <span className="text-terminal-accent">Experience:</span> 5+ years
                </div>
                
                <div className="mt-6">
                  <div className="text-terminal-accent mb-2">Bio:</div>
                  <div className="text-terminal-text leading-relaxed">
                    Passionate full-stack developer specializing in the MERN stack 
                    with expertise in advanced security practices, API integrations, 
                    and interactive 3D web experiences. I build scalable, secure 
                    applications that push the boundaries of web technology.
                  </div>
                </div>
              </div>
            )}
          </div>
        </TerminalWindow>

        <TerminalWindow title="skills@developer:~$ cat tech-stack.txt">
          <div className="space-y-4">
            <div className="terminal-prompt">
              <span className="text-terminal-accent">dev@terminal:~$</span>{' '}
              <span className="text-terminal-primary">cat tech-stack.txt</span>
            </div>
            
            <div className="terminal-output space-y-2">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <span className="text-terminal-accent">├──</span>
                  <span className="text-terminal-primary">{skill}</span>
                  <div className="flex-1 h-2 bg-terminal-bg border border-terminal-border rounded">
                    <div 
                      className="h-full bg-gradient-to-r from-terminal-muted to-terminal-accent rounded animate-glow"
                      style={{ 
                        width: `${85 + Math.random() * 15}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};
