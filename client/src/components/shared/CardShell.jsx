
import React from 'react';
import './cardshell.css';

const CardShell = React.memo(function CardShell({ children }) {
  return (
    <div className="card-shell">
      {children}
    </div>
  );
}
