
import { useState, useEffect } from 'react';
import { TerminalWindow } from '../TerminalWindow';

export const ApiSection = () => {
  const [apiResponse, setApiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const mockApiCall = () => {
    setIsLoading(true);
    setApiResponse('');
    
    setTimeout(() => {
      setApiResponse(JSON.stringify({
        status: "success",
        data: {
          endpoints: [
            "/api/auth/login",
            "/api/users/profile",
            "/api/projects/list",
            "/api/security/validate"
          ],
          integrations: ["Stripe", "SendGrid", "AWS S3", "OpenAI"],
          response_time: "45ms",
          rate_limit: "1000/hour"
        },
        timestamp: new Date().toISOString()
      }, null, 2));
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    mockApiCall();
  }, []);

  return (
    <section id="api" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <TerminalWindow title="api@developer:~$ curl -X POST /api/integrate">
          <div className="space-y-4">
            <div className="terminal-prompt">
              <span className="text-terminal-accent">dev@api-server:~$</span>{' '}
              <span className="text-terminal-primary">curl -X POST https://api.developer.com/integrate</span>
            </div>
            
            <div className="terminal-output">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin w-4 h-4 border-2 border-terminal-accent border-t-transparent rounded-full"></div>
                  <span className="text-terminal-muted">Loading...</span>
                </div>
              ) : (
                <pre className="text-terminal-primary text-sm whitespace-pre-wrap">
                  {apiResponse}
                </pre>
              )}
            </div>
            
            <button 
              onClick={mockApiCall}
              className="terminal-window px-4 py-2 text-terminal-accent hover:animate-glow transition-all"
              disabled={isLoading}
            >
              {isLoading ? 'Requesting...' : 'Make API Call'}
            </button>
          </div>
        </TerminalWindow>

        <TerminalWindow title="integrations@developer:~$ ls ./api-integrations">
          <div className="space-y-4">
            <div className="terminal-output space-y-3">
              <div className="text-terminal-accent mb-4">API Integration Expertise</div>
              
              {[
                { name: "Payment Processing", api: "Stripe API", status: "✓ Active" },
                { name: "Email Services", api: "SendGrid", status: "✓ Active" },
                { name: "Cloud Storage", api: "AWS S3", status: "✓ Active" },
                { name: "AI/ML Services", api: "OpenAI GPT", status: "✓ Active" },
                { name: "Social Auth", api: "OAuth 2.0", status: "✓ Active" },
                { name: "Real-time Data", api: "WebSocket", status: "✓ Active" },
                { name: "Maps & Location", api: "Google Maps", status: "✓ Active" },
                { name: "Analytics", api: "Google Analytics", status: "✓ Active" }
              ].map((integration, index) => (
                <div 
                  key={integration.name}
                  className="flex items-center justify-between p-3 terminal-window animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div>
                    <div className="text-terminal-primary font-semibold">{integration.name}</div>
                    <div className="text-terminal-muted text-sm">{integration.api}</div>
                  </div>
                  <div className="text-terminal-accent text-sm">{integration.status}</div>
                </div>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};
