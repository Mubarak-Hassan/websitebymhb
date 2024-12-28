// import { easeIn, easeInOut } from "motion";
// import { motion } from "motion/react";
// // import { motion } from "farmer-motion";
// export default function HeroSection() {
//   return (
//     <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-64 pt-8  ">
//       <div className="space-y-6 text-center md:text-left md:w-1/2 md:mr-40">
//         <motion.button
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             delay: 0.6,
//             x: { type: "spring", stiffness: 60 },
//             opacity: { duration: 0.4 },
//             ease: easeIn,
//             duration: 1,
//           }}
//           className="bg-purple-200 text-purple-400 rounded-md py-1 px-2"
//         >
//           Create your own
//         </motion.button>
//         <motion.h1
//           initial={{ opacity: 0, x: -200 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             delay: 0.6,
//             x: { type: "spring", stiffness: 60 },
//             opacity: { duration: 0.6 },
//             ease: easeIn,
//             duration: 1,
//           }}
//           className="text-4xl md:text-6xl font-bold"
//         >
//           Make the most <span className="block"> of o</span>
//           Printing
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, x: -200 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             delay: 0.5,
//             x: { type: "spring", stiffness: 60 },
//             opacity: { duration: 0.6 },
//             ease: easeInOut,
//             duration: 1,
//           }}
//           className="px-4 text-sm md:text-base"
//         >
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
//           tempora dolor nisi nostrum eos iure quaerat unde ex non at deserunt,
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, x: -200 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             delay: 1,
//             x: { type: "spring", stiffness: 70 },
//             opacity: { duration: 0.9 },
//             ease: easeInOut,
//             duration: 1,
//           }}
//           className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4"
//         >
//           <p>
//             {" "}
//             <button className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-emerald-500">
//               Shop Now
//             </button>
//           </p>
//           <p>
//             {" "}
//             <button className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition duration-300">
//               How we work
//             </button>
//           </p>
//         </motion.div>
//       </div>
//       <motion.div
//         initial={{ opacity: 0, x: 200 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{
//           delay: 0.6,
//           x: { type: "spring", stiffness: 80 },
//           opacity: { duration: 1 },
//           ease: easeIn,
//           duration: 1,
//         }}
//         className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end"
//       >
//         <img
//           src="../src/assets/Item → slideshow-21.png.jpg"
//           alt=""
//           className="w-full max-w-md object-contain"
//         />
//       </motion.div>
//     </section>
//   );
// }
import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 pt-8">
      <div className="space-y-6 text-center md:text-left md:w-1/2 md:mr-8 md:ml-24">
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.4 },
            ease: easeIn,
            duration: 1,
          }}
          className="bg-purple-200 text-purple-400 rounded-md py-1 px-2"
        >
          Create your own
        </motion.button>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: easeIn,
            duration: 1,
          }}
          className="text-4xl md:text-6xl font-bold"
        >
          Make the most <span className="block"> of o</span>
          Printing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: easeInOut,
            duration: 1,
          }}
          className="px-4 text-sm md:text-base"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          tempora dolor nisi nostrum eos iure quaerat unde ex non at
          deserunt,Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quidem, eius.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 70 },
            opacity: { duration: 0.9 },
            ease: easeInOut,
            duration: 1,
          }}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4"
        >
          <p>
            <button className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-emerald-500">
              Shop Now
            </button>
          </p>
          <p>
            <button className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition duration-300">
              How we work
            </button>
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.6,
          x: { type: "spring", stiffness: 80 },
          opacity: { duration: 1 },
          ease: easeIn,
          duration: 1,
        }}
        className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end"
      >
        <img
          src="../src/assets/Item → slideshow-21.png.jpg"
          alt="Descriptive text for the image"
          className="w-full max-w-full object-contain"
        />
      </motion.div>
    </section>
  );
}
