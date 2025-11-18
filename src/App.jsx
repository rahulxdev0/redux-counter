import { useRef } from "react";
import "./App.css";
import HeroSection2 from "./components/practices/HeroSection2";
import { useInView2 } from "./hooks/useInView2";


const App = () => {
  const boxRef = useRef(null);

  const inView = useInView2(boxRef);

  return (
    // <div className="min-h-[200vh] w-full bg-neutral-900 text-white">

    //   <h1 className="mb-20 text-3xl">Scroll down...</h1>
    //   <div className="h-[100vh]">
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde id molestiae soluta labore distinctio natus ab quae. Veritatis, delectus aliquid quasi odit ducimus incidunt perspiciatis deserunt facilis tempora recusandae!</p>
    //   </div>

    //   <div
    //     ref={boxRef}
    //     className={`bg-orange-700  ${inView ? "expand" : ""}`}
    //     style={{
    //       height: "100px",
    //     }}
    //   />

    // </div>
    <>
      <HeroSection2 />
    </>
  );
};

export default App;
