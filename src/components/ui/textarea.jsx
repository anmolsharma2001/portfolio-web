// src/components/ui/textarea.jsx
import React from 'react';

const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  );
};

export { Textarea };
