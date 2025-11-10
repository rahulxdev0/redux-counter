import { useRef } from "react";
import { useInView } from "./hooks/useInView";

const App = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef);
  console.log("value", isInView)

  return (
    <div className="h-[300vh] w-full bg-neutral-900 text-white p-10">
      
      <div
        ref={cardRef}
        className="w-[200px] h-[200px] bg-orange-700 mx-auto mt-[120vh]"
      />

      <div className="mt-10 text-center text-xl">
        {isInView ? "✅ Element is in the screen" : "❌ Element is out of screen"}
      </div>

    </div>
  );
};

export default App;
