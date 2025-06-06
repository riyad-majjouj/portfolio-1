
import { useState, useEffect } from 'react';
import { TerminalWindow } from '../TerminalWindow';

export const SecuritySection = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const securityLogs = [
    "[AUTH] JWT token validation successful - User: admin@secure.dev",
    "[CORS] Cross-origin request validated from https://trusted-domain.com",
    "[RATE] Rate limiting active: 100 req/min per IP",
    "[HELMET] Security headers applied: CSP, HSTS, X-Frame-Options",
    "[BCRYPT] Password hash verification completed - Rounds: 12",
    "[OAUTH2] Google OAuth flow initiated - Scope: profile, email",
    "[SQL] Query parameterization preventing injection attacks",
    "[XSS] Input sanitization completed - 0 threats detected",
    "[HTTPS] TLS 1.3 connection established - Certificate valid",
    "[2FA] Two-factor authentication enabled for sensitive operations"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLog = securityLogs[Math.floor(Math.random() * securityLogs.length)];
        const newLogs = [...prev, newLog];
        return newLogs.slice(-8); // Keep only last 8 logs
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="security" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <TerminalWindow title="security@developer:~$ tail -f /var/log/security.log">
          <div className="space-y-2">
            <div className="text-terminal-accent mb-4">
              Real-time Security Monitoring
            </div>
            
            <div className="terminal-output space-y-1 font-mono text-sm">
              {logs.map((log, index) => (
                <div 
                  key={index}
                  className="animate-fade-in text-terminal-primary"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-terminal-muted">
                    {new Date().toLocaleTimeString()}
                  </span>{' '}
                  {log}
                </div>
              ))}
              <div className="cursor text-terminal-accent"></div>
            </div>
          </div>
        </TerminalWindow>

        <TerminalWindow title="security@developer:~$ cat security-stack.json">
          <div className="space-y-4">
            <div className="terminal-output">
              <pre className="text-terminal-primary text-sm">
{`{
  "authentication": {
    "jwt": "JSON Web Tokens",
    "oauth2": "Google, GitHub, LinkedIn",
    "bcrypt": "Password hashing",
    "2fa": "Time-based OTP"
  },
  "security_headers": {
    "helmet": "Express security middleware",
    "cors": "Cross-origin resource sharing",
    "csp": "Content Security Policy",
    "hsts": "HTTP Strict Transport Security"
  },
  "data_protection": {
    "encryption": "AES-256-GCM",
    "sanitization": "DOMPurify, validator.js",
    "rate_limiting": "Express rate limit",
    "sql_injection": "Parameterized queries"
  },
  "monitoring": {
    "winston": "Logging framework",
    "morgan": "HTTP request logger",
    "audit_trails": "User action tracking"
  }
}`}
              </pre>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};
