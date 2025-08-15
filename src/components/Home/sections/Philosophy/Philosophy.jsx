import React from "react";
import { motion } from "framer-motion";
import philosophyImg from "../../../../assets/philosophy/1.png";

export const Philosophy = () => {
  return (
    <section id="philosophy" className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12 md:mb-16"
        >
          Mentoring Philosophy
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
          {/* Mobile: Image on top, Desktop: Text left (60%), Image right (40%) */}
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-3/5 order-2 md:order-1"
          >
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Great mentorship is important to me, because it can make the difference between someone 
                giving up on her dreams or doubling down on her ambitions. A good mentor understands the 
                universal fear of failure and the damage this fear can do to learning and growth. In the 
                research lab, where trial and error are the fundamental tools of discovery, trainees can 
                often find themselves overwhelmed or discouraged and rush to feed their existing self-doubts 
                with examples of failed scientific experiments. We can't let that happen, can we?
              </p>
              
              <p className="text-lg leading-relaxed">
                In my learning environments, I aim to establish trust and maintain communication. We talk 
                about goals, roadblocks and resources, and we map out our strategy. This is as true when 
                I meet a mentee for the first time, as it is when I have worked with someone for years. 
                A trainee's goals or circumstances can change, and she should always feel comfortable to 
                come by and negotiate a new route forward. It is a mentor's job to always know what 
                motivates her mentees and work with that knowledge to help them move forward.
              </p>
              
              <p className="text-lg leading-relaxed">
                My mentees tend to walk away with a bag of skills that includes technical expertise, 
                time-management strategies, resourcefulness, improved science communication skills and 
                intellectual independence. While I want my trainees to feel comfortable in my presence, 
                I always challenge them to get out of their comfort zones and keep learning. I see myself 
                as an island that they can swim back to for feedback and advice, before swimming off to 
                find out how far their own skills will get them now.
              </p>
              
              <p className="text-lg leading-relaxed">
                I value my relationship with my trainees and often see them becoming great mentors themselves, 
                using similar strategies to the ones I have taught them. It is exhilarating to realize time 
                and time again that we are all here trying to understand intriguing natural phenomena, as much 
                as we are all here to understand each other and lift each other up!
              </p>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-2/5 order-1 md:order-2"
          >
            <div className="relative w-full">
              <img
                src={philosophyImg}
                alt="Researcher working in laboratory"
                className="w-full h-auto object-contain rounded-2xl shadow-lg max-h-[600px]"
              />
              {/* Optional overlay for better aesthetics */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};