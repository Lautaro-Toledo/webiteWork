import React from "react";
import { motion } from "framer-motion";
import img2 from "../../../../assets/philosophy/2.png";
import img3 from "../../../../assets/philosophy/3.png";
import img4 from "../../../../assets/philosophy/4.png";
import img5 from "../../../../assets/philosophy/5.png";
import img6 from "../../../../assets/philosophy/6.png";

const quotes = [
  {
    text: "'Be a goldfish.'",
    author: "Ted Lasso",
    image: img2
  },
  {
    text: "EXPERIMENT FAIL LEARN REPEAT",
    author: "",
    image: img3
  },
  {
    text: "'Anyone who has never made a mistake has never tried anything new.'",
    author: "Albert Einstein",
    image: img4
  },
  {
    text: "'Success is not final, failure is not fatal: it is the courage to continue that counts.'",
    author: "Winston Churchill",
    image: img5
  },
  {
    text: "'Worse things have happened to better people.'",
    author: "Alex C.",
    image: img6
  }
];

export const PickMeUps = () => {
  return (
    <section id="pick-me-ups" className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12 md:mb-16"
        >
          Pick-me-ups
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Text Column - 35% on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[35%] flex items-center"
          >
            <div className="space-y-6">
              <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                Whether it was your first day in the lab and you ran your gel in reverse, 
                or you poured all your expertise, heart and soul into an experiment and saw 
                a flat line, you are not alone on your uphill road towards scientific excellence. 
                If you stay passionate, motivated and connected with your mentors, you will soon 
                learn that all the obstacles were just opportunities to keep improving your skills. 
                Welcome the challenges, embrace the unknown, utilize your resources and always 
                remember: We're in this together!
              </p>
            </div>
          </motion.div>

          {/* Images Grid - 65% on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[65%]"
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`
                    relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl 
                    transition-all duration-300 group cursor-pointer
                    ${index === 0 ? 'col-span-2 h-72 sm:h-80' : 'h-52 sm:h-60'}
                  `}
                >
                  {/* Background Image with scale effect */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${quote.image})` }}
                  />
                  
                  {/* Enhanced Overlay with stronger gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 
                                group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/30 
                                transition-all duration-300" />
                  
                  {/* Quote Text with improved visibility */}
                  <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white">
                    <p className={`
                      font-bold leading-relaxed mb-3
                      ${index === 0 
                        ? 'text-xl sm:text-2xl md:text-3xl' 
                        : 'text-base sm:text-lg md:text-xl'}
                    `}
                      style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.6)'
                      }}
                    >
                      {quote.text}
                    </p>
                    {quote.author && (
                      <p className={`
                        opacity-95 font-medium
                        ${index === 0 ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}
                      `}
                        style={{
                          textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0px 0px 15px rgba(0,0,0,0.5)'
                        }}
                      >
                        — {quote.author}
                      </p>
                    )}
                  </div>

                  {/* Additional hover effect overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};