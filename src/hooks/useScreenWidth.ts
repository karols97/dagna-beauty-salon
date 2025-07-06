import { useEffect, useState } from "react";

export const useScreenWidth = (): boolean => {
  const [isDesktop, setIsDesktop] = useState(false);
  console.log(isDesktop);

  const checkScreenWidth = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  });

  return isDesktop;
};
