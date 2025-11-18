import React from "react";

const Extra = ({ isExpanded = true }) => {
  let isExpand = isExpanded ? "opacity-100" : "max-h-0 opacity-0";
  return (
    <div
      className={`transition-all duration-700 ease-in-out ${isExpand}`}
    >
      <div className="max-w-4xl mx-auto space-y-6 text-left">
        {/* About Me Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-4">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I started my coding journey 3 years ago with JavaScript and
                quickly fell in love with frontend development. Since then, I've
                worked on numerous projects ranging from small business websites
                to complex web applications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-4">
                What Drives Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about creating digital experiences that are not
                only beautiful but also accessible and performant. I believe in
                writing clean, maintainable code and constantly learning new
                technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Framer Motion",
              "Redux",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git",
              "REST APIs",
              "GraphQL",
              "Webpack",
              "Jest",
              "Cypress",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-lg p-3 text-center transition-all hover:bg-gray-600/50 hover:scale-105"
              >
                <span className="text-gray-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Experience Highlights
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "Modern E-commerce Platform",
                description:
                  "Built a responsive e-commerce site with React, Redux, and Stripe integration",
              },
              {
                title: "Real-time Dashboard",
                description:
                  "Developed an analytics dashboard with real-time data visualization using D3.js",
              },
              {
                title: "Mobile-First Web App",
                description:
                  "Created a PWA with offline functionality and push notifications",
              },
            ].map((project, index) => (
              <div key={index} className="border-l-4 border-gray-500 pl-4 py-2">
                <h4 className="text-lg font-semibold text-white">
                  {project.title}
                </h4>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
