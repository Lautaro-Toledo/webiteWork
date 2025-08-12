import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";


export const TestimonialItem = ({ testimonial, index, isExpanded, onToggle, heights, previewRefs, fullRefs, showToggleButton = true }) => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { 
    once: true, 
    amount: 0.3 
  });

  // Preview texto corto (cortado en caracteres)
  const previewText = testimonial.content.slice(0, 300) + "...";

  const previewHeight = heights[index]?.previewHeight + 30 || 0;

  return (
    <div
      className={`w-full flex flex-col justify-center md:flex-row  ${
        testimonial.imgPosition === "left"
          ? "md:flex-row"
          : "md:flex-row-reverse"
      } items-center gap-6 mb-20`}
    >
      <motion.div 
        className="px-6 flex-shrink-0 max-w-[400px]"
        ref={imageRef}
        initial={{ 
          opacity: 0, 
          x: testimonial.imgPosition === "left" ? -50 : 50,
          scale: 0.8
        }}
        animate={isImageInView ? { 
          opacity: 1, 
          x: 0,
          scale: 1
        } : {}}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: 0.2
        }}
      >
        <img
          src={testimonial.imgSrc}
          alt={testimonial.name}
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
        />
      </motion.div>

      <div className="w-full text-white px-6 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-1">{testimonial.name}</h2>
        <h3 className="text-md italic mb-4 text-gray-300">{testimonial.role}</h3>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : previewHeight,
          }}
          style={{ overflow: "hidden" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Texto preview escondido (medición) */}
          <p
            ref={(el) => (previewRefs.current[index] = el)}
            className="text-lg text-gray-100 text-justify whitespace-pre-wrap absolute invisible pointer-events-none select-none"
            aria-hidden="true"
          >
            {previewText}
          </p>

          {/* Texto completo escondido (medición) */}
          <p
            ref={(el) => (fullRefs.current[index] = el)}
            className="text-lg text-gray-100 text-justify whitespace-pre-wrap absolute invisible pointer-events-none select-none"
            aria-hidden="true"
          >
            {testimonial.content}
          </p>

          {/* Texto visible */}
          <p className="text-lg text-gray-100 text-justify whitespace-pre-wrap relative">
            {isExpanded ? testimonial.content : previewText}
          </p>
        </motion.div>

        {/* Solo mostrar el botón si showToggleButton es true */}
        {showToggleButton && (
          <button
            onClick={() => onToggle(index)}
            className="mt-3 text-sm text-blue-400 hover:text-blue-600 font-semibold transition cursor-pointer"
            aria-label={isExpanded ? "Lear less" : "Lear more"}
          >
            {isExpanded ? "Lear less" : "Lear more"}
          </button>
        )}
      </div>
    </div>
  );
};