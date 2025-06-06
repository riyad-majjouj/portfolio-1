
import { useState } from 'react';
import { TerminalWindow } from '../TerminalWindow';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <TerminalWindow title="contact@developer:~$ send --to='developer@secure.dev'">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="terminal-prompt">
              <span className="text-terminal-accent">dev@mailer:~$</span>{' '}
              <span className="text-terminal-primary">compose --secure-message</span>
            </div>
            
            {submitted ? (
              <div className="terminal-output space-y-2 animate-fade-in">
                <div className="text-terminal-accent">
                  [SUCCESS] Message sent successfully!
                </div>
                <div className="text-terminal-muted">
                  Thank you for reaching out. I'll get back to you soon.
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-terminal-accent">--name=</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-transparent border border-terminal-border rounded px-4 py-2 text-terminal-primary focus:border-terminal-accent focus:outline-none font-mono"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-terminal-accent">--email=</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-transparent border border-terminal-border rounded px-4 py-2 text-terminal-primary focus:border-terminal-accent focus:outline-none font-mono"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-terminal-accent">--message=</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full h-32 bg-transparent border border-terminal-border rounded px-4 py-2 text-terminal-primary focus:border-terminal-accent focus:outline-none font-mono resize-none"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="terminal-window px-6 py-3 hover:animate-glow transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin w-4 h-4 border-2 border-terminal-accent border-t-transparent rounded-full"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="text-terminal-accent">./send_message --encrypted</span>
                  )}
                </button>
              </div>
            )}
            
            <div className="terminal-output text-sm space-y-1">
              <div className="text-terminal-muted">[SECURITY] Message encrypted with AES-256</div>
              <div className="text-terminal-muted">[ANTI-SPAM] reCAPTCHA validation enabled</div>
              <div className="text-terminal-muted">[PRIVACY] No data stored or shared</div>
            </div>
          </form>
        </TerminalWindow>
      </div>
    </section>
  );
};
