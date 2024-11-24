import Blogs from "@/components/Blogs";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaH } from "react-icons/fa6";
import Terrain from "../Components/background/background";

export default function Home() {
  return (
    <div className="relative">
      {/* Background Animation Container */}
      <div className="fixed inset-0 z-0">
        <Terrain />
        {/* <BackgroundGradientAnimation /> */}
      </div>

      {/* Content Container */}
      <div className="relative p-10 z-10 ">
        <div className="flex flex-col items-center justify-center px-5 sm:px overflow-hidden mx-auto">
          <div className="drop-shadow-4xl max-w-7xl w-full">
            <FloatingNav navItems={navItems} />
            <Hero />
            <Grid />
            <RecentProjects />
            <Blogs />
            <Experience />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
