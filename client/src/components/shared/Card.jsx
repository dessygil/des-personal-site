
import React from 'react';
import './card.css';

export default function Card({ children }) {
  return (
    <div className="card-shell flex flex-col min-h-[360px] sm:min-h-[400px] p-6 md:p-8 rounded-2xl shadow-md">
      <div className="flex flex-col gap-y-2 h-full">
        {children}
      </div>
    </div>
  );
}
