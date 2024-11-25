// import React from "react";

// const WorkExperience = () => {
//   const skills = [
//     { name: "HTML", icon: "bi-code-slash", color: "blue-100 text-blue-800" },
//     { name: "CSS", icon: "bi-hurricane", color: "pink-100 text-pink-800" },
//     { name: "Bootstrap", icon: "bi-wind", color: "blue-100 text-blue-800" },
//     { name: "Javascript", icon: "bi-braces", color: "yellow-200 text-sky-800" },
//     { name: "Figma", icon: "bi-wind", color: "blue-100 text-blue-800" },
//   ];
//   return (
//     <section>
//       <h2 className="text-xl font-semibold mb-6 mt-8">Experience</h2>
//       <div>
//         <div className="mb-8">
//           <div className="flex items-center mb-2">
//             <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center mr-4 border-2">
//               <img src="src/images/Screenshot (269).png" alt="" />
//             </div>
//             <div className="border-l-2 border-gray-200 pl-4">
//               <h3 className="text-l font-semibold">Alphawizz Technologies Pvt. Ltd.</h3>
//               <p className="text-gray-600">May 2024 - June 2024</p>
//               <p className="text-gray-600">
//                 <i className="bi bi-geo-alt"></i>Indore, Madhya Pradesh, India · Intern
//               </p>
//             </div>
//           </div>
//           <div className="ml-16">
//             <h4 className="font-semibold mb-2">Frontend Developer Intern</h4>
//             <h5 className="font-semibold mb-2"></h5>
//             <ul className="list-disc ml-5 text-gray-600">
//               <li className="mb-2">
//               Developed responsive, accessible, and user-friendly web pages.
//               </li>
//               <li className="mb-2">
//               Implemented advanced interactivity using JavaScript to create seamless navigation experiences on web pages.
//               </li>
//               <li className="mb-2">
//               Collaborated with design and backend teams.
//               </li>
//             </ul>

//             <div className="flex flex-wrap gap-3 mt-3">
//           {skills.map((skill, index) => (
//             <span
//               key={index}
//               className={`skill-badge px-4 py-2 bg-${skill.color} rounded-full text-sm font-medium`}
//             >
//               <i className={`bi ${skill.icon}`}></i> {skill.name}
//             </span>
//           ))}
//         </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkExperience;


import React, { useState } from "react";

const WorkExperience = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle details

  const skills = [
    { name: "HTML", icon: "bi-code-slash", color: "blue-100 text-blue-800" },
    { name: "CSS", icon: "bi-hurricane", color: "pink-100 text-pink-800" },
    { name: "Bootstrap", icon: "bi-wind", color: "blue-100 text-blue-800" },
    { name: "Javascript", icon: "bi-braces", color: "yellow-200 text-sky-800" },
    { name: "Figma", icon: "bi-wind", color: "blue-100 text-blue-800" },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-6 mt-8">Experience</h2>
      <div>
        {/* Clickable div wrapping the entire content */}
        <div
          className="cursor-pointer border p-4 rounded shadow-lg mb-8"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Company and Intern details */}
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center mr-4 border-2">
              <img src="src/images/Screenshot (269).png" alt="" />
            </div>
            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="text-l font-semibold">Alphawizz Technologies Pvt. Ltd.</h3>
              <p className="text-gray-600">May 2024 - June 2024</p>
              <p className="text-gray-600">
                <i className="bi bi-geo-alt"></i> Indore, Madhya Pradesh, India · Intern
              </p>
            </div>
          </div>

          {/* Intern Title */}
          <h4 className="font-semibold mb-2">Frontend Developer Intern</h4>

          {/* Skills Section */}
          <div className="flex flex-wrap gap-3 mt-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`skill-badge px-4 py-2 bg-${skill.color} rounded-full text-sm font-medium`}
              >
                <i className={`bi ${skill.icon}`}></i> {skill.name}
              </span>
            ))}
          </div>

          {/* Conditional rendering for additional details */}
          {isExpanded && (
            <div>
              <ul className="list-disc ml-5 text-gray-600 mt-4">
                <li className="mb-2">
                  Developed responsive, accessible, and user-friendly web pages.
                </li>
                <li className="mb-2">
                  Implemented advanced interactivity using JavaScript to create seamless
                  navigation experiences on web pages.
                </li>
                <li className="mb-2">Collaborated with design and backend teams.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
