import React from "react";

const Button = ({label="add label"}) => {
  return (
    <button className="group inline-flex items-center gap-1 text-gray-200 hover:text-gray-300 text-lg font-medium cursor-pointer underline -z-100">
     {label}
      <svg
        width="50"
        height="14"
        viewBox="0 0 40 14"
        fill="none"
        className="overflow-visible"
      >
        {/* Arrow 1 */}
        <path
          d="M1 7H10 M6 2L10 7L6 12"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arrow 2 */}
        <path
          d="M14 12L18 7L14 2"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-100"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arrow 3 */}
        <path
          d="M22 12L26 7L22 2"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-200"
          stroke="currentColor"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arrow 4 */}
        <path
          d="M30 12L34 7L30 2"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-300"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arrow 5 */}
        <path
          d="M38 12L42 7L38 2"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-500"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Button;
