import { useState } from "react";
import { MoonIcon, SunIcon } from "../Svg/SunIcon";

export const ToggleTheme = () => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className=" text-black bg-white dark:bg-[#030712] dark:text-white">
      {dark ? (
        <button onClick={toggleTheme}>
          <SunIcon />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <MoonIcon />
        </button>
      )}
    </div>
  );
};

//render gdg ni delgetsen deerh medeelel oorchlogdoh baidliig haruulj bn
//doorh 2 nohtsold state hiine
//state oorchlogdoh uyd buyu [dark, setDark] iig oorchloh gd bga uyd render hiine
//props oorchlogdwol render hiine
