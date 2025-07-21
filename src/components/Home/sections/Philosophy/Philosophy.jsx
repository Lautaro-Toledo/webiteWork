import philosophyImg from "../../../../assets/philosophy/1.png";
import philosophyImgG from "../../../../assets/philosophy/5.png";
import philosophyImgv from "../../../../assets/philosophy/6.png";
import React, { useState } from "react";

const slides = [
  {
    text: `Great mentorship is important to me, because it can make the difference between someone giving up on her dreams or doubling down on her ambitions. A good mentor understands the universal fear of failure and the damage this fear can do to learning and growth. In the research lab, where trial and error are the fundamental tools of discovery, trainees can often find themselves overwhelmed or discouraged and rush to feed their existing self-doubts with examples of failed scientific experiments. We can’t let that happen, can we? </br>
    In my learning environments, I aim to establish trust and maintain communication. We talk about goals, roadblocks and resources, and we map out our strategy. This is as true when I meet a mentee for the first time, as it is when I have worked with someone for years. A trainee’s goals or circumstances can change, and she should always feel comfortable to come by and negotiate a new route forward. It is a mentor’s job to always know what motivates her mentees and work with that knowledge to help them move forward.`,
    imgPosition: 'right',
    title: null,
    img: philosophyImg
  },
  {
    text: `My mentees tend to walk away with a bag of skills that includes technical expertise, time-management strategies, resourcefulness, improved science communication skills and intellectual independence. While I want my trainees to feel comfortable in my presence, I always challenge them to get out of their comfort zones and keep learning. I see myself as an island that they can swim back to for feedback and advice, before swimming off to find out how far their own skills will get them now.
</br>
I value my relationship with my trainees and often see them becoming great mentors themselves, using similar strategies to the ones I have taught them. It is exhilarating to realize time and time again that we are all here trying to understand intriguing natural phenomena, as much as we are all here to understand each other and lift each other up! 
`,
    imgPosition: 'left',
    title: null,
    img: philosophyImgG
  },
  {
    text: `Whether it was your first day in the lab and you ran your gel in reverse, or you poured all your expertise, heart and soul into an experiment and saw a flat line, you are not alone on your uphill road towards scientific excellence. If you stay passionate, motivated and connected with your mentors, you will soon learn that all the obstacles were just opportunities to keep improving your skills. Welcome the challenges, embrace the unknown, utilize your resources and always remember: We’re in this together!`,
    imgPosition: 'right',
    title: 'Pick-me-ups',
    img: philosophyImgv
  }
];

export const Philosophy = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const slide = slides[current];

  return (
    <section id="philosophy" className="h-screen w-full bg-white flex items-center justify-center ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-16">Mentoring Philosophy</h1>
        <div className="relative w-full flex justify-center items-center">
          <button
            onClick={prevSlide}
            className="absolute -left-11 top-1/2 -translate-y-1/2 bg-gray-700 text-white rounded-full w-10 h-10 shadow hover:bg-gray-900 transition-all z-10 cursor-pointer"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className={`w-full flex justify-between items-center gap-7 bg-gray-400 rounded-2xl px-10 py-5 transition-all duration-500 ${slide.imgPosition === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              {slide.title && <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>}
              <p className="text-xl text-left" dangerouslySetInnerHTML={{ __html: slide.text }} />
            </div>
              <img src={slide.img} alt="philosophyImg" className="h-[350px] md:h-[450px] rounded-2xl"/>
          </div>
          <button
            onClick={nextSlide}
            className="absolute -right-11 top-1/2 -translate-y-1/2 bg-gray-700 text-white rounded-full w-10 h-10 shadow hover:bg-gray-900 transition-all z-10 cursor-pointer"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-gray-800' : 'bg-gray-400'} transition-all`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}