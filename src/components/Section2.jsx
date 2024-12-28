import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react";
import Card from "./card";
export default function Section2() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.6 },
          ease: easeIn,
          duration: 1,
        }}
        className="items-center text-center mb-10 mt-20"
      >
        <h1 className="text-sm md:text-4xl font-bold">Our Picks for you</h1>
        <p className="text-sm md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
          nulla.
        </p>
        <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet.</p>
      </motion.div>
      <Card />
    </>
  );
}
