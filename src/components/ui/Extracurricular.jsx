import React from "react";

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="mt-8">
      <div className="">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Extracurricular Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Activity 1 */}
          <div className="bg-purple-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">National Service Scheme Volunteer</h3>
            {/* <p className="text-gray-600">
              Volunteered at a local NGO, organizing events, fundraising, and supporting community programs to
              empower underprivileged children.
            </p> */}
          </div>
          {/* Activity 2 */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Coordinator,<h5 className="text-sm">Student Council CSE, Medi-Caps University</h5></h3>
            {/* <p className="text-gray-600">
              Participated in several hackathons, collaborating with cross-functional teams to create innovative
              solutions within tight deadlines.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
