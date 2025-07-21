import React from 'react';
import { Nav } from '../../../nav';
import { Hero } from '../../../Home/sections/Hero/Hero';
import persona from '../../../../assets/hero/persona.jpg';
import CardOutreach from '../../cardOutreach';
import image1 from '../../../../assets/openLabs/image_1.jpg'
import image2 from '../../../../assets/openLabs/image_3.jpg'
import image3 from '../../../../assets/openLabs/image_20.jpg'
import image4 from '../../../../assets/openLabs/image_4.jpg'
import image5 from '../../../../assets/openLabs/image_5.jpg'
import image6 from '../../../../assets/openLabs/image_7.jpg'
import image7 from '../../../../assets/openLabs/image_8.jpg'
import image8 from '../../../../assets/openLabs/image_16.jpg'
import image9 from '../../../../assets/openLabs/image_17.jpg'
import image10 from '../../../../assets/openLabs/image_18.jpg'
import image11 from '../../../../assets/openLabs/image_21.jpg'
import image12 from '../../../../assets/openLabs/image_22.jpg'
import image13 from '../../../../assets/openLabs/image_23.jpg'

function OpenLabs() {
  return (
    <>
      <Nav />
      <Hero img={persona} />
      <section className='pt-[80px] px-8'>
        <h1 className='mb-16 text-3xl font-medium text-center'>Outreach: Open Labs at Penn</h1>
        <div className='w-full mb-20 flex justify-between gap-5'>
          <p className='text-lg'>
            I started working with Open Labs at Penn during my third year in graduate school. My first involvement with this organization was as an invited speaker, presenting my thesis research in a TED-style format to an audience of local high school students and their parents. The concept was exciting, the impact was palpable, the opportunity for growth was immense… I was hooked!
          </p>
          <img className="w-[750px] h-auto rounded-2xl" src={image1} alt="" />
        </div>

        <div className='w-full mb-20 flex justify-between gap-5'>
          <img className="w-[750px] h-auto rounded-2xl" src={image2} alt="" />
          <p className='text-lg'>
            During the two years of co-directing the organization with Elizabeth Hunter, we worked hard to enhance the status and extend the reach of Open Labs at Penn. We created an official executive board, forged new on- and off-campus collaborations, expanded our budget and invested lots of time in re-branding and advertisement. With the help of our growing team of volunteers, we revamped our webpage and created social media presence on Instagram and Facebook. In addition to the traditional Science Café events, we introduced graduate student recruitment socials, as well as science communication workshops with invited speakers. We even ventured into the uncharted territory of setting up a DNA interactive booth at the Franklin Institute for Women in Science Day. We learned a lot and made friends with lots of other learners and educators!
          </p>
        </div>

        <div className='w-full mb-6 flex justify-between gap-5'>
          <div>
            <h2 className='pb-4 text-lg font-bold'>OPEN LABS BACKGROUND:</h2>
            <p className='text-lg'>
              Open Labs is a fellowship of graduate students at the University of Pennsylvania, with associate chapters at Yale, Princeton, Columbia and Harvard University. Our organization is devoted to educating and mentoring students in grades 6-12, encouraging students to pursue careers in the sciences, and improving our own science communication skills for a broad, non-expert audience.
            </p>
          </div>
          <img className="w-[750px] h-auto rounded-2xl" src={image3} alt="" />
        </div>
        <div className='w-full mb-20 flex justify-between gap-5'>
          <img className="w-[50%] h-auto rounded-2xl" src={image4} alt="" />
          <img className="w-[50%] h-auto rounded-2xl" src={image5} alt="" />
        </div>

        <div className='w-full mb-6 flex justify-between gap-5'>
          <div>
            <h2 className='pb-4 text-lg font-bold'>OUR SCIENCE CAFÉ EVENTS:</h2>
            <p className='text-lg'>
              Twice during the school year, Open Labs hosts on-campus Science Café events targeting an audience of local high school students and featuring 3-4 short TED-style talks on cutting-edge research in the fields of social and natural science and technology. Following the presentations, all guests can meet and network with each other as they enjoy delicious refreshments. The events are always scheduled on a Saturday to ensure that the students will be able to attend. If necessary, the Open Labs team is willing and eager to assist with transportation to and from the event. Open Labs has hosted multiple Science Café events with an average attendance of 30-50 people, mostly high school students, some of whom bring their parents, younger siblings or science teachers. All planning and presenting is carried out by Penn graduate students. We believe that the Science Café events are great for getting many teenage minds inspired, curious and informed about the pursuit of science careers. Given the great potential of our Science Café events, we seek to expand our reach both on and off campus, with the ultimate goal of engaging and retaining a greater number of high school students and graduate students.
            </p>
          </div>
        </div>
        <div className='w-full mb-20 flex justify-between gap-5'>
          <img className="w-[50%] h-auto rounded-2xl" src={image6} alt="" />
          <img className="w-[50%] h-auto rounded-2xl" src={image7} alt="" />
        </div>

        <div className="w-full mb-20 grid grid-cols-1 md:grid-cols-3 gap-5">
          <CardOutreach
            title={"Get Inspired"}
            subtitle={"GRADUATE STUDENT MIXER"}
            text={"At the beginning of the school year, Open Labs hosts an event targeting Penn graduate students interested in science, engineering, education and outreach. The goal of this event is to have us all bond over food, drinks and our shared interests as educators. In addition, we take this opportunity to introduce the Penn graduate student community to our team and our upcoming activities."}
          />
          <CardOutreach
            title={"Get Curious"}
            subtitle={"SPEAKER AUDITIONS"}
            text={"Approximately a month prior to each Science Café event, our team sends a campus-wide call for speakers targeting the Penn graduate student community. Open Labs volunteers personally interview potential speakers and select a handful of promising talks. In the weeks that follow, our team works closely with the selected speakers to craft 3-4 clear and captivating TED-style talks."}
          />
          <CardOutreach
            title={"Get Informed"}
            subtitle={"INTERNAL OUTREACH"}
            text={"Open Labs teams up with several on-campus groups and organizations that share our passion for education and outreach. We believe that by joining forces the many outreach initiatives at Penn can be much more effective in influencing their respective target demographics. In the past, we have advertised through GRASP Lab Outreach, Penn Science Across the Ages, LRSM Science Initiatives, VPUL Science Programs, Advancing Women in Engineering and the UPenn Upward Bound Program."}
          />
        </div>

        <div className='w-full mb-20'>
          <h2 className='pb-4 text-lg font-bold'>EXTERNAL OUTREACH:</h2>
          <p className='text-lg'>
            Open Labs actively seeks connections with off-campus groups and organizations whose goals overlap with our own. Such organizations can help broaden the scope of Open Labs’ reach either through advertisement or via meaningful collaborations. Currently, we stay in touch with Philly School News, the School District of Philadelphia, the Spark Mentoring Program, iPraxis, StemCityPHL and the Pennsylvania Society for Biomedical Research. In addition, we wish to build lasting professional relationships with Philadelphia high school teachers. Towards this goal, we plan to advertise our events in the Philadelphia Education Fund Newsletter. Lastly, we have direct contact with a few high school students who volunteer as liaisons between Penn and several public Philadelphia high schools. We work closely with our high school liaisons to promote our Science Café events at their respective schools, as well as to assess the appeal and effectiveness of our events by designing and conducting surveys and interviewing high school student focus groups.
          </p>
        </div>

        <div className='w-full mb-20'>
          <h2 className='pb-4 text-lg font-bold'>Meet a Real-life Scientist, Get a Mentor and a Friend:</h2>
          <div className='w-full mb-20 flex justify-between gap-5'>
            <img className="w-[60%] h-auto rounded-2xl" src={image8} alt="" />
            <img className="w-[40%] h-auto rounded-2xl" src={image9} alt="" />
          </div>
        </div>

        <div className='w-full mb-20 flex justify-between gap-5 bg-gray-300 rounded-2xl'>
          <div className='p-5'>
            <h2 className='pb-4 text-lg font-bold'>OPEN LABS BACKGROUND:</h2>
            <p className='text-lg'>
              Open Labs is a fellowship of graduate students at the University of Pennsylvania, with associate chapters at Yale, Princeton, Columbia and Harvard University. Our organization is devoted to educating and mentoring students in grades 6-12, encouraging students to pursue careers in the sciences, and improving our own science communication skills for a broad, non-expert audience.
            </p>
          </div>
          <img className="w-[550px] h-auto rounded-r-2xl" src={image10} alt="" />
        </div>

        <div className='w-full mb-6 flex justify-between gap-5'>
          <div>
            <h2 className='pb-4 text-lg font-bold'>Open Labs at the Franklin</h2>
            <p className='text-lg'>
              The Open Labs team gathered a group of graduate student volunteers to set up and run an interactive DNA booth at the Franklin Institute to honor several  outstanding female scientists. Together, we inspired the Philly youth (and girls most of all) to appreciate science and aspire to scientific careers!
            </p>
          </div>
        </div>
        <div className='w-full mb-20 flex justify-between gap-5'>
          <img className="w-[33%] h-auto rounded-2xl" src={image11} alt="" />
          <img className="w-[33%] h-auto rounded-2xl" src={image12} alt="" />
          <img className="w-[33%] h-auto rounded-2xl" src={image13} alt="" />
        </div>
      </section>
    </>
  );
}

export default OpenLabs;
