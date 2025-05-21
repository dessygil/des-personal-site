
import React from 'react';
import './cardshell.css';

export default function CardShell({ children }) {
  return (
    <div className="card-shell">
      {children}
    </div>
  );
}
