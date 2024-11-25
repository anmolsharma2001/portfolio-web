// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-16 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-8">Contact Me</h2>

//         {/* Social Links */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {/* First Row */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">GitHub</h3>
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-violet-600 hover:text-violet-800"
//             >
//               Visit my GitHub
//             </a>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
//             <a
//               href="mailto:contact@example.com"
//               className="text-violet-600 hover:text-violet-800"
//             >
//               Send me an Email
//             </a>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">LinkedIn</h3>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-violet-600 hover:text-violet-800"
//             >
//               Visit my LinkedIn
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing icons

const Contact = () => {
  return (
    <section id="contact" className=" mt-8">
      <div className="">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Connect</h2>

        {/* Contact Links with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* GitHub */}
          <div className="flex items-center space-x-4 bg-yellow-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <FaGithub className="text-3xl text-gray-900" />
            <div>
              {/* <h3 className="text-xl font-semibold text-gray-900">GitHub</h3> */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-800"
              >
                https://github.com/anmolsharma2001
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 bg-pink-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <FaEnvelope className="text-3xl text-gray-900" />
            <div>
              {/* <h3 className="text-xl font-semibold text-gray-900">Email</h3> */}
              <a
                href="mailto:contact@example.com"
                className="text-violet-600 hover:text-violet-800"
              >
                anmolsharma20012003@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-4 bg-blue-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all mt-8">
          <FaLinkedin className="text-3xl text-gray-900" />
          <div>
            {/* <h3 className="text-xl font-semibold text-gray-900">LinkedIn</h3> */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:text-violet-800"
            >
             https://www.linkedin.com/in/anmol-sharma-0b78a8250/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
