
import { TypewriterText } from '../TypewriterText';
import { TerminalWindow } from '../TerminalWindow';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <TerminalWindow title="terminal@developer:~$ ./welcome.sh">
          <div className="space-y-4">
            <div className="terminal-prompt">
              <span className="text-terminal-accent">root@hackbox:~#</span>{' '}
              <TypewriterText 
                text="./initialize_portfolio.sh"
                speed={100}
                className="text-terminal-primary"
              />
            </div>
            
            <div className="terminal-output space-y-2 mt-6">
              <div>
                <span className="text-terminal-muted">[INFO]</span> Initializing developer profile...
              </div>
              <div>
                <span className="text-terminal-muted">[SUCCESS]</span> Loading MERN stack expertise...
              </div>
              <div>
                <span className="text-terminal-muted">[SUCCESS]</span> Security protocols activated...
              </div>
              <div>
                <span className="text-terminal-muted">[SUCCESS]</span> API integrations online...
              </div>
              <div>
                <span className="text-terminal-muted">[SUCCESS]</span> 3D rendering engine loaded...
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-terminal-accent glow">
                <TypewriterText 
                  text="FULL STACK DEVELOPER"
                  speed={80}
                />
              </h1>
              
              <div className="text-xl text-terminal-primary">
                <span className="text-terminal-accent">$</span>{' '}
                <TypewriterText 
                  text="echo 'Building secure, scalable applications with cutting-edge technology'"
                  speed={60}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="terminal-window px-6 py-3 hover:animate-glow transition-all duration-300">
                <span className="text-terminal-accent">./view_projects</span>
              </button>
              <button className="terminal-window px-6 py-3 hover:animate-glow transition-all duration-300">
                <span className="text-terminal-accent">./contact_dev</span>
              </button>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};
