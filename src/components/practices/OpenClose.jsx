import { useState } from "react";
import { animate, stagger } from "motion";

const data = [
  {
    id: 1,
    title: "Diamond Jewelry",
    description:
      "Discover our stunning collection of diamond jewelry, featuring certified diamonds set in premium metals. From elegant solitaires to intricate designs, each piece radiates timeless beauty and brilliance.",
    principles: [
      "Certified diamonds with IGI/GIA authentication",
      "Available in 14K, 18K gold and platinum settings",
      "Lifetime buyback guarantee and free resizing",
      "Complimentary jewelry insurance for one year",
    ],
  },
  {
    id: 2,
    title: "Gold Collections",
    description:
      "Explore our exquisite range of 22K and 18K gold jewelry, blending traditional craftsmanship with contemporary designs. Perfect for weddings, festivals, and everyday elegance.",
    principles: [
      "Hallmarked BIS certified 22K and 18K gold",
      "Wide range of traditional and modern designs",
      "Zero deduction exchange policy on old gold",
      "Custom design and personalization services available",
    ],
  },
  {
    id: 3,
    title: "Bridal Collection",
    description:
      "Make your special day unforgettable with our exclusive bridal jewelry collection. Featuring complete sets of necklaces, earrings, bangles, and maang tikka crafted with intricate detail.",
    principles: [
      "Complete bridal sets and individual pieces available",
      "Traditional temple jewelry and contemporary designs",
      "Expert consultation and customization for your wedding",
      "Premium gift packaging and home delivery",
    ],
  },
  {
    id: 4,
    title: "Silver & Platinum",
    description:
      "Contemporary silver and platinum jewelry that combines durability with sophisticated style. Ideal for daily wear and special occasions alike.",
    principles: [
      "Pure 925 sterling silver and 95% platinum jewelry",
      "Hypoallergenic and tarnish-resistant designs",
      "Modern minimalist to ethnic fusion styles",
      "Affordable luxury with lifetime maintenance",
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
