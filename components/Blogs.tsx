"use client";

import React from "react";

import { companies, blog } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Blogs = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Blog section will be added <span className="text-purple">soon...</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10"></div>
    </div>
  );
};

export default Blogs;

// <section id="blog" className="py-20">
//       <h1 className="heading">
//         Kind words from
//         <span className="text-purple"> satisfied me</span>
//       </h1>

//       <div className="flex flex-col items-center max-lg:mt-10">
//         <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
//           {companies.map((company) => (
//             <React.Fragment key={company.id}>
//               <div className="flex md:max-w-60 max-w-32 gap-2">
//                 <img
//                   src={company.img}
//                   alt={company.name}
//                   className="md:w-10 w-5"
//                 />
//                 <img
//                   src={company.nameImg}
//                   alt={company.name}
//                   width={company.id === 4 || company.id === 5 ? 100 : 150}
//                   className="md:w-24 w-20"
//                 />
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//         <div
//           // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
//           className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
//         >
//           <InfiniteMovingCards
//             items={testimonials}
//             direction="right"
//             speed="slow"
//           />
//         </div>
//       </div>
//     </section>
