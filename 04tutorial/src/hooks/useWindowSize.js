import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize(); // This will work on loading the site.

    window.addEventListener("resize", handleResize); // This will run when the window is resized.

    const cleanUp = () => {
      console.log(`runs if a useEffect dep changes`);
      window.removeEventListener("resize", handleResize);
    };

    return cleanUp;
  }, []);

  return windowSize;
};

export default useWindowSize;
