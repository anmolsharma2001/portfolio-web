// src/components/ui/scroll-area.jsx
import React from 'react';

const ScrollArea = ({ children, className }) => {
  return (
    <div className={`overflow-y-auto ${className}`}>
      {children}
    </div>
  );
};

export { ScrollArea };
