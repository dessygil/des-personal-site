
import React from 'react';
import './card.css';

export default function ProjectCard({ children, className }) {
  return (
    <div className={`card main-cards shadow ${className || ''}`} style={{ width: "18rem" }}>
      {children}
    </div>
  );
}
