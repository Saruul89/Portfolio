import { AboutButton } from "./HelpComponents/AboutButton";
import { Skillbox } from "./HelpComponents/Skillbox";
import { Express, JavaIcon, NestIcon, TypeScriptIcon } from "./Svg/JavaIcon";
import { NextIcon, NodeIcon, ReactIcon } from "./Svg/ReactIcon";
import { MongoDBIcon, SassIcon, SocketIcon } from "./Svg/SocketIcon";
import { CypressIcon, FigmaIcon, TailwindIcon } from "./Svg/TailwindIcon";

export const Skills = () => {
  return (
    <div className="max-w-[1200px] m-auto w-screen pt-10" id="skills">
      <div className="w-full">
        <div className="text-center">
          <div className="pb-7">
            <AboutButton text={"Skills"} />
          </div>
          <p className="text-[20px] leading-7 font-normal text-gray-600 pb-10 dark:text-[#D1D5DB]">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-16 pb-10 w-full dark:text-[#D1D5DB]">
          <Skillbox icon={<JavaIcon />} text={"Javascript"} />
          <Skillbox icon={<TypeScriptIcon />} text={"TypeScript"} />
          <Skillbox icon={<ReactIcon />} text={"React"} />
          <Skillbox icon={<NextIcon />} text={"Next.js"} />
          <Skillbox icon={<NodeIcon />} text={"Node.js"} />
          <Skillbox icon={<Express />} text={"Express.js"} />
          <Skillbox icon={<NestIcon />} text={"Nest.js"} />
          <Skillbox icon={<SocketIcon />} text={"Socket.io"} />
          <Skillbox icon={<MongoDBIcon />} text={"MongoDB"} />
          <Skillbox icon={<SassIcon />} text={""} />
          <Skillbox icon={<TailwindIcon />} text={"Tailwindcss"} />
          <Skillbox icon={<FigmaIcon />} text={"Figma"} />
          <Skillbox icon={<CypressIcon />} text={"Cypress"} />
        </div>
      </div>
    </div>
  );
};
