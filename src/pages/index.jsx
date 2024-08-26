import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Hero1 } from "@/components/Hero1";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";
import { FooterLast } from "@/components/FooterLast";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center w-[100%] h-[auto] ease-in duration-100 dark:bg-[#030712]">
      <Header />
      <Hero1 />
      <About />
      <Skills />
      <div className="w-screen bg-[#f9f9f9] dark:bg-[#111827]">
        <Experience />
      </div>
      <Work />
      <Footer />
      <div className="w-screen bg-gray-50 dark:bg-[#111827]">
        <FooterLast />
      </div>
    </div>
  );
}
