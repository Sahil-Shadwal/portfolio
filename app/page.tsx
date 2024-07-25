import Hero from "@/components/Hero";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    // <div className="max-w-7xl w-full">
    //   <Hero />
    // </div>
    // </main>
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className=" drop-shadow-4xl ">
          <div className="max-w-7xl w-full">
            <Hero />
          </div>
          {/* <Hero /> */}
          {/* <h1> hii idiot</h1> */}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
