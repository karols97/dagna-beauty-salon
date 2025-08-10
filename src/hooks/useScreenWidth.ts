import { useEffect, useState } from "react";

// TODO: do użycia też w TopBarze przy implementacji topBaru dla widoku desktopowego
// TOREFACTOR: sprawdzić czy tu nie lepiej użyć prevState

export enum ScreenMode {
  desktop,
  mobile,
}

export const useScreenWidth = (): ScreenMode | undefined => {
  const [screenMode, setScreenMode] = useState<ScreenMode>();

  const checkScreenWidth = () => {
    if (window.innerWidth > 1280) {
      setScreenMode(ScreenMode.desktop);
    } else setScreenMode(ScreenMode.mobile);
  };

  useEffect(() => {
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  });

  return screenMode;
};
