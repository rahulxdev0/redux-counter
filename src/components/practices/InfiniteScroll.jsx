import React from "react";

const InfiniteScroll = () => {
  const items = [
    { id: "1", text: "Item" },
    { id: "2", text: "Another Item" },
    { id: "3", text: "Yet Another Item1" },
    { id: "4", text: "Yet Another Item2" },
    { id: "5", text: "Yet Another Item3" },
    { id: "6", text: "Yet Another Item4" },
    { id: "7", text: "Yet Another Item5" },
    { id: "8", text: "Yet Another Item6" },
  ];

  // Duplicate items for smooth infinite loop
  const loopItems = [...items, ...items];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <style>
        {`
          @keyframes skew-scroll {
            0% { transform: translateY(0) skewY(-3deg); }
            100% { transform: translateY(-50%) skewY(-2deg); }
          }
          .animate-skew-scroll {
            animation: skew-scroll 10s linear infinite;
          }
        `}
      </style>
      {/* Mask container */}
      <div
        className="relative w-full max-w-screen-2xl overflow-hidden"
        style={{
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          maskImage: `
            linear-gradient(to right,  transparent, black 5rem),
            linear-gradient(to left,   transparent, black 5rem),
            linear-gradient(to bottom, transparent, black 5rem),
            linear-gradient(to top,    transparent, black 5rem)
          `,
        }}
      >
        {/* Scrolling Grid */}
        <div className="mx-auto h-[400px] w-[300px] sm:w-[1000px] grid grid-cols-1 sm:grid-cols-3 gap-5 animate-skew-scroll">
          {loopItems.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center space-x-2 cursor-pointer
                rounded-md border border-gray-200 shadow-md px-5 py-7
                bg-white transition-all
                -rotate-1
                hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.03] hover:shadow-xl
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-red-500 flex-none"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>

              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
