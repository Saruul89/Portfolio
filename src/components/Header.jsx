import { Button } from "./HelpComponents/ButtonHamgiindeerh";
import { HumMenu } from "./HelpComponents/HumMenu/HumMenu";
import { ToggleTheme } from "./HelpComponents/ToggleTheme";
import { HumIcon } from "./Svg/HumIcon";
import { useState } from "react";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="w-[100%] m-auto py-4 fixed bg-white dark:bg-[#030712]">
      <div className="container m-auto">
        <div className="flex justify-between px-8">
          <div className="flex justify-self-start text-[50px] leading-9 not-italic font-bold tracking-[-0.6px] mr-10 dark:text-[#F9FAFB]">
            <a href="#hero">Saruul</a>
          </div>
          <div className="justify-end gap-10 w-screen hidden md:flex items-center text-[16px] font-medium text-[#4B5563] dark:bg-[#030712] dark:text-[#D1D5DB]">
            <div>
              <a href="#about">About</a>
              <Button />
            </div>
            <div>
              <a href="#work">Work</a>
              <Button />
            </div>
            <div>
              <a href="#skills">Testimonials</a>
              <Button />
            </div>
            <div>
              <a href="#footer">Contact</a>
              <Button />
            </div>
            <div className="h-6 w-[1px] bg-gray-100"></div>
            <div className="flex justify-center gap-9 items-center">
              <div className=" flex justify-center items-center">
                <ToggleTheme />{" "}
              </div>
              <button className="bg-black w-[120px] h-[30px] text-white rounded-2xl text-sm">
                Download CV
              </button>
            </div>
          </div>
          <div className="block md:hidden">
            <div>
              {isOpenMenu ? (
                <button onClick={handleMenu}>
                  <HumMenu />
                </button>
              ) : (
                //buttonii deerh handleMenu gdg bol haalga ni, tgeed humMenu-giin onClick-iin hajuu taliinh uud ni yma
                <button onClick={handleMenu}>
                  <HumIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
