import React from "react";
import { motion } from "framer-motion";

export const ItemsSectionsGrasp  = ({ title, text, img, reverse, fadeUp }) => {
  return (
    <motion.div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } gap-10 items-center mb-20`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <motion.img
        src={img}
        alt=""
        className="w-full lg:w-[40%] rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
        whileHover={{ scale: 1.03 }}
      />
      <div className="lg:w-[60%]">
        <h2 className="pb-4 text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg leading-relaxed text-gray-700">{text}</p>
      </div>
    </motion.div>
  );
}