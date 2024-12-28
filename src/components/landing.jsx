import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react";
import Items from "./items";
export default function Landing() {
  return (
    <section>
      <div className=" text-center items-center space-y-1">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.4 },
            ease: easeIn,
            duration: 1,
          }}
          className="font-semibold text-2xl"
        >
          How to create Custom shirts
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: easeIn,
            duration: 1,
          }}
          className="text-gray-500"
        >
          {" "}
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            corporis!
          </p>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet.sit amet consectetur adipisicing elit
          </p>
        </motion.div>
      </div>

      <Items image="src/assets/Main.png" num="1" />
      <div className=" flex flex-col md:flex-row md:items-center md:justify-between  mx-20 ">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: easeIn,
            duration: 1,
          }}
          className=" md:w-1/2"
        >
          <h1 className="font-bold ml-10 mb-3 text-sm md:text-lg">
            Custom Artwork & Review
          </h1>
          <p className="text-sm w-[24rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            omnis rem earum dignissimos ab, sit praesentium est recusandae, quo
            quis consectetur reiciendis laboriosam quod, necessitatibus libero
            adipisci illum. Commodi voluptate et atque doloribus debitis,
          </p>
        </motion.div>
        <p className="my-8 ml-28 w-[26rem]">
          <span className="  bg-gray-400 rounded-3xl px-4 p-2  ">2</span>
        </p>
        <motion.img
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: easeIn,
            duration: 1,
          }}
          src="src/assets/Main-2.png"
          alt=""
          className="md:w-1/3 w-64"
        />
      </div>
      <Items image="src/assets/Main-1.png" num="3" />
    </section>
  );
}
