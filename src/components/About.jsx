import { AboutButton } from "./HelpComponents/AboutButton";
export const About = () => {
  return (
    <div className="dark:bg-[#111827] bg-[#f9f9f9] w-full " id="about">
      <div className="container m-auto py-[96px]">
        <div className="flex justify-center">
          <AboutButton text={"About me"} />
        </div>
        <div className="md:flex justify-center gap-12 pt-[48px]">
          <div className="px-10">
            <img className="w-full rounded-xl" src="../hinata.png" alt="" />
          </div>
          <div className="container">
            <h3 className="font-semibold text-[30px] md-ml-0 ml-9 pb-[24px] dark:text-[#F9FAFB]">
              Curious about me? Here you have it:
            </h3>
            <div className="font-normal text-[16px] text-gray-400 ml-9 dark:text-[#D1D5DB]">
              <p className="pb-[16px]">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p className="pb-[16px]">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p className="pb-[16px]">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p className="pb-[16px]">Finally, some quick bits about me.</p>
              <div className="flex flex-row gap-12 pb-[16px] list-disc">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>{" "}
              </div>
              <li className="pb-[16px]">Avid learner</li>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
