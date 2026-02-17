import { useEffect, useState } from "react";

export const useMobileLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  console.log(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
