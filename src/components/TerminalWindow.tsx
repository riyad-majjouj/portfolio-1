
import { useState, useEffect } from 'react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title, children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`terminal-window rounded-lg overflow-hidden ${className}`}>
      {/* Terminal header */}
      <div className="bg-black border-b border-terminal-border p-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-terminal-text text-sm ml-4">{title}</span>
      </div>
      
      {/* Terminal content */}
      <div className="p-6 bg-terminal-bg">
        {children}
      </div>
    </div>
  );
};
