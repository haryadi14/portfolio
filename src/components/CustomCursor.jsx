import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Menggunakan spring agar gerakan kursor terasa kenyal/smooth
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveMouse = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHover = (e) => {
      const target = e.target;
      if (target.closest('a, button, .group, input')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary z-[9999] pointer-events-none hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered ? "rgba(59, 130, 246, 0.2)" : "transparent",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;