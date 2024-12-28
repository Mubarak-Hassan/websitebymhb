import { useState } from "react";
import TabContent from "./TabContent";
import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react";
export default function TabButton({ title, onTab, onSelect, i }) {
  const [active, setActive] = useState(false);
  const clickHandler = function(){
    setActive(pervact=>!pervact);
    onTab();
  }
  return (
    <motion.div 
    initial={{ opacity: 0, x: -200 }}
    whileInView={{ opacity: 1, x: 0 }}
    // viewport={{ once: true }}
    transition={{
      delay: 0.6,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 0.4 },
      ease: easeIn,
      duration: 1,
    }}
    className="border-2 border-red-600   py-4 px-4 rounded-3xl">
      <div className="flex justify-between">
        <p className="font-bold md:text-2xl">{title}</p>
        <button
          className="text-2xl ml-14"
          onClick={clickHandler}
        >
          &#11167;
        </button>
      </div>
      {i === onSelect && active && <TabContent onSelect={onSelect} />}
    </motion.div>
  );
}
