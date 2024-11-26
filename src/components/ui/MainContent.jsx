import React from "react";
import Navbar from "./Navbar";
import IMG-20240416-WA0026.jpg from './IMG-20240416-WA0026.jpg'

const MainContent = () => {
  return (
    
    <div className="">
      {/* Profile Section */}
      <div className="">
        <div className="">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={IMG-20240416-WA0026.jpg}
              alt="Profile Picture"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
            />
            <div className="flex-1">
              <div className="text-center sm:text-start">
                <h1 className="text-2xl font-bold text-gray-900 mb-1  flex items-center justify-center sm:justify-start gap-1">
                  Anmol Sharma
                <span className="text-sm text-gray-500 ">
                  (He/Him)
                </span>
                </h1>
                {/* <p className="text-gray-600 text-sm mb-2 flex items-center justify-center sm:justify-start gap-1">
                  Frontend Developer
                </p> */}
                <p className="text-gray-500 text-sm flex items-center justify-center sm:justify-start gap-1">
                  <i className="bi bi-geo-alt"></i> Indore, India
                </p>
              </div>
            </div>
            {/* Contact Links */}
            <div className="flex gap-4 items-center">
              <a
                href="mailto:anmolsharma20012003@gmail.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <i className="bi bi-envelope text-xl"></i>
              </a>
              <a
                href="https://github.com/anmolsharma2001?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <i className="bi bi-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anmol-sharma-0b78a8250/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <i className="bi bi-linkedin text-xl"></i>
              </a>
              {/* <a
                href="src\resume\Anmol_Sharma_resume (3).pdf"
                className="bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-violet-700 transition-colors flex items-center gap-2">
                Download Resume <i className="bi bi-download"></i>
              </a> */}

              <a
                href="resume\Anmol_Sharma_resume (3).pdf"
                download="Anmol_Sharma_Resume.pdf"
                className="bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-violet-700 transition-colors flex items-center gap-2"
                >
                Download Resume <i className="bi bi-download"></i>
                </a>


            </div>
          </div>

          {/* Profile Description */}
          <div className="mt-8">
            {/* <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Profile
            </h2> */}
            <p className="text-gray-600">
            Hey there! I am a fresher and aspiring software engineer, who relentlessly learns new tech daily. Thrives on connecting with tech enthusiasts, tackling real-world problems, and propelling enduring success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
