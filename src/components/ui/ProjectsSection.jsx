// import React, { useState } from "react";

// const ProjectsSection = ({ projects }) => {
//   const [visibleCount, setVisibleCount] = useState(3);
//   const [isViewMoreActive, setIsViewMoreActive] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleViewMore = () => {
//     setVisibleCount((prevCount) => prevCount + 3);
//     setIsViewMoreActive(true);
//   };

//   const handleCloseExtraProjects = () => {
//     setVisibleCount(3);
//     setIsViewMoreActive(false);
//   };

//   const handleClick = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
//           {projects.slice(0, visibleCount).map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer w-full max-w-xs"
//               onClick={() => handleClick(project)}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-32 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
//                 <p className="text-gray-600 text-sm">{project.description}</p>
//                 <div className="flex flex-wrap mt-2 justify-center">
//                   {project.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="text-xs bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex justify-around mt-4">
//                   {project.codeLink && (
//                     <a
//                       href={project.codeLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline"
//                     >
//                       Code
//                     </a>
//                   )}
//                   {project.deploymentLink && (
//                     <a
//                       href={project.deploymentLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline"
//                     >
//                       Deployment
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {!isViewMoreActive && visibleCount < projects.length && (
//           <button
//             onClick={handleViewMore}
//             className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             View More
//           </button>
//         )}

//         {isViewMoreActive && (
//           <button
//             onClick={handleCloseExtraProjects}
//             className="mt-8 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//           >
//             Close Extra Projects
//           </button>
//         )}
//       </div>

//       {/* Modal Section */}
//       {selectedProject && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="text-gray-500 float-right text-xl"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <img
//               src={selectedProject.image}
//               alt={selectedProject.title}
//               className="w-full h-64 object-cover rounded mb-4"
//             />
//             <h3 className="font-semibold text-2xl mb-2">{selectedProject.title}</h3>
//             <p className="text-gray-700 mb-4">{selectedProject.description}</p>
//             <ul className="list-disc pl-5 mb-4">
//               {selectedProject.functionalities.map((func, idx) => (
//                 <li key={idx} className="text-gray-600 text-sm">
//                   {func}
//                 </li>
//               ))}
//             </ul>
//             <div className="flex flex-wrap mb-4 justify-center">
//               {selectedProject.tags.map((tag, idx) => (
//                 <span
//                   key={idx}
//                   className="text-xs bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <div className="flex space-x-4 justify-center">
//               {selectedProject.codeLink && (
//                 <a
//                   href={selectedProject.codeLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   Code
//                 </a>
//               )}
//               {selectedProject.deploymentLink && (
//                 <a
//                   href={selectedProject.deploymentLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   Deployment
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProjectsSection;

// import React, { useState } from "react";

// const ProjectSection = () => {
//   const [expandedProject, setExpandedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       name: "React Chat App",
//       image: "https://via.placeholder.com/150", // Replace with your project image URL
//       shortDescription: "A real-time chat application built with React and Firebase.",
//       functions: [
//         "Real-time chat updates",
//         "Image and file sharing",
//         "User blocking functionality",
//         "Responsive and user-friendly UI",
//       ],
//       techStack: [
//         { name: "React", color: "bg-blue-100 text-blue-800" },
//         { name: "Firebase", color: "bg-orange-100 text-orange-800" },
//         { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
//       ],
//       codeLink: "https://github.com/username/react-chat-app",
//       deploymentLink: "https://react-chat-app.vercel.app",
//     },
//     {
//       id: 2,
//       name: "Voice Recognition System",
//       image: "https://via.placeholder.com/150", // Replace with your project image URL
//       shortDescription: "A system to recognize speakers using voice data.",
//       functions: [
//         "Collects diverse voice recordings",
//         "Uses FFT for feature extraction",
//         "1D ConvNet for speaker recognition",
//         "Provides speaker name and profile link",
//       ],
//       techStack: [
//         { name: "Python", color: "bg-green-100 text-green-800" },
//         { name: "TensorFlow", color: "bg-purple-100 text-purple-800" },
//         { name: "Fast Fourier Transform", color: "bg-cyan-100 text-cyan-800" },
//       ],
//       codeLink: "https://github.com/username/voice-recognition",
//       deploymentLink: "https://voice-recognition-system.vercel.app",
//     },
//   ];

//   const toggleProject = (id) => {
//     setExpandedProject(expandedProject === id ? null : id);
//   };

//   return (
//     <section className=" bg-white">
//       <h2 className="text-xl font-semibold mb-6">Projects</h2>

//       <div className="space-y-6">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="border rounded-lg p-4 bg-pink-50 shadow-sm"
//           >
//             {/* Project Image and Name */}
//             <div
//               className="flex items-center cursor-pointer"
//               onClick={() => toggleProject(project.id)}
//             >
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-16 h-16 rounded-lg mr-4 object-cover"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold">{project.name}</h3>
//                 <p className="text-gray-600">{project.shortDescription}</p>
//               </div>
//             </div>

//             {/* Expanded Details */}
//             {expandedProject === project.id && (
//               <div className="mt-4">
//                 {/* Technology Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.techStack.map((tech, index) => (
//                     <span
//                       key={index}
//                       className={`px-3 py-1 text-sm font-medium rounded-full ${tech.color}`}
//                     >
//                       {tech.name}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Functions */}
//                 <h4 className="font-semibold mb-2">Key Functions:</h4>
//                 <ul className="list-disc ml-5 text-gray-600">
//                   {project.functions.map((func, index) => (
//                     <li key={index} className="mb-2">
//                       {func}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Links */}
//                 <div className="mt-4">
//                   <a
//                     href={project.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline mr-4"
//                   >
//                     View Code
//                   </a>
//                   <a
//                     href={project.deploymentLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                   >
//                     View Deployment
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;

import React, { useState } from "react";

const ProjectSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      name: "React Chat App",
      image: "images/1000081485 (1).jpg",
      shortDescription: "Developed a full-featured chat application using React for the front end and Firebase for backend services.",
      functions: [
        "Implemented real-time messaging, user authentication, and Firestore database for storing chat data.",
        "Features include image and file uploads, user blocking, and responsive UI design.",
        "Leveraged Zustand for state management and integrated Firebase Storage for media handling.",
      ],
      techStack: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "Firebase", color: "bg-orange-100 text-orange-800" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
      ],
      codeLink: "https://github.com/anmolsharma2001/react_chat_app",
      // deploymentLink: "https://react-chat-app.vercel.app",
      containerColor: "bg-blue-50 border-blue-200",
    },
    // Add more projects here...
    {
      id: 2,
      name: "Email Scraper Chrome Extension",
      image: "images/Screenshot (260).png",
      shortDescription: "A Chrome extension to scrape emails from web pages.",
      functions: [
        "Developed a Chrome extension using JavaScript, HTML/CSS, and Manifest V3 to scrape email addresses from web pages.",
        "Implemented content scripts to dynamically extract and display emails in a popup interface.",
        "Integrated Chrome's Scripting API to execute email scraping functions on active tabs.",
      ],
      techStack: [
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
        { name: "HTML", color: "bg-pink-100 text-pink-800" },
        { name: "CSS", color: "bg-indigo-100 text-indigo-800" },
      ],
      codeLink: "https://github.com/anmolsharma2001/Email_Scraper_chrome_Extension",
      deploymentLink: "https://voice-recognition-system.vercel.app",
      containerColor: "bg-green-50 border-green-200",
    },
    {
      id: 3,
      name: "Text Summarizer",
      image: "images/1000081488 (1).jpg",
      shortDescription: "Developed a tool for condensing texts into concise summaries, enhancing accessibility",
      functions: [
        "Designed an intuitive front-end interface.",
        "Collaborated on integrating NLP algorithms for high-quality summarization.",
      ],
      techStack: [
        { name: "HTML", color: "bg-pink-100 text-pink-800" },
        { name: "CSS", color: "bg-indigo-100 text-indigo-800" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
      ],
      codeLink: "https://github.com/anmolsharma2001/text-summariser",
      deploymentLink: "https://tech-news.vercel.app",
      containerColor: "bg-yellow-50 border-yellow-200",
    },
    {
      id: 4,
      name: "Luko Dog Food website Design",
      image: "src/images/luko-catalog.webp",
      shortDescription: "Leveraged this project to showcase design skills while learning new tools and client collaboration as a freelancer.",
      functions: [
        "Designed UI for an e-commerce dog food website using Figma",
        "Create User-friendly interfaces for key pages.", 
        "focusing on enhancing user engagement.",
      ],
      techStack: [
        { name: "UI/UX", color: "bg-yellow-100 text-yellow-800" },
        { name: "Wireframing", color: "bg-pink-100 text-pink-800" },
        { name: "Figma", color: "bg-indigo-100 text-indigo-800" },
      ],
      codeLink: "https://lnkd.in/dcdWU63X",
      deploymentLink: "https://chrome.google.com",
      containerColor: "bg-gray-50 border-gray-200",
    },
    {
      id: 5,
      name: "Conway's Game of Life",
      image: "https://via.placeholder.com/600",
      shortDescription: "A simulation of Conway's Game of Life.",
      functions: [
        "Interactive grid-based life simulation",
        "Adjustable grid size and speed",
        "Clear and reset functionality",
        "Responsive design",
      ],
      techStack: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "CSS", color: "bg-indigo-100 text-indigo-800" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
      ],
      codeLink: "https://github.com/username/game-of-life",
      deploymentLink: "https://game-of-life.vercel.app",
      containerColor: "bg-blue-50 border-blue-200",
    },
  ];

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const toggleShowAll = () => {
    setShowAllProjects(!showAllProjects);
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Projects</h2>

      <div className="space-y-6">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className={`border rounded-lg p-4 shadow-sm ${project.containerColor}`}
          >
            <div>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.shortDescription}</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                onClick={() => toggleProject(project.id)}
              >
                {expandedProject === project.id ? "Hide Details" : "View Details"}
              </button>
            </div>
            {expandedProject === project.id && (
              <div className="mt-4">
                <div className="flex justify-center mb-4">
                  <img
                    src={project.image}
                    alt={`${project.name} Enlarged`}
                    className="w-80 h-auto rounded-lg object-cover shadow-md"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <h4 className="font-semibold mb-2">Key Functions:</h4>
                <ul className="list-disc ml-5 text-gray-600">
                  {project.functions.map((func, index) => (
                    <li key={index} className="mb-2">
                      {func}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mr-4"
                  >
                    View Code
                  </a>
                  {/* <a
                    href={project.deploymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Deployment
                  </a> */}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center mt-6">
        <button
          className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          onClick={toggleShowAll}
        >
          {showAllProjects ? "Close Extra Projects" : "See More Projects"}
        </button>
      </div> */}
    </section>
  );
};

export default ProjectSection;
