import { AboutButton } from "./HelpComponents/AboutButton";
import { Upwork } from "./HelpComponents/Upwork";

export const Experience = () => {
  return (
    <div className="w-screen max-w-[1200px] m-auto bg-[#f9f9f9] dark:bg-[#111827]">
      <div className="text-center pt-8 pb-4">
        <AboutButton text={"Experience"} />
        <p className="pt-4 text-[20px] leading-7 font-normal text-gray-600 dark:text-[#D1D5DB] pb-10">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="md:w-[896px] md:h-[150px] m-auto rounded-xl shadow-md bg-white dark:bg-[#1F2937] mb-10">
        <Upwork />
      </div>
      <div className="md:w-[896px] md:h-[150px] m-auto rounded-xl shadow-md bg-white dark:bg-[#1F2937] mb-10">
        <Upwork />
      </div>
      <div className="md:w-[896px] md:h-[150px] m-auto rounded-xl shadow-md bg-white dark:bg-[#1F2937] mb-10">
        <Upwork />
      </div>
    </div>
  );
};
