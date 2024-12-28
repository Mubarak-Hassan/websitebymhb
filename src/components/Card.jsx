import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react";
const CardItem = [
  {
    image: "src/assets/Item-1.png",
    title: "Youth Short Sleeve Tee",
    price: "$24.99",
  },
  {
    image: "src/assets/Item-2.png",
    title: "Premium Crewneck Sweatshirt",
    price: "$24.99",
  },
  {
    image: "src/assets/Item.png",
    title: "Midweight Cotton Tee",
    price: "$26.99-$29.99",
  },
  {
    image: "src/assets/Item-2.png",
    title: "Fine jersey Tee",
    price: "$24.99",
  },
];
export default function Card() {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -400 }}
    whileInView={{ opacity: 1, x: 0 }}
    // viewport={{ once: true }}
    transition={{
      delay: 0.6,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 0.4 },
      ease: easeIn,
      duration: 1,
    }}
    className="flex justify-evenly flex-wrap">
      {CardItem.map((item) => (
        <div className="hover:shadow-lg transform hover:scale-105 transition duration-300 mb-8">
          <img src={item.image} alt="" className="w-72" />
          <div className="items-center text-center">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-sm">{item.price}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
