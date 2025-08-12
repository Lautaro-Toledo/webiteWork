import React from "react";
import { motion } from "framer-motion";
import { Nav } from "../../../nav";
import { Hero } from "../../../Home/sections/Hero/Hero";
import persona from "../../../../assets/hero/persona.jpg";
import image1 from "../../../../assets/grasp/image_1.jpg";
import image2 from "../../../../assets/grasp/image_5.jpg";
import image3 from "../../../../assets/grasp/image_6.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function ItemsSections({ title, text, img, reverse }) {
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

export default function Grasp() {
  return (
    <>
      <Nav />
      <Hero img={persona} />
      <section className="pt-[70px] px-8 bg-white max-w-7xl mx-auto">
        <motion.h1
          className="mb-16 text-4xl font-bold text-center text-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Outreach: G.R.A.S.P.
        </motion.h1>

        <ItemsSections
          title="THE IDEA:"
          text=" Sometimes high school students are eager to do hands-on science but there is no lab space currently available to them. They may even have a scientific question in mind, but there is no established lab nearby that focuses on related questions. It would be a shame to miss out on the potential of such bubbling enthusiasm, just because there are not enough resources – so let’s be resourceful!

              I met Yasmine, Helen and Kejsi during my third year in graduate school. They approached me after my Science Café talk, asking for my help with finding a mentor to help them prepare for the George Washington Carver Science Fair. They seemed dead-set on wanting to study the effect of radio waves on living matter: “Are the rumors true - can cell phones really give us cancer or diabetes?” I was only vaguely familiar with the existing research on this topic and did not know of any lab at Penn that studies something even remotely related, let alone able to take in three students at the same time. Plus, it was the middle of the school year, the girls were in high school full-time and I had my hands full with my thesis project. “Can we somehow study this from home?” I asked and thus the idea of DIY science was born.

              The Girls Rock at Science Project (GRASP) was an education experiment with remote hands-on mentoring where I would touch base with my mentees weekly via Skype to help them set up labs in their homes, provide them with a solid understanding of the scientific process and guide them through their research.
"
          img={image1}
        />

        <ItemsSections
          title="THE IMPLEMENTATION:"
          text="
              After reviewing the literature on the effect of radio waves on living matter, we discovered that there is no consensus on the answer. Radio waves provide non-ionizing radiation, so if they cause disease, it would not be through the same mechanism that X-rays or gamma rays would (i.e. disrupting DNA structures). We started thinking about periodic phenomena in living things that might be vulnerable to low frequency perturbations and we landed on our refined research question: “Can radio waves perturb circadian rhythms or adaptation to stress in living organisms?”
              
              We chose bean plants as our model system, because they are organisms one has easy access to and can grow in her own home. We designed and built Faraday cages from carboard boxes wrapped with aluminum foil and tested their efficiency by placing a cell phone or a radio receiver inside and observing how much the signal dropped. We also had control boxes that lacked aluminum casing. We sprouted beans or grew bean plants inside both box types, observing differences in growth rates, anatomical characteristics, pigment profile and adaptation to osmotic shock (salt water in the soil). For studying the effects on the circadian rhythm we measured the angle between the two leaves of a young bean plant, as we knew that this angle increases and decreases periodically throughout the day. View our complete protocol book here.
          
              "
          img={image2}
          reverse
        />

        <ItemsSections
          title="THE OUTCOME:"
          text="
            I mentored Yasmine, Helen and Kejsi from their sophomore to senior year in high school. Through our weekly meetings, they learned how to read research articles critically, how to formulate testable research questions, how to design and conduct experiments, factoring in rigor and reproducibility. We had weekly meetings to discuss their written reports and wrote a protocol book together. All the talking and writing greatly enhanced their science communication skills and by the end of our collaboration they sounded like seasoned young scientists. Over the years, my three trainees put their hard-earned results in posters and participated in multiple science fairs, placing in every single one of them! Yasmine, Helen and Kejsi also assisted me with advertising Open Labs at Penn to other high school students and built impressive resumes with which they were accepted into Boston University, Drexel University and UPenn, respectively.
          "
          img={image3}
        />

        <ItemsSections
          title="THE FUTURE:"
          text="
            With the support from an experienced mentor nothing can stop a curious and enthusiastic mind! One wonders how many more high school sophomores are out there right now, asking themselves how something works or why something is and not having the slightest clue on how to begin satisfying their curiosity. Similarly, there are plenty of graduate students out there eager to sink their teeth into a PI-like experience, with an opportunity to independently coach a team of younger trainees through a research project from start to finish. By combining remote mentoring with the DIY science approach one can set up a very productive learning environment for all parties involved. If you have already gathered your research team and are looking for ideas on how to set up your own DIY science learning space, check out my learning resources here or contact me directly.
          "
          img={persona}
          reverse
        />
      </section>
    </>
  );
}
