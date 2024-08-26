import { AboutButton } from "./HelpComponents/AboutButton";
import { WorkTitleLorem } from "./HelpComponents/WorkTitleLorem";
import { ActionIcon } from "./Svg/ActionIcon";

export const Work = () => {
  return (
    <div className="w-screen max-w-[1200px] py-4 dark:bg-[#030712]" id="work">
      <div className="text-center pt-[70px]">
        <AboutButton text={"Work"} />
        <p className="pt-4 text-[20px] leading-7 font-normal text-gray-600 pb-10 dark:text-[#D1D5DB]">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="container md:flex mb-10 rounded-xl shadow-md bg-white dark:bg-[#1F2937]">
        <img src="./Column.png" alt="" className="md:ml-[24px]" />
        <div className="flex flex-wrap gap-2 justify-start items-center pr-8 pl-10">
          <WorkTitleLorem text={"Ubcab"} />
          <div className="flex flex-wrap gap-2">
            <AboutButton text={"React"} />
            <AboutButton text={"Next.js"} />
            <AboutButton text={"TypeScript"} />
            <AboutButton text={"Nest.js"} />
            <AboutButton text={"PostgreSQL"} />
            <AboutButton text={"Tailwindcss"} />
            <AboutButton text={"Figma"} />
            <AboutButton text={"Cypress"} />
            <AboutButton text={"Storybook"} />
            <AboutButton text={"Git"} />
          </div>
          <div className="flex justify-start">
            <ActionIcon />
          </div>
        </div>
      </div>
      <div className="container md:flex rounded-xl shadow-md bg-white mb-10 dark:bg-[#1F2937]">
        <div className="flex flex-wrap gap-2 justify-start items-center pr-8 pl-6">
          <WorkTitleLorem text={"Mentorhub"} />
          <div className="flex flex-wrap gap-2">
            <AboutButton text={"React"} />
            <AboutButton text={"Next.js"} />
            <AboutButton text={"TypeScript"} />
            <AboutButton text={"Nest.js"} />
            <AboutButton text={"PostgreSQL"} />
            <AboutButton text={"Tailwindcss"} />
            <AboutButton text={"Figma"} />
            <AboutButton text={"Cypress"} />
            <AboutButton text={"Storybook"} />
            <AboutButton text={"Git"} />
          </div>
          <div className="flex justify-start">
            <ActionIcon />
          </div>
        </div>
        <img src="./mentorcol.png" alt="" className="md:mr-[24px] md:ml-5" />
      </div>
      <div className="container md:flex rounded-xl shadow-md bg-white mb-10 dark:bg-[#1F2937]">
        <img src="./itoimColumn.png" alt="" className="md:ml-[24px]" />
        <div className="flex flex-wrap gap-2 justify-start items-center pr-8 pl-10 dark:bg-[#1F2937]">
          <WorkTitleLorem text={"IToim"} />
          <div className="flex flex-wrap gap-2">
            <AboutButton text={"React"} />
            <AboutButton text={"Next.js"} />
            <AboutButton text={"TypeScript"} />
            <AboutButton text={"Nest.js"} />
            <AboutButton text={"PostgreSQL"} />
            <AboutButton text={"Tailwindcss"} />
            <AboutButton text={"Figma"} />
            <AboutButton text={"Cypress"} />
            <AboutButton text={"Storybook"} />
            <AboutButton text={"Git"} />
          </div>
          <div className="flex justify-start">
            <ActionIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
