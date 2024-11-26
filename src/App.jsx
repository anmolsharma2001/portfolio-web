// import React, { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const App = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       const navLinks = document.querySelectorAll('nav a');

//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
//           const id = section.getAttribute('id');
//           navLinks.forEach(link => {
//             link.classList.remove('text-blue-600');
//             if (link.getAttribute('href') === `#${id}`) {
//               link.classList.add('text-blue-600');
//             }
//           });
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     element.scrollIntoView({ behavior: 'smooth' });
//     setIsMobileMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <ScrollArea className="h-screen">
//       <div className="bg-white">
//         <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
//           <div className="container mx-auto px-4 py-4">
//             <div className="flex justify-between items-center">
//               <a href="#" className="text-2xl font-bold text-gray-800">Portfolio.</a>
//               <div className="hidden md:flex space-x-8">
//                 {['home', 'gallery', 'about', 'projects', 'experience'].map((item) => (
//                   <a
//                     key={item}
//                     href={`#${item}`}
//                     onClick={(e) => scrollToSection(e, item)}
//                     className="text-gray-600 hover:text-gray-900"
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </a>
//                 ))}
//               </div>
//               <Button
//                 variant="ghost"
//                 className="md:hidden"
//                 onClick={toggleMenu}
//               >
//                 <i className="bi bi-list text-2xl"></i>
//               </Button>
//             </div>
//           </div>
//           {isMobileMenuOpen && (
//             <div className="md:hidden px-4 py-2 space-y-3 bg-white">
//               {['home', 'gallery', 'about', 'projects', 'experience'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item}`}
//                   onClick={(e) => scrollToSection(e, item)}
//                   className="block text-gray-600 hover:text-gray-900"
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </a>
//               ))}
//             </div>
//           )}
//         </nav>

//         <section id="home" className="pt-24 min-h-screen flex items-center">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
//                   Hi, I'm a <span className="text-blue-600">Creative Developer</span>
//                 </h1>
//                 <p className="text-gray-600 mb-8">
//                   Passionate about creating beautiful and functional web experiences.
//                 </p>
//                 <Button
//                   onClick={(e) => scrollToSection(e, 'contact')}
//                   className="bg-blue-600 hover:bg-blue-700"
//                 >
//                   Let's Talk
//                 </Button>
//               </div>
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//                   alt="Developer"
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Gallery Section */}
//         <section id="gallery" className="py-20 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
//           {/* ... Gallery content ... */}
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-20">
//           {/* ... About content ... */}

//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="py-20 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[1, 2, 3].map((project) => (
//                 <Card key={project} className="overflow-hidden">
//                   {/* ... Project card content ... */}
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="py-20">
//           {/* ... Experience content ... */}
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-20 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
//             <div className="max-w-md mx-auto">
//               <form className="space-y-6">
//                 <Input type="text" placeholder="Your Name" />
//                 <Input type="email" placeholder="Your Email" />
//                 <Textarea placeholder="Your Message" rows={4} />
//                 <Button type="submit" className="w-full">
//                   Send Message
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </section>

//         <footer className="bg-gray-800 text-white py-8">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="mb-4 md:mb-0">
//                 <p>&copy; 2023 My Portfolio. All rights reserved.</p>
//               </div>
//               <div className="flex space-x-6">
//                 <a href="#" className="hover:text-blue-400"><i className="bi bi-twitter"></i></a>
//                 <a href="#" className="hover:text-blue-600"><i className="bi bi-linkedin"></i></a>
//                 <a href="#" className="hover:text-gray-400"><i className="bi bi-github"></i></a>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </ScrollArea>
//   );
// };

// export default App;



// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const App = () => {

  
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       const navLinks = document.querySelectorAll("nav a");

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (
//           window.scrollY >= sectionTop - 150 &&
//           window.scrollY < sectionTop + sectionHeight - 150
//         ) {
//           const id = section.getAttribute("id");
//           navLinks.forEach((link) => {
//             link.classList.remove("text-blue-600");
//             if (link.getAttribute("href") === `#${id}`) {
//               link.classList.add("text-blue-600");
//             }
//           });
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     element.scrollIntoView({ behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const [selectedProject, setSelectedProject] = useState(null);
  
//   const projects = [
//     {
//       title: "E-commerce Platform",
//       description: "A full-stack e-commerce solution with modern UI/UX.",
//       image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
//       functionalities: [
//         "User-friendly product search and filtering.",
//         "Secure payment gateway integration.",
//         "Responsive design for all devices.",
//       ],
//       tags: ["React", "Node.js", "Express", "MongoDB"],
//       codeLink: "https://github.com/example/e-commerce",
//       deploymentLink: "https://ecommerce.example.com",
//     },
//     {
//       title: "Portfolio Website",
//       description: "A responsive portfolio website with modern design.",
//       image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
//       functionalities: [
//         "Interactive project showcase.",
//         "Dark and light mode toggling.",
//         "SEO-friendly structure.",
//       ],
//       tags: ["HTML", "CSS", "JavaScript"],
//       codeLink: "https://github.com/example/portfolio",
//       deploymentLink: "https://portfolio.example.com",
//     },
//     {
//       title: "Task Manager",
//       description: "A collaborative task management application.",
//       image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
//       functionalities: [
//         "Real-time task updates and notifications.",
//         "Drag-and-drop task organization.",
//         "User authentication with Firebase.",
//       ],
//       tags: ["Vue.js", "Firebase", "Vuex"],
//       codeLink: "https://github.com/example/task-manager",
//       deploymentLink: "https://taskmanager.example.com",
//     },
//   ];

//   return (
//     <ScrollArea className="h-screen">
//       <div className="bg-white">
//         <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
//           <div className="container mx-auto px-4 py-4">
//             <div className="flex justify-between items-center">
//               <a href="#" className="text-2xl font-bold text-gray-800">
//                 Anmol
//               </a>
//               <div className="hidden md:flex space-x-8">
//                 {["home", "gallery", "about", "projects", "experience"].map(
//                   (item) => (
//                     <a
//                       key={item}
//                       href={`#${item}`}
//                       onClick={(e) => scrollToSection(e, item)}
//                       className="text-gray-600 hover:text-gray-900"
//                     >
//                       {item.charAt(0).toUpperCase() + item.slice(1)}
//                     </a>
//                   )
//                 )}
//               </div>
//               <Button
//                 variant="ghost"
//                 className="md:hidden"
//                 onClick={toggleMenu}
//               >
//                 <i className="bi bi-list text-2xl"></i>
//               </Button>
//             </div>
//           </div>
//           {isMobileMenuOpen && (
//             <div className="md:hidden px-4 py-2 space-y-3 bg-white">
//               {["home", "gallery", "about", "projects", "experience"].map(
//                 (item) => (
//                   <a
//                     key={item}
//                     href={`#${item}`}
//                     onClick={(e) => scrollToSection(e, item)}
//                     className="block text-gray-600 hover:text-gray-900"
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </a>
//                 )
//               )}
//             </div>
//           )}
//         </nav>

//         <section id="home" className="pt-4 min-h-screen flex items-center">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
//                   Hi, I'm a <span className="text-blue-600">Anmol Sharma</span>
//                 </h1>
//                 <p className="text-gray-600 mb-8">
//                   Passionate about creating beautiful and functional web experiences.
//                 </p>
//                 <a
//                   href="#contact"
//                   className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
//                 >
//                   Let's Talk
//                 </a>
//                 <a
//                   href="/path-to-resume.pdf"
//                   download="Anmol_Sharma_Resume.pdf"
//                   className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-300 transition ml-5"
//                 >
//                 Resume
//                 </a>
//               </div>
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//                   alt="Developer"
//                   className="rounded-lg shadow-lg h-50"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>


//         <section id="about" className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <img
//                   src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
//                   alt="About Me"
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold mb-6">About Me</h2>
//                 <p className="text-gray-600 mb-6">
//                 I'm a dedicated frontend developer skilled in building modern, responsive, and user-friendly web applications. I enjoy transforming complex challenges into seamless, engaging, and impactful digital experiences.
//                 </p>
//                 <div className="grid grid-cols-3 gap-4">
//                   <div>
//                     <h3 className="font-bold mb-2">Skills</h3>
//                     <ul className="text-gray-600">
//                     <li>C/C++</li>
//                     <li>Java</li>
//                       <li>HTML5 & CSS3</li>
//                       <li>JavaScript</li>
//                       <li>React</li>
//                       <li>Bootstrap</li>
//                       <li>Tailwind CSS</li>
//                       <li>UI/UX</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h3 className="font-bold mb-2">Tools</h3>
//                     <ul className="text-gray-600">
//                       <li>Firebase</li>
//                       <li>Postman</li>
//                       <li>Figma</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h3 className="font-bold mb-2">Version Control</h3>
//                     <ul className="text-gray-600">
//                       <li>Git</li>
//                       <li>Postman</li>
//                       <li>Figma</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* <section id="projects" className="py-20 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 { title: "E-commerce Platform", description: "A full-stack e-commerce solution with modern UI/UX.", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", tags: ["React", "Node.js"] },
//                 { title: "Portfolio Website", description: "A responsive portfolio website with modern design.", image: "https://images.unsplash.com/photo-1555421689-491a97ff2040", tags: ["HTML", "CSS"] },
//                 { title: "Task Manager", description: "A collaborative task management application.", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3", tags: ["Vue.js", "Firebase"] },
//               ].map((project, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={`Project ${index + 1}`}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="font-bold text-xl mb-2">{project.title}</h3>
//                     <p className="text-gray-600 mb-4">{project.description}</p>
//                     <div className="flex space-x-2">
//                       {project.tags.map((tag, index) => (
//                         <span key={index} className="text-sm bg-gray-200 px-3 py-1 rounded-full">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section> */}

// <section id="projects" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
//               onClick={() => setSelectedProject(project)}
//             >
//               <img
//                 src={project.image}
//                 alt={`Project ${index + 1}`}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="font-bold text-xl mb-2">{project.title}</h3>
//                 <p className="text-gray-600">{project.description}</p>
//                 <div className="flex flex-wrap mt-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-sm bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedProject && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//           onClick={() => setSelectedProject(null)}
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="text-gray-500 float-right text-xl"
//               onClick={() => setSelectedProject(null)}
//             >
//               &times;
//             </button>
//             <img
//               src={selectedProject.image}
//               alt={selectedProject.title}
//               className="w-full h-64 object-cover rounded mb-4"
//             />
//             <h3 className="font-bold text-2xl mb-2">{selectedProject.title}</h3>
//             <p className="text-gray-700 mb-4">{selectedProject.description}</p>
//             <ul className="list-disc pl-5 mb-4">
//               {selectedProject.functionalities.map((func, index) => (
//                 <li key={index} className="text-gray-600">
//                   {func}
//                 </li>
//               ))}
//             </ul>
//             <div className="flex flex-wrap mb-4">
//               {selectedProject.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="text-sm bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <div className="flex space-x-4">
//               <a
//                 href={selectedProject.codeLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline"
//               >
//                 Code
//               </a>
//               <a
//                 href={selectedProject.deploymentLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline"
//               >
//                 Deployment
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>


// <section id="experience" className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
//         <div className="max-w-3xl mx-auto space-y-8">
//           {/* Experience Item 1 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <h3 className="font-bold text-xl">Senior Web Developer</h3>
//                 <p className="text-gray-600">Tech Solutions Inc.</p>
//               </div>
//               <span className="text-gray-500">2020 - Present</span>
//             </div>
//             <p className="text-gray-600">
//               Led the development of multiple web applications and mentored junior developers.
//             </p>
//           </div>
//           {/* Experience Item 2 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <h3 className="font-bold text-xl">Frontend Developer</h3>
//                 <p className="text-gray-600">Creative Agency</p>
//               </div>
//               <span className="text-gray-500">2018 - 2020</span>
//             </div>
//             <p className="text-gray-600">
//               Developed responsive websites and implemented modern UI/UX designs.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>

//     <section id="achievements" className="py-20 bg-gray-50">
//   <div className="container mx-auto px-4">
//     <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
//     <div className="space-y-10">
//       {/* Achievement Item 1 */}
//       <div className="flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
//         <div className="w-16 h-16 flex items-center justify-center bg-white bg-opacity-20 rounded-full mr-6">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             className="w-8 h-8"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//           </svg>
//         </div>
//         <div>
//           <h4 className="text-xl font-bold">Hackathon Winner</h4>
//           <p className="text-sm">Tech Innovators 2023</p>
//           <p className="mt-2 text-gray-100">
//             Won first prize in a national-level hackathon by developing an AI-powered solution.
//           </p>
//         </div>
//       </div>

//       {/* Achievement Item 2 */}
//       <div className="flex items-center bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white p-6 rounded-lg shadow-lg">
//         <div className="w-16 h-16 flex items-center justify-center bg-white bg-opacity-20 rounded-full mr-6">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             className="w-8 h-8"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 14C8.134 14 4 15.566 4 19V22H20V19C20 15.566 15.866 14 12 14Z" />
//           </svg>
//         </div>
//         <div>
//           <h4 className="text-xl font-bold">Best UI/UX Design</h4>
//           <p className="text-sm">Creative Sparks Awards</p>
//           <p className="mt-2 text-gray-100">
//             Recognized for creating a user-friendly and visually appealing interface for a mobile app.
//           </p>
//         </div>
//       </div>

//       {/* Achievement Item 3 */}
//       <div className="flex items-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white p-6 rounded-lg shadow-lg">
//         <div className="w-16 h-16 flex items-center justify-center bg-white bg-opacity-20 rounded-full mr-6">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             className="w-8 h-8"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 0L14.09 8.26H22L15.45 13.74L17.54 22L12 17.24L6.45 22L8.54 13.74L2 8.26H9.91L12 0Z" />
//           </svg>
//         </div>
//         <div>
//           <h4 className="text-xl font-bold">Employee of the Year</h4>
//           <p className="text-sm">Tech Solutions Inc.</p>
//           <p className="mt-2 text-gray-100">
//             Recognized as the top performer of the year for exceeding development goals and mentoring teammates.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <section id="gallery" className="py-20 bg-gray-50">
//   <div className="container mx-auto px-4">
//     <h2 className="text-3xl font-bold text-center mb-12"> Gallery</h2>
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//       {[
//         "https://images.unsplash.com/photo-1497366216548-37526070297c",
//         "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
//         "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
//         "https://images.unsplash.com/photo-1506765515384-028b60a970df",
//         "https://images.unsplash.com/photo-1518770660439-4636190af475",
//       ].map((image, index) => (
//         <div
//           key={index}
//           className={`gallery-img relative ${
//             index % 2 === 0 ? "-rotate-2" : "rotate-2"
//           } hover:rotate-0 transition-transform`}
//         >
//           <img
//             src={image}
//             alt={`Gallery ${index + 1}`}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//         <section id="contact" className="py-20 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
//             <form action="#" method="POST" className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-700">Your Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full px-4 py-2 border rounded-lg mt-2"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700">Your Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full px-4 py-2 border rounded-lg mt-2"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="message" className="block text-gray-700">Your Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   className="w-full px-4 py-2 border rounded-lg mt-2"
//                 ></textarea>
//               </div>
//               <Button className="w-full mt-4">Send Message</Button>
//             </form>
//           </div>
//         </section>

        

//         <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="flex-1 text-center mb-4 md:mb-0">
//             <p>&copy; 2023 My Portfolio. All rights reserved.</p>
//           </div>
//           <div className="flex space-x-6">
//             <a href="#" className="hover:text-blue-400">
//               <i className="bi bi-twitter"></i>
//             </a>
//             <a href="#" className="hover:text-blue-600">
//               <i className="bi bi-linkedin"></i>
//             </a>
//             <a href="#" className="hover:text-gray-400">
//               <i className="bi bi-github"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>

//       </div>
//     </ScrollArea>
//   );
// };

// export default App;


//final below

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import ProjectsSection from "./components/ui/ProjectsSection"; 

// const App = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       const navLinks = document.querySelectorAll("nav a");

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (
//           window.scrollY >= sectionTop - 150 &&
//           window.scrollY < sectionTop + sectionHeight - 150
//         ) {
//           const id = section.getAttribute("id");
//           navLinks.forEach((link) => {
//             link.classList.remove("text-blue-600");
//             if (link.getAttribute("href") === `#${id}`) {
//               link.classList.add("text-blue-600");
//             }
//           });
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     element.scrollIntoView({ behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const projects = [
//     {
//       image: "src/images/1000081485 (1).jpg",
//       title: "React Chat App",
//       description: " Developed a full-featured chat application using React for the front end and Firebase for backend services.",
//       tags: ["React", "Firebase"],
//       codeLink: "https://github.com/anmolsharma2001/react_chat_app",
//       deploymentLink: "#",
//       functionalities: [
//         "Implemented real-time messaging, user authentication, and Firestore database for storing chat data.",
//         "Features include image and file uploads, user blocking, and responsive UI design.",
//         "Leveraged Zustand for state management and integrated Firebase Storage for media handling.",
//       ],
//     },
//     {
//       image: "src/images/Screenshot (260).png",
//       title: "Email Scraper Chrome Extension",
//       description: "Developed a Chrome extension using JavaScript, HTML/CSS, and Manifest V3 to scrape email addresses from web pages.",
//       tags: ["HTML", "CSS", "javascript"],
//       codeLink: "https://github.com/anmolsharma2001/Email_Scraper_chrome_Extension/tree/main/chrome_extension",
//       deploymentLink: "#",
//       functionalities: [
//         "Implemented content scripts to dynamically extract and display emails in a popup interface.",
//         "Integrated Chrome's Scripting API to execute email scraping functions on active tabs.",
//       ],
//     },
//     {
//       image: "src/images/1000081488 (1).jpg",
//       title: "Text Summarizer",
//       description: " Developed a tool for condensing texts into concise summaries, enhancing accessibility.",
//       tags: ["HTML","Css","Python", "Flask"],
//       codeLink: "https://github.com/anmolsharma2001/text-summariser",
//       deploymentLink: "#",
//       functionalities: [
//         "Designed an intuitive front-end interface",
//         "Developed a tool for condensing texts into conci",
//         "Collaborated on integrating NLP algorithms for high-quality summarization.",
//       ],
//     },
//     // {
//     //   image: "project3.jpg",
//     //   title: "Project 3",
//     //   description: "This is the third project.",
//     //   tags: ["Python", "Django"],
//     //   codeLink: "https://github.com/user/project3",
//     //   deploymentLink: "https://project3.example.com",
//     //   functionalities: [
//     //     "Robust backend API",
//     //     "Dynamic content rendering",
//     //     "Role-based access control",
//     //   ],
//     // },
//     // {
//     //   image: "project3.jpg",
//     //   title: "Project 3",
//     //   description: "This is the third project.",
//     //   tags: ["Python", "Django"],
//     //   codeLink: "https://github.com/user/project3",
//     //   deploymentLink: "https://project3.example.com",
//     //   functionalities: [
//     //     "Robust backend API",
//     //     "Dynamic content rendering",
//     //     "Role-based access control",
//     //   ],
//     // },
    
//     // Add more projects as needed...
//   ];
//   return (
//     <ScrollArea className="h-screen">
//       <div className="bg-white">
//         <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
//           <div className="container mx-auto px-4 py-4">
//             <div className="flex justify-between items-center">
//               <a href="#" className="text-2xl font-bold text-gray-800">
//                 Anmol
//               </a>
//               <div className="hidden md:flex space-x-8">
//                 {["home", "gallery", "about", "projects", "experience"].map(
//                   (item) => (
//                     <a
//                       key={item}
//                       href={`#${item}`}
//                       onClick={(e) => scrollToSection(e, item)}
//                       className="text-gray-600 hover:text-gray-900"
//                     >
//                       {item.charAt(0).toUpperCase() + item.slice(1)}
//                     </a>
//                   )
//                 )}
//               </div>
//               <Button
//                 variant="ghost"
//                 className="md:hidden"
//                 onClick={toggleMenu}
//               >
//                 <i className="bi bi-list text-2xl"></i>
//               </Button>
//             </div>
//           </div>
//           {isMobileMenuOpen && (
//             <div className="md:hidden px-4 py-2 space-y-3 bg-white">
//               {["home", "gallery", "about", "projects", "experience"].map(
//                 (item) => (
//                   <a
//                     key={item}
//                     href={`#${item}`}
//                     onClick={(e) => scrollToSection(e, item)}
//                     className="block text-gray-600 hover:text-gray-900"
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </a>
//                 )
//               )}
//             </div>
//           )}
//         </nav>

// <section id="home" className="pt-4 min-h-screen flex items-center">
//   <div className="container mx-auto px-4 max-w-5xl">
//     <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
//       {/* Text Content */}
//       <div>
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
//           Hi, I'm <span className="text-blue-600">Anmol Sharma</span>
//         </h1>
//         <p className="text-gray-600 mb-8">
//           Passionate about creating beautiful and functional web experiences.
//         </p>
//         {/* Social Icons and Resume Button */}
//         <div className="flex items-center space-x-6">
//           {/* Email Icon */}
//           <a
//             href="mailto:your-email@example.com"
//             className="text-blue-600 hover:text-blue-800 text-2xl"
//             title="Email Me"
//           >
//             <i className="bi bi-envelope-fill"></i>
//           </a>
//           {/* LinkedIn Icon */}
//           <a
//             href="https://www.linkedin.com/in/your-linkedin-id/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:text-blue-800 text-2xl"
//             title="LinkedIn Profile"
//           >
//             <i className="bi bi-linkedin"></i>
//           </a>
//           {/* GitHub Icon */}
//           <a
//             href="https://github.com/your-github-id"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-800 hover:text-gray-900 text-2xl"
//             title="GitHub Profile"
//           >
//             <i className="bi bi-github"></i>
//           </a>
//           {/* Resume Button */}
//           <a
//             href="/path-to-resume.pdf"
//             download="Anmol_Sharma_Resume.pdf"
//             className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//           >
//             Resume
//           </a>
//         </div>
//       </div>
//       {/* Image Section */}
//       <div className="relative">
//         <img
//           src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//           alt="Developer"
//           className="rounded-lg shadow-lg h-50"
//         />
//       </div>
//     </div>
//   </div>
// </section>

//         <section id="about" className="py-20">
//           <div className="container mx-auto px-4 max-w-5xl">
//             <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
//               <div>
//                 <img
//                   src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
//                   alt="About Me"
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold mb-6">About Me</h2>
//                 <p className="text-gray-600 mb-6">
//                   I'm a dedicated frontend developer skilled in building modern, responsive, and user-friendly web applications. I enjoy transforming complex challenges into seamless, engaging, and impactful digital experiences.
//                 </p>
//                 <div className="grid grid-cols-4 gap-4">
//                   <div>
//                     <h3 className="font-bold mb-2">Skills</h3>
//                     <ul className="text-gray-600">
//                       <li>C/C++</li>
//                       <li>Java</li>
//                       <li>HTML5 & CSS3</li>
//                       <li>JavaScript</li>
//                       <li>React</li>
//                       <li>Bootstrap</li>
//                       <li>Tailwind CSS</li>
//                       <li>UI/UX</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h3 className="font-bold mb-2">Tools</h3>
//                     <ul className="text-gray-600">
//                       <li>Firebase</li>
//                       <li>Postman</li>
//                       <li>Figma</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h3 className="font-bold mb-2">Version Control</h3>
//                     <ul className="text-gray-600">
//                       <li>Git</li>
//                       <li>GitHub</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h3 className="font-bold mb-2">Database</h3>
//                     <ul className="text-gray-600">
//                       <li>SQL</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
      
//       <ProjectsSection projects={projects} />

// <footer className="bg-gray-800 text-white py-8">
//   <div className="container mx-auto px-4">
//     <div className="flex flex-col md:flex-row justify-between items-center">
//       {/* Footer Text */}
//       <div className="text-center mb-4 md:mb-0">
//         <p>&copy; 2024 My Portfolio. All rights reserved.</p>
//       </div>

//       {/* Social Icons */}
//       <div className="flex justify-center space-x-6">
//         {/* Email Icon */}
//         <a
//           href="mailto:your-email@example.com"
//           className="hover:text-blue-400 text-xl"
//           title="Email Me"
//         >
//           <i className="bi bi-envelope-fill"></i>
//         </a>
//         {/* LinkedIn Icon */}
//         <a
//           href="https://www.linkedin.com/in/your-linkedin-id/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-blue-600 text-xl"
//           title="LinkedIn Profile"
//         >
//           <i className="bi bi-linkedin"></i>
//         </a>
//         {/* GitHub Icon */}
//         <a
//           href="https://github.com/your-github-id"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-gray-400 text-xl"
//           title="GitHub Profile"
//         >
//           <i className="bi bi-github"></i>
//         </a>
//       </div>
//     </div>
//   </div>
// </footer>




//       </div>
//     </ScrollArea>
//   );
// };

// export default App;

// import React from "react";
// // import Experience from "./components/ui/Experience";
// import ReactDOM from "react-dom/client";
// import ProjectSection from "./components/ui/ProjectsSection";

// const App = () => {
//   return (
//     <div className="relative">
//       {/* Header Section with Background Pattern */}
//       <div className="absolute inset-0 bg-gray-900 h-72">
//         <div
//           className="w-full h-full opacity-10"
//           style={{
//             backgroundImage:
//               "linear-gradient(45deg, #4f46e5 25%, transparent 25%), linear-gradient(-45deg, #4f46e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #4f46e5 75%), linear-gradient(-45deg, transparent 75%, #4f46e5 75%)",
//             backgroundSize: "20px 20px",
//           }}
//         ></div>
//       </div>

//       {/* Main Content Container */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Profile Section */}
//         <div className="pt-16 pb-8">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             {/* Profile Header */}
//             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
//               <img
//                 src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200"
//                 alt="Profile Picture"
//                 className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
//               />
//               <div className="flex-1">
//                 <div className="text-center sm:text-start">
//                   <h1 className="text-2xl font-bold text-gray-900 mb-1  flex items-center justify-center sm:justify-start gap-1">
//                   Anmol Sharma
//                   </h1>
//                   <p className="text-gray-600 text-sm mb-2 flex items-center justify-center sm:justify-start gap-1">
//                    Frontend Developer
//                   </p>
//                   <p className="text-gray-500 text-sm flex items-center justify-center sm:justify-start gap-1">
//                     <i className="bi bi-geo-alt"></i> Indore, India
//                   </p>
//                 </div>
//               </div>
//               {/* Contact Links */}
//               <div className="flex gap-4 items-center">
//                 <a
//                   href="mailto:contact@example.com"
//                   className="text-gray-600 hover:text-gray-900"
//                 >
//                   <i className="bi bi-envelope text-xl"></i>
//                 </a>
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 hover:text-gray-900"
//                 >
//                   <i className="bi bi-github text-xl"></i>
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 hover:text-gray-900"
//                 >
//                   <i className="bi bi-linkedin text-xl"></i>
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-violet-700 transition-colors flex items-center gap-2"
//                 >
//                   Download Resume <i className="bi bi-download"></i>
//                 </a>
//               </div>
//             </div>

//             {/* Profile Description */}
//             <div className="mt-8">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 Profile
//               </h2>
//               <p className="text-gray-600">
//                 I'm a seasoned Senior Frontend Developer with 8+ years of
//                 experience, specializing in user-friendly solutions that
//                 positively impact society and the environment. Additionally, I
//                 have a strong background in DevOps, ensuring seamless
//                 integration and deployment for the projects I've worked on. I've
//                 led projects as a tech lead, always prioritizing quality and
//                 user experience.
//               </p>
//             </div>

//             {/* Skills Section */}
//             <section className="mb-8">
//             <div className="mt-8">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 Skills
//               </h2>
//               {/* <h3 className="text-md font-medium text-gray-700 mb-3">
//                 Frontend Development
//               </h3> */}
//               <div className="flex flex-wrap gap-3">
//                 {[
//                   { name: "C/C++", icon: "bi-braces", color: "blue-100 text-blue-800" },
//                   { name: "Java", icon: "bi-hurricane", color: "pink-100 text-pink-800" },
//                   { name: "HTML5", icon: "bi-wind", color: "sky-100 text-sky-800" },
//                   { name: "CSS3", icon: "bi-code-slash", color: "blue-100 text-blue-800" },
//                   { name: "JavaScript", icon: "bi-filetype-js", color: "yellow-100 text-yellow-800" },
//                   { name: "Bootstrap", icon: "bi-filetype-css", color: "blue-100 text-blue-800" },
//                   { name: "Tailwind CSS", icon: "bi-filetype-html", color: "orange-100 text-orange-800" },
//                   { name: "UI/UX", icon: "bi-diagram-2", color: "pink-100 text-pink-800" },
//                 ].map((skill, index) => (
//                   <span
//                     key={index}
//                     className={`skill-badge px-4 py-2 bg-${skill.color} rounded-full text-sm font-medium`}
//                   >
//                     <i className={`bi ${skill.icon}`}></i> {skill.name}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             </section>



//             <section >
//             <h2 class="text-xl font-semibold mb-6 mt-8">Work Experience</h2>
            
//             <div>
//                 <div class="mb-8">
//                     <div class="flex items-center mb-2">
//                         <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center mr-4">
//                             CLSA
//                         </div>
//                         <div class="border-l-2 border-gray-200 pl-4">
//                             <h3 class="text-l font-semibold">CLSA Technology & Services LLP</h3>
//                             {/* <p class="text-gray-600">Sep 2019 - Dec 2023 · 4 yrs 4 mos</p> */}
//                              <p class="text-gray-600">Sep 2019 - Dec 2023 </p>
//                             <p class="text-gray-600"><i class="bi bi-geo-alt"></i> Indore, Madhya Pradesh, India · Full Time</p>
//                         </div>
//                     </div>

//                         <div class="ml-16">
//                         <h4 class="font-semibold mb-2">Frontend Developer Intern</h4>
//                           {/* <p class="text-gray-600 mb-2">Apr 2022 - Dec 2023 · 1 yr 9 mos</p>  */}
//                           <ul class="list-disc ml-5 text-gray-600">
//                              <li class="mb-2">Design and development of visual elements of web app, GraphQL API integration, and thoroughly testing and debugging the system.</li>
//                              <li class="mb-2">Ensure website responsiveness, cross-browser compatibility, security, and performance optimization; and uphold the code quality while adhering to the coding standards.</li>
//                              <li class="mb-2">Provide guidance and support to junior team members wherever needed.</li>
//                              <li>Screening and interviewing candidates for frontend development roles.</li>
//                          </ul>
//                      </div>
//                 </div>
//             </div>
//         </section>  

// {/* <div className="bg-gray-50 min-h-screen">
//       <Experience />
//     </div> */}


//      <div>
//       <ProjectSection />
//     </div>



            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import ProjectSection from "./components/ui/ProjectsSection";
import Navbar from "./components/ui/Navbar"; // Import Navbar Component
import Extracurricular from "./components/ui/Extracurricular";
import Contact from "./components/ui/Contact";
import WorkExperience from './components/ui/WorkExperience';
import Skills from './components/ui/Skills';
import MainContent from './components/ui/MainContent';




const App = () => {
  return (
    <div className="relative">
      {/* Header Section with Background Pattern */}
      <div className="absolute inset-0 bg-gray-900 h-72">
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #4f46e5 25%, transparent 25%), linear-gradient(-45deg, #4f46e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #4f46e5 75%), linear-gradient(-45deg, transparent 75%, #4f46e5 75%)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Profile Section */}
        <div className="pt-16 pb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Profile Header */}


             <div>
              <MainContent />
             </div>


             <div>
               <Skills />
             </div>

              <div>
              <WorkExperience />
               </div>
               



            {/* Projects */}
            <div>
              <ProjectSection />
            </div>
             <div>
             <Extracurricular />
             </div>
             {/* <Contact /> */}
          </div>
        </div>
        
      </div>


      <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="mb-6 sm:mb-0">
            <p className="text-sm">&copy; 2024 Anmol Sharma. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/anmolsharma2001" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="bi bi-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/anmol-sharma-0b78a8250/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="bi bi-linkedin text-xl"></i>
            </a>
            {/* <a href="anmolsharma20012003@gmail.com" className="text-gray-400 hover:text-white">
              <i className="bi bi-envelope text-xl"></i>
            </a> */}

                  <a href="mailto:anmolsharma20012003@gmail.com" className="text-gray-400 hover:text-white">
                   <i className="bi bi-envelope text-xl"></i>
                  </a>


{/*             <a href="anmolsharma20012003@gmail.com" className="text-gray-400 hover:text-white">
              <i className="bi bi-envelope text-xl"></i>
            </a> */}
                  {/* <a href="mailto:anmolsharma20012003@gmail.com" className="text-gray-400 hover:text-white">
                   <i className="bi bi-envelope text-xl"></i>
                  </a> */}

          </div>
        </div>
      </div>
    </footer>


      

         
      {/* Navbar */}
      {/* <Navbar /> */}
    </div>
  );
};

export default App;

