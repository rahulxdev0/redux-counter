import React, { useEffect, useRef, useState } from "react";
import Button from "../../small_components/Button";
import "../../App.css";
import Content from "./Content";
import Header from "./Header";

const HeroSection2 = () => {
  const [svgHeight, setSvgHeight] = useState(100);
  const [strokeProgress, setStrokeProgress] = useState(100);
  const [isExpanded, setIsExpanded] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("#hero-section");
      if (!heroSection) return;

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const viewportMiddle = window.innerHeight / 2;

      // Calculate how far we are from the middle
      const distanceFromMiddle = heroBottom - viewportMiddle;
      const maxDistance = window.innerHeight - viewportMiddle;

      const progress = Math.max(0, 1 - distanceFromMiddle / maxDistance);
      const newHeight = 100 + progress * 120;

      // Clamp between 100 and 220
      setSvgHeight(Math.max(100, Math.min(220, newHeight)));

      const strokeOffset = 100 - progress * 100;
      setStrokeProgress(strokeOffset);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };



  return (
    <div className="w-full">
      <Header />
      <section
        id="hero-section"
        className="relative h-screen w-full bg-neutral-900 flex flex-col justify-center items-center overflow-hidden"
      >
        <div className="text-center px-4 z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/30 border border-gray-300 mb-4">
            <span className="text-sm font-medium text-gray-300">
              ✨ Frontend Developer
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-200 mb-4 leading-tight">
            Hi there! I'm
            <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
              Rahul.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            A frontend developer passionate about creating interactive,
            responsive, and visually engaging web experiences.
          </p>

          {/* Specialization */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            I specialize in <span className="text-white">React</span>,{" "}
            <span className="text-white">Redux</span>,{" "}
            <span className="text-white">Node</span>, and{" "}
            <span className="text-white">Tailwind CSS</span>, with a strong
            focus on smooth animations and micro-interactions using{" "}
            <span className="text-white">Framer Motion</span>.
          </p>

          {/* Philosophy */}
          <p className="text-lg md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed italic">
            I love blending design and technology to build fast, intuitive, and
            meaningful interfaces that truly connect with users.
          </p>
          {!isExpanded && <Button label="read more" />}
        </div>


        {/* SVG Wave - Background layer (gray) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full"
          style={{ height: `${svgHeight}px` }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          {/* Filled wave shape - semi-transparent gray */}
          <path
            fill="#bebdbd88"
            fillOpacity="1"
            d="M0,96L16,101.3C32,107,64,117,96,117.3C128,117,160,107,192,122.7C224,139,256,181,288,192C320,203,352,181,384,186.7C416,192,448,224,480,240C512,256,544,256,576,245.3C608,235,640,213,672,213.3C704,213,736,235,768,250.7C800,267,832,277,864,245.3C896,213,928,139,960,117.3C992,96,1024,128,1056,160C1088,192,1120,224,1152,208C1184,192,1216,128,1248,122.7C1280,117,1312,171,1344,181.3C1376,192,1408,160,1424,144L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
          />
        </svg>

        {/* Animated border layer - positioned between gray and black waves */}
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-1 left-0 w-full"
          style={{ height: `${svgHeight}px`, zIndex: 5 }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          {/* Animated stroke border - draws from RIGHT to LEFT */}
          <path
            fill="none"
            stroke="#fff"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset={strokeProgress}
            style={{
              transition: "stroke-dashoffset 0.1s ease-out",
            }}
            d="M0,96L16,101.3C32,107,64,117,96,117.3C128,117,160,107,192,122.7C224,139,256,181,288,192C320,203,352,181,384,186.7C416,192,448,224,480,240C512,256,544,256,576,245.3C608,235,640,213,672,213.3C704,213,736,235,768,250.7C800,267,832,277,864,245.3C896,213,928,139,960,117.3C992,96,1024,128,1056,160C1088,192,1120,224,1152,208C1184,192,1216,128,1248,122.7C1280,117,1312,171,1344,181.3C1376,192,1408,160,1424,144L1440,128"
          />
        </svg>

        {/* SVG Wave - Foreground layer (black) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-2 left-0 w-full"
          style={{ height: `${svgHeight}px` }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,96L16,101.3C32,107,64,117,96,117.3C128,117,160,107,192,122.7C224,139,256,181,288,192C320,203,352,181,384,186.7C416,192,448,224,480,240C512,256,544,256,576,245.3C608,235,640,213,672,213.3C704,213,736,235,768,250.7C800,267,832,277,864,245.3C896,213,928,139,960,117.3C992,96,1024,128,1056,160C1088,192,1120,224,1152,208C1184,192,1216,128,1248,122.7C1280,117,1312,171,1344,181.3C1376,192,1408,160,1424,144L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
          />
        </svg>
      </section>

      {/* Content below to enable scrolling */}
      <Content />
    </div>
  );
};

export default HeroSection2;
