import { Hire } from "./Svg/Hire";
import { LinkDorwoljinIcon } from "./Svg/LinkDorwoljinIcon";
import { LinkMuurIcon } from "./Svg/LinkMuurIcon";
import { LinkTwitterIcon } from "./Svg/LinkTwitterIcon";
import { Location } from "./Svg/Location";

export const Hero1 = () => {
  return (
    <div className="container m-auto py-24 " id="hero">
      <div className="flex justify-between gap-12 px-8">
        <div className="container flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <div className="shadow-2xl md:w-full md:hidden flex justify-center ml-10">
              <img src="../naruto.jpg" alt="" />
            </div>
            <h1 className="text-[60px] leading-[72px] font-bold text-gray-800 dark:text-[#F9FAFB]">
              Hi, I'm Saruul
            </h1>
            <p className="text-base font-normal text-gray-600 dark:text-[#D1D5DB]">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 4 months of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Location />
              <p className="font-normal text-gray-600 dark:text-gray-50">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="flex gap-2">
              <Hire />
              <p className="font-normal text-gray-600 dark:text-gray-50">
                Available for new projects{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <LinkMuurIcon />
            <LinkTwitterIcon />
            <LinkDorwoljinIcon />
          </div>
        </div>
        <div className="md:flex shadow-2xl w-[400px] h-[500px] hidden">
          <img src="../naruto.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
