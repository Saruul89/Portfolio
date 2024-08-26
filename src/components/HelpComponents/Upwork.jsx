import { UpworkLogo } from "../Svg/UpworkLogo";

export const Upwork = () => {
  return (
    <div className="max-w-auto dark:bg-[#1F2937] rounded-xl">
      <div className="md:flex ml-8 text-center justify-around pb-5 pt-5">
        <UpworkLogo />
        <h3 className="text-[#273147] dark:text-[#D1D5DB]">
          Sr. Frontend Developer
        </h3>
        <p className="text-[#7b8390] dark:text-[#D1D5DB]">Nov 2021 - Present</p>
      </div>
      <div>
        <div className="text-center text-[16px] text-gray-400 list-disc list-inside font-extralight dark:text-[#D1D5DB]">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </div>
      </div>
    </div>
  );
};
