import { useState } from "react";
import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react";
// import TabContent from "./TabContent";
import TabButton from "./TabButton";
export default function Part2() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10">
        <motion.h1 
           initial={{ opacity: 0, x: -300 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{
             delay: 0.6,
             x: { type: "spring", stiffness: 60 },
             opacity: { duration: 0.6 },
             ease: easeIn,
             duration: 1,
           }}
        className="font-semibold text-lg md:text-5xl mb-4">
          T-shirt printing made easy
        </motion.h1>
        <motion.p
           initial={{ opacity: 0, x: -300 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{
             delay: 1,
             x: { type: "spring", stiffness: 60 },
             opacity: { duration: 0.4 },
             ease: easeIn,
             duration: 1,
           }}
        >Lorem, ipsum dolor sit amet consectetur adipisicing.</motion.p>
        <motion.p
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: easeIn,
              duration: 1,
            }}
        >Lorem ipsum dolor sit.</motion.p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-10">
      <menu className="flex flex-col space-y-4 px-16 ">
        <TabButton
          title="Smart Tracking"
        onTab={() => setActiveContentIndex(0)}
          onSelect={activeContentIndex}
          i={0}
        />
         <TabButton
          title="Personalized Plan"
        onTab={() => setActiveContentIndex(1)}
          onSelect={activeContentIndex}
          i={1}
        />
         <TabButton
          title="Actionable Insights"
        onTab={() => setActiveContentIndex(2)}
          onSelect={activeContentIndex}
          i={2}
        />
      </menu>
      <div className="hidden md:block ">
        <motion.img
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: easeIn,
              duration: 1,
            }}
        src="src/assets/banner-25.png.png" alt="" />
      </div>
      </div>
    </>
  );
}
