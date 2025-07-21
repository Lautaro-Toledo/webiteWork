import React from 'react';
import { Nav } from '../../../nav';
import { Hero } from '../../../Home/sections/Hero/Hero';
import image1 from '../../../../assets/tell/image_1.jpg';
import image2 from '../../../../assets/tell/image_2.png';
import image3 from '../../../../assets/tell/image_5.jpg';
import image4 from '../../../../assets/tell/image_6.jpg';
import image5 from '../../../../assets/tell/image_7.jpg';

function Tell() {
  return (
    <>
      <Nav />
      <Hero />
      <section className='pt-[70px] px-8'>
        <h1 className='mb-16 text-3xl font-medium text-center'>Outreach: T.E.L.L.</h1>
        <div className='w-full mb-20 flex justify-between gap-5'>
          <div>
            <h2 className='pb-4 text-lg font-bold'>THE IDEA:</h2>
            <p className='text-lg'>
              The Trainees’ and Educators’ Learning Lab (TELL) is a project conceived by me and my lab mate Alexandra Karagiaridi while in the laboratory of Dr. Heather Pinkett at Northwestern University. Although our initial goal was to introduce high school sophomores and juniors to hands-on science in a research lab setting, we soon realized the potential that this learning space has for helping educators test, improve and publish their teaching strategies in a teaching-as-research format. It is thus a mutually beneficial learning space where both trainees and educators walk away with valuable connections and hands-on experience.

              Largely inspired by Dr. Bennett Goldberg’s Inclusive STEM class and other related small courses and workshops organized by the Searle center, we designed a learning environment for local high school students to come in on a Saturday and spend several hours getting familiar with some basic terms in protein biochemistry and having a hands-on experience in affinity protein purification and gel electrophoresis. We piloted this program with 7 ETHS female students, receiving positive feedback from all participants. As part of the learning experience, we kept all participants connected via Slack and provided them with a two-line blurb on the hands-on skills they have practiced (to include in their CVs) as well as a list of resources for other similar research opportunities to take advantage of and leverage towards future college applications, bettering their prospects in joining research labs as undergrads.x
            </p>
          </div>
          <img className="w-[750px] rounded-2xl" src={image1} alt="" />
        </div>

        <div className='w-full mb-20 flex justify-between gap-5'>
          <img className="w-[750px] rounded-2xl" src={image2} alt="" />
          <div>
            <h2 className='pb-4 text-lg font-bold'>THE IMPLEMENTATION:</h2>
            <p className='pb-2 text-lg'>
              After peaking the students’ interest with a combination of brainstorming, think-pair-share exercises and an introductory lesson to affinity protein purification, we provided student pairs with a mixture of histidine-tagged green fluorescent protein (GFP), bovine serum albumin (BSA) and cytochrome c, as well as a small gravity nickel column. Students were able to pipet the protein mixture onto the column and observe the red-colored cytochrome c fall in the flowthrough while the green fluorescent target remained bound to the column even after an extensive wash. They then eluted the GFP target in a clean tube and ran a gel to assess the purity of the sample, along with the presence of the initially “invisible” BSA in the flowthrough and wash portions.
            </p>
            <p className='text-lg'>
              We wish to expand the reach of this learning approach to other lab spaces by making all our resources (teaching plans, lecture slides, consent forms, etc.) available to the public. In addition, we would love to provide further guidance to anyone who chooses to take such an experience in the direction of teaching as research and publish their findings.
            </p>
          </div>
        </div>

        <div className='w-full mb-20 flex flex-col gap-5'>
          <div>
            <h2 className='pb-4 text-lg font-bold'>THE OUTCOME:</h2>
            <p className='pb-2 text-lg'>
              Just as we had hoped, this experience was a hit for everyone involved! The students got a feel of what the day-to-day of a real scientist is like. They also had an opportunity to interact with Alexandra and I, asking questions about the science career track and getting tips on how to continue expanding their skill set in order to land a position in a research lab in college. In addition to receiving an introduction to protein biochemistry and honing their pipetting skills, our participants were coached on how to write up their newly acquired skills in ”affinity protein purification and polyacrylamide gel electrophoresis” in their CVs. And we, the educators, walked away with a new research question in mind…
            </p>
          </div>
          <div className='w-full  flex justify-between gap-5'>
            <img className="w-[50%] h-auto rounded-2xl" src={image3} alt="" />
            <img className="w-[50%] h-auto rounded-2xl" src={image4} alt="" />
          </div>
        </div>

        <div className='w-full mb-20 flex justify-between gap-5'>
          <img className="w-[750px] rounded-2xl" src={image5} alt="" />
          <div>
            <h2 className='pb-4 text-lg font-bold'>THE FUTURE:</h2>
            <p className='pb-2 text-lg'>
              While growing evidence supports the benefits of active learning and evidence-based teaching in higher education STEM classrooms, US high school students are still largely introduced to STEM in the traditional, lecture-based style. Consequently, high school students may hold misconceptions on what real-life scientists do and how they approach outstanding questions. In the future, we wish to conduct a research study aiming to assess the strengths, weaknesses and impact of our learning module, by interviewing participants who have completed the training. We predict the emergence of common themes around misconceptions, learning outcomes, motivation and sense of belonging in STEM.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tell;
