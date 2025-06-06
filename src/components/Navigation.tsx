
import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'home', label: './home', command: 'cd ~/' },
    { id: 'about', label: './about', command: 'whoami' },
    { id: 'projects', label: './projects', command: 'ls -la' },
    { id: 'security', label: './security', command: 'tail -f logs' },
    { id: 'api', label: './api', command: 'curl -X POST' },
    { id: '3d', label: './3d', command: 'render scene' },
    { id: 'contact', label: './contact', command: 'send --to' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="terminal-window px-6 py-3">
        <div className="flex items-center gap-1 text-sm font-mono">
          <span className="text-terminal-accent">nav@terminal:~$</span>
          <div className="flex gap-4 ml-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-terminal-primary hover:text-terminal-accent transition-colors relative group"
                title={item.command}
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terminal-accent transition-all duration-300 group-hover:w-full"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
