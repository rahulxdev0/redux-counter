import React from "react";

const Content = () => {
  return (
    <section className="min-h-screen  p-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-100">
          Content Section
        </h2>
        <p className="text-lg text-white mb-4">
          The wave reached its full height (320px) when it hit the middle of
          your screen!
        </p>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <p key={i} className="text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
