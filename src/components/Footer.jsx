import { AboutButton } from "./HelpComponents/AboutButton";
import { CallIcon, DoubleIcon, MassageIcon } from "./Svg/Hire";
import { LinkDorwoljinIcon } from "./Svg/LinkDorwoljinIcon";
import { LinkMuurIcon } from "./Svg/LinkMuurIcon";
import { LinkTwitterIcon } from "./Svg/LinkTwitterIcon";

export const Footer = () => {
  return (
    <div className="w-full m-auto" id="footer">
      <div className="text-center pt-8 pb-4">
        <AboutButton text={"Get in touch"} />
        <p className="pt-4 text-[20px] leading-7 font-normal text-gray-600 pb-2 dark:text-[#D1D5DB]">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center h-60">
        <div className="flex">
          <div className=" flex justify-center items-center">
            <MassageIcon />
          </div>
          <p className="md:text-[36px] text-[22px] sm:text-[24px] flex items-center leading-6 font-semibold dark:text-[#F9FAFB]">
            Monkhsaruul100@gmail.com
          </p>
          <div className=" flex justify-center items-center">
            <DoubleIcon />
          </div>
        </div>
        <div className="flex mb-7">
          <div className=" flex justify-center items-center">
            <CallIcon />
          </div>
          <p className="text-[36px] sm:text-[24px] font-semibold dark:text-[#F9FAFB]">
            +976 80933171
          </p>
          <div className=" flex justify-center items-center">
            <DoubleIcon />
          </div>
        </div>
        <p className="text-[16px] text-gray-600 mb-5 dark:text-[#D1D5DB]">
          You may also find me on these platforms!
        </p>
        <div className="flex gap-2 justify-center items-center">
          <LinkMuurIcon />
          <LinkTwitterIcon />
          <LinkDorwoljinIcon />
        </div>
      </div>
    </div>
  );
};
