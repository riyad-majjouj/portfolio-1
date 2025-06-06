
import { TerminalWindow } from '../TerminalWindow';
import { TypewriterText } from '../TypewriterText';

export const ProjectsSection = () => {
  const projects = [
    {
      name: "secure-auth-api",
      tech: ["Node.js", "JWT", "bcrypt", "MongoDB"],
      description: "Advanced authentication system with rate limiting and security headers",
      demo: "#",
      github: "#"
    },
    {
      name: "3d-portfolio-threejs",
      tech: ["React", "Three.js", "WebGL", "TypeScript"],
      description: "Interactive 3D portfolio with real-time rendering and animations",
      demo: "#",
      github: "#"
    },
    {
      name: "real-time-dashboard",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      description: "Real-time analytics dashboard with live data visualization",
      demo: "#",
      github: "#"
    },
    {
      name: "api-integration-hub",
      tech: ["Next.js", "REST", "GraphQL", "Redis"],
      description: "Centralized API management system with caching and monitoring",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-7xl w-full">
        <TerminalWindow title="projects@developer:~$ ls -la ./projects">
          <div className="space-y-6">
            <div className="terminal-prompt">
              <span className="text-terminal-accent">dev@terminal:~/projects$</span>{' '}
              <TypewriterText 
                text="ls -la"
                speed={100}
              />
            </div>
            
            <div className="terminal-output">
              <div className="text-terminal-muted mb-4">
                total {projects.length} projects
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div 
                    key={project.name}
                    className="terminal-window p-6 hover:animate-glow transition-all duration-300 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-terminal-accent">📁</span>
                        <span className="text-terminal-primary font-bold text-lg group-hover:text-terminal-accent transition-colors">
                          {project.name}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-terminal-muted text-terminal-accent text-xs border border-terminal-border rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-terminal-text text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex gap-4 pt-4">
                        <a 
                          href={project.demo}
                          className="text-terminal-accent hover:text-terminal-primary transition-colors text-sm"
                        >
                          [live demo]
                        </a>
                        <a 
                          href={project.github}
                          className="text-terminal-accent hover:text-terminal-primary transition-colors text-sm"
                        >
                          [source code]
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};
