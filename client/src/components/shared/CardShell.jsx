
import React from 'react';
import './cardshell.css';

const CardShell = React.memo(({ children }) => {
  return (
    <div className="card-shell">
      {children}
    </div>
  );
});

export default CardShell;
