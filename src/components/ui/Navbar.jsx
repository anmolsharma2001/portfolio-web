import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Profile Image and Name */}
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=40&h=40"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-bold text-lg text-gray-900">Anmol Sharma</span>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm"
          >
            Skills
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
