// import { easeIn, easeInOut } from "motion";
// import { motion } from "motion/react";
// export default function Items({ image, num }) {
//   return (
//     <>
//       <div className="flex flex-col w-full my-16 mx-20 md:flex-row md:items-center md:justify-between">
//         <motion.img
//           initial={{ opacity: 0, x: -300 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{
//             delay: 1,
//             x: { type: "spring", stiffness: 60 },
//             opacity: { duration: 0.2 },
//             ease: easeIn,
//             duration: 1,
//           }}
//           src={image}
//           alt=""
//           className="w-1/2 mb-4 md:w-1/3"
//         />
//         <p>
//           <span className="ml-28 bg-gray-400 rounded-3xl px-4 p-2 mr-7">
//             {num}
//           </span>
//         </p>
//         <motion.div
//          initial={{ opacity: 0, x: 300 }}
//          whileInView={{ opacity: 1, x: 0 }}
//          transition={{
//            delay: 1,
//            x: { type: "spring", stiffness: 60 },
//            opacity: { duration: 0.6 },
//            ease: easeIn,
//            duration: 1,
//          }}
//         className="w-1/2">
//           <h1 className="my-4 ml-11 font-bold md:text-xl">
//             Add Your Shirt design
//           </h1>
//           <p className="text-sm w-[22rem] md:w-2/3">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
//             omnis rem earum dignissimos ab, sit praesentium est recusandae, quo
//             quis consectetur reiciendis laboriosam quod, necessitatibus libero
//             adipisci illum. Commodi voluptate et atque doloribus debitis,
//           </p>
//         </motion.div>
//       </div>
//     </>
//   );
// }
import { easeIn } from "motion";
import { motion } from "motion/react";

export default function Items({ image, num }) {
  return (
    <div className="container mx-auto md:ml-32 flex flex-col w-full my-16 px-4 md:flex-row md:items-center md:justify-between">
      <motion.img
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: easeIn,
          duration: 1,
        }}
        src={image}
        alt="Descriptive text here"
        className="w-full mb-4 md:w-1/3 "
      />
      <p className="flex justify-center md:justify-start">
        <span className="bg-gray-400 rounded-3xl px-4 py-2">{num}</span>
      </p>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.6 },
          ease: easeIn,
          duration: 1,
        }}
        className="w-full md:w-1/2"
      >
        <h1 className="my-4 text-center md:text-left font-bold text-lg md:text-xl">
          Add Your Shirt Design
        </h1>
        <p className="text-sm w-full md:w-2/3 mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis
          rem earum dignissimos ab, sit praesentium est recusandae, quo quis
          consectetur reiciendis laboriosam quod, necessitatibus libero adipisci
          illum. Commodi voluptate et atque doloribus debitis,
        </p>
      </motion.div>
    </div>
  );
}
