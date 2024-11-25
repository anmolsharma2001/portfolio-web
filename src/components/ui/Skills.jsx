import React from "react";

const Skills = () => {
  const skills = [
    { name: "C/C++", color: "blue-100 text-blue-800" },
    { name: "Java",  color: "pink-100 text-pink-800" },
    { name: "HTML5", color: "sky-100 text-sky-800" },
    { name: "CSS3", color: "blue-100 text-blue-800" },
    { name: "JavaScript", color: "yellow-100 text-yellow-800" },
    { name: "ReactJs", color: "pink-100 text-pink-800" },
    { name: "Bootstrap", color: "blue-100 text-blue-800" },
    { name: "Tailwind CSS", color: "orange-100 text-orange-800" },
    { name: "SQL",  color: "pink-100 text-pink-800" },
    { name: "UI/UX", color: "blue-100 text-blue-800" },
    { name: "Figma",  color: "pink-100 text-pink-800" },
    { name: "Firebase", color: "sky-100 text-sky-800" },
    { name: "Postman",  color: "blue-100 text-blue-800" },
    { name: "Git",  color: "yellow-100 text-yellow-800" },
    // { name: "", icon: "bi-diagram-2", color: "pink-100 text-pink-800" },
    // { name: "Bootstrap", icon: "bi-filetype-css", color: "blue-100 text-blue-800" },
    // { name: "Tailwind CSS", icon: "bi-filetype-html", color: "orange-100 text-orange-800" },
  ];

  return (
    <section className="mb-8">
      <div className=" mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
        <div className="cursor-pointer border p-4 rounded shadow-lg mb-8 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`skill-badge px-4 py-2 bg-${skill.color} rounded-full text-sm font-medium`}
            >
              <i className={`bi ${skill.icon}`}></i> {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
