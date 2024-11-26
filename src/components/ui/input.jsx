// src/components/ui/input.jsx
import React from 'react';

const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  );
};

export { Input };