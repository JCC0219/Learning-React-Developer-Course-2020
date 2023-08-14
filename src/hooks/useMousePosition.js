import { useState, useEffect } from "react";

//custom hook
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //create event listener, only once is enough
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition((prev) => ({
        x: e.pageX,
        y: e.pageY,
      }));
    };
    document.addEventListener("mousemove", handleMouseMove);
    console.log("setting up event");

    //to remove listener when component is unmounted
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export default useMousePosition;
