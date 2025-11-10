import { useState } from "react";
import { animate, stagger } from "motion";

const data = [
  {
    id: 1,
    title: "Open Close Principle",
    description:
      "The Open/Closed Principle states that software entities should be open for extension but closed for modification. This allows flexibility and maintainability.",
    principles: [
      "Software entities should be open for extension.",
      "Software entities should be closed for modification.",
    ],
  },
  {
    id: 2,
    title: "Single Responsibility Principle",
    description:
      "The Single Responsibility Principle (SRP) says a class should have only one reason to change.",
    principles: [
      "A class should have only one reason to change.",
      "A class should have only one job or responsibility.",
    ],
  },
  {
    id: 3,
    title: "Liskov Substitution Principle",
    description:
      "Objects of a superclass should be replaceable with objects of a subclass without altering correctness.",
    principles: [
      "Superclasses should be replaceable by subclasses.",
      "Subclasses must extend behavior without changing base behavior.",
    ],
  },
  {
    id: 4,
    title: "Interface Segregation Principle",
    description:
      "Clients should not be forced to depend on interfaces they don't use.",
    principles: [
      "No client should be forced to depend on unused methods.",
      "Interfaces should be specific to the clients.",
    ],
  },
];

const OpenClose = () => {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-slate-50 w-full min-h-screen flex items-center justify-center py-10">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow overflow-hidden">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            toggle={() => toggleAccordion(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default OpenClose;

// ✅ Accordion Item with motion animation
const AccordionItem = ({ item, isOpen, toggle }) => {
  const contentRef = (el) => {
    if (!el) return;

    if (isOpen) {
      animate(
        el,
        { height: el.scrollHeight, opacity: 1 },
        { duration: 0.4, easing: "ease-in-out" }
      );
    } else {
      animate(
        el,
        { height: 0, opacity: 0 },
        { duration: 0.3, easing: "ease-in-out" }
      );
    }
  };

  return (
    <div className="border-t-2 border-gray-300 rounded-2xl -mb-4  overflow-hidden">
      {/* Header */}
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-4 py-4"
      >
        <div className="flex items-center gap-3">
          {/* Icon placeholder - replace with your icon */}
          <span className="text-amber-600 text-xl">🏷️</span>

          <h3 className="font-semibold text-gray-800 tracking-wide">
            {item.title}
          </h3>
        </div>

        <div
          className={`transition-transform duration-300 text-gray-400 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
        className="px-5 pb-4"
      >
        <p className="text-gray-700 mb-3">{item.description}</p>

        <ul className="list-disc ml-6  space-y-1 text-gray-600">
          {item.principles.map((p, idx) => (
            <li className="mb-2" key={idx}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
