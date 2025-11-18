import React, { useEffect, useState } from "react";

const useDeviceType = () => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const hanldeResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDevice("Mobile");
      } else if (width <= 1422) {
        setDevice("Laptop");
      } else if (width > 1500) {
        setDevice("Monitor");
      } else {
        setDevice("Unknown");
      }
    };
    hanldeResize();
    window.addEventListener("resize", hanldeResize);
    return () => {
      window.removeEventListener("resize", hanldeResize);
    };
  }, []);
  return device;
};

export default useDeviceType;
