import { Skillbox } from "../HelpComponents/Skillbox";
import { JavaIcon } from "../Svg/JavaIcon";
import { ReactIcon } from "../Svg/ReactIcon";

export const ConditionalRending = () => {
  const chosenIcon = "JS";
  if (chosenIcon === "JS") {
    return (
      <div className="flex justify-between pb-10 w-full">
        <Skillbox icon={<JavaIcon />} text={"Javascript"} />
      </div>
    );
  }
  if (chosenIcon === "React") {
    return (
      <div className="flex justify-between pb-10 w-full">
        <Skillbox icon={<ReactIcon />} text={"React"} />
      </div>
    );
  }
};
