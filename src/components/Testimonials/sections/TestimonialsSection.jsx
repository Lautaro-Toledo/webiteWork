import React from 'react'
import philosophyImgv1 from "../../../assets/Testimonials/1.png";
import philosophyImgv2 from "../../../assets/Testimonials/2.png";
import philosophyImgv3 from "../../../assets/Testimonials/3.png";
import philosophyImgv4 from "../../../assets/Testimonials/4.png";
import philosophyImgv5 from "../../../assets/Testimonials/5.png";

const testimonialsData = [
  {
    name: "Alexandra Karagiaridi",
    role: "PhD student, Pinkett Lab",
    content: `I am a big believer that people learn better through collaboration, sharing, and open communication that are all integral parts of good mentorship. For me good mentorship matters because it allows me to communicate openly and safely my thoughts and receive feedback in real time that most of the times informs my next steps, whether that is in the context of planning an experiment, writing an abstract or paper, or preparing slides for a talk. Val was my mentor during my rotation in Dr. Heather Pinkett’s lab in the Spring Quarter of 2022. At that time, I was a 1st year graduate student in the IBiS program, doing quarterly rotations to choose a thesis lab. A couple sentences are truly not enough to put into words how immensely impactful, helpful, pivotal, and influential Val has been for my personal and professional growth both inside and outside the laboratory. Even from the very beginning, she has always been open, patient, and eager to answer my questions and help me with interpreting experimental results that would inform our next steps in the project. She never undermined my contributions or ideas, and challenged me where necessary, while acknowledging and celebrating my achievements. Her mentorship approach especially during my rotation, at a time when I was still learning the techniques and familiarizing myself with the project goals, was one of the main reasons why I ended up joining the lab, because I could see myself growing further into a stronger scientist and a more well-rounded individual by surrounding myself with lab mates and mentors like Val.. I also believe that people learn better through being challenged and pushed to think outside the box. Val is really amazing at challenging her mentees in a way that keeps them comfortable but allows them to step into unfamiliar territory and navigate it, so they raise to the occasion. Val’s questions like “What does this mean?”, “Is this what you expected?” or “Based on these results, how would you proceed next?” are ways in which she has challenged me to think constructively and become more confident in myself. Val embodies a sincere desire to help when applicable, and I think this is the one quality I resonate with the most. Val will challenge you, but she will also exhibit a lot of understanding if you are navigating tough times or are feeling stuck with experiments. A big testimonial to that is her willingness and eagerness to understand nuances of my thesis project and suggest potential avenues and ideas even though they are not part of her main duties. Another mentor quality Val embodies is her ability to actively listen and devote her full attention to the matter that you have brought to her, whether it entails advice, reassurance or a concern. Even a simple “Hey Val, can I get your thoughts on these gel results?” or “I am thinking of doing this experiment, but these are my concerns …” will result in Val setting the time aside to listen to you in detail, ask thoughtful questions that initiate an interesting discussion that you walk away from more certain than before and like you learned something. From rotating in the lab to now, all my interactions and experiences with Val have been so pleasant and informative. Learning from Val is probably one of the greatest memories I can think of having in the lab, filled with so much powerful knowledge based on theory and her personal experiences, laughter, a sense of security that makes room for mistakes that you can learn from, and respect for one another despite her more senior position to mine.   `,
    imgSrc: philosophyImgv1, // cambia esto al path correcto
    imgPosition: "left",
  },
  {
    name: "Citlayi Villaseñor",
    role: "PhD student, Kamat Lab",
    content: `I believe having mentors who care about my well-being, success, and personal development have helped shape me as a more kind, compassionate, and motivated scientist. Feeling like I am part of a community with shared goals and values also helps me feel safer learning and improving my skills. Valentina is one of my postdoc mentors in our collaborator’s laboratory, Heather Pinkett’s group, and she has mentored me with experiments, planning experiments, and discussing results. During the time she has mentored me I’ve been a graduate student, and my career goals are still to continue in academic spaces as a researcher and teacher. Valentina has been supportive through her willingness to have one-on-one meetings to discuss my projects, sharing and demonstrating her knowledge with purifying proteins, and sharing her knowledge with biochemical tests such as ATPase activity assays. She has always been open to discussing topics that she has a deep understanding of and answering many questions that I’ve had throughout our time working together. Valentina challenged me by emphasizing the importance of recording thorough notes for protocols as well as staying flexible as experiments change direction. Valentina also challenged me by coming up with alternative explanations and possibilities for results that we were observing in our experiments. I felt Valentina had a sincere desire to help me and support me as she shared new methods and protocols with me. She would always meet with me when I had questions about these procedures and show her willingness to teach me by making time during her already busy schedule. Valentina was also always flexible and thinking on her toes as she would often come up with solutions to problems by reading in the literature or reaching out to her previous mentors as well. Working with and learning from Valentina was very beneficial and she taught me a lot about how to be a thoughtful, organized, and supportive scientist to others. She has devoted time to learning how to become a better mentor as well and our discussions on this topic through an online learning community were always helpful and insightful as well. Valentina has a lot of wisdom and care to share with other scientists, and I am grateful to have known her and to be mentored by her during my PhD.`,
    imgSrc: philosophyImgv2,
    imgPosition: "right",
  },
  {
    name: "Otra Lydia Kenney",
    role: "PhD student, Pinkett Lab",
    content: `Good mentorship is the foundation of a healthy and productive research environment. Mentorship allows the mentors and mentees to grow and advance in ways that they could not alone. Val became my mentor during my first year of graduate school when I was in the process of selecting my thesis lab. At the time I knew I wanted to be a structural biologist/biochemist and I was looking for a lab that would allow me to achieve these goals. Val taught me many of the techniques and background knowledge necessary for my research project. She supported me by showing me patience when I needed to learn new techniques and always encouraged me in the lab, even when I made mistakes. Val showed me new ways to multi-task and be more productive as a scientist, which pushed me to be a better lab member and graduate student. She taught me that there is always a more efficient way to complete a task, which challenged me and continues to influence the way I approach my work. Val has an exceptional ability to see solutions and opportunities, and encourages those around her to find more efficient and sustainable ways to conduct research. Val also has a sincere desire to help, and often took time out of her schedule to help edit my writing for applications and to help me with experiments. Learning from Val has made me a better scientist and person overall. Her enthusiasm for science and mentoring inspires me and motivates me to become a better student.`,
    imgSrc: philosophyImgv3,
    imgPosition: "left",
  },
  {
    name: "Rising Senior at NU / Data Science Intern",
    role: "",
    content: `Good mentorship matters to me because it can help shape and determine my career trajectory. With great mentorship, it becomes much easier to feel more compelled and passionate to pursue a specific field. Aside from that, great mentorship begets great mentorship – a great mentor inspires me to become a great mentor as well. I met Val during the summer of my freshman year (rising sophomore) as a fresh undergraduate. During this time, I was planning on pursuing a career in medicine (on the pre-medical track) working at the Pinkett Lab under Val’s mentorship. Val was incredibly supportive and responsive to questions that I raised whenever I needed help. She helped guide my summer research project and goals and was instrumental in helping me during the problem-solving process whenever I needed it. Aside from answering my questions whenever I asked, Val challenged me by encouraging me to think outside the box about different solutions that I could think of. She also encouraged me to be more proactive in working on other lab-specific tasks that could aid in everyone else’s experiments. As a mentor, she showed deep respect for my inexperience by being encouraging and always answering my questions. I never felt like my career stage was looked down upon while I was receiving her mentorship. Val helped me problem-solve whenever I was at a standpoint of my project that seemed difficult to progress at. It felt great learning from Val. Though I ultimately did not end up pursuing a career in biology or medicine, Val’s guidance was tremendous in helping me figure out what my career trajectory could look like.`,
    imgSrc: philosophyImgv4,
    imgPosition: "right",
  },
  {
    name: "Vir Patel",
    role: "Investigadora",
    content: `To me mentorship is defined by someone willing to meet you where you are and help guide you to where you want to go. That a good mentor is as invested in your success as you are and is willing to utilize their knowledge to help you achieve your goals. When I joined the lab of Dr. Heather Pinkett in the winter of 2022, I saw research as a piece of a successful medical school application, not realizing the journey I would be embarking on. With zero research experience, learning a multitude of nuanced research techniques, the biochemical background of our experiments, and the day-to-day lab operations proved extremely challenging. Yet, with the guidance of my postdoc mentor, Val, I began to overcome these preliminary difficulties as I shadowed her experiments and performed said experiments under her watchful eye. Still, by the summer of 2022, Val believed I would only be able to realize my full research potential by performing independent research. Being given the responsibility over my own independent research project was initially daunting as the project's success relied solely on my work and aptitude which I felt I had not yet developed. Afraid of making mistakes, wasting resources, and ruining equipment, I would ask Val many questions. However, after a few weeks, Val set up a meeting with me and explained how my array of questions was limiting my ability to grow as a researcher, while listening to my concerns. Together, we came up with a solution where I would limit the number of questions I could ask in a day, aiding my development as a researcher by forcing me to choose the questions that truly required Val’s support versus questions where I could find solutions myself. By having Val create this “independence” for me, I was able to learn from my many experimental failures, scientific literature, and tailored questions I would ask Val and the other lab members, eventually leading to my experimental success, an award-winning senior thesis (Emanuel Margoliash Prize for Basic Research), and my acceptance to the Loyola University Chicago Stritch School of Medicine. Being mentored by Val helped spur my development not only as a researcher, but as a life-long learner and person as she continually pushed me to find my limits and gave me the confidence to exceed the expectations I had for myself. Val’s care about not only my work, but my goals and my personal development, are attributes I will continue to appreciate about my time in the Pinkett lab, and will continue to look for in all my future mentors as I continue my academic journey.`,
    imgSrc: philosophyImgv5,
    imgPosition: "left",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-gray-800 py-16 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-16">
        Mentoring Philosophy
      </h1>

      {testimonialsData.map((testimonial, index) => (
        <div
          key={index}
          className={`w-full flex flex-col md:flex-row ${
            testimonial.imgPosition === "left"
              ? "md:flex-row"
              : "md:flex-row-reverse"
          } items-center gap-1 mb-20`}
        >
          <div className=" px-6">
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="w-full h-auto max-w-[700px] max-h-[1000px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className=" w-full text-white px-6">
            <h2 className="text-2xl font-semibold mb-2">{testimonial.name}</h2>
            <h3 className="text-md italic mb-4 text-gray-300">{testimonial.role}</h3>
            <p className="text-lg text-gray-100 text-justify whitespace-pre-wrap">
              {testimonial.content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
