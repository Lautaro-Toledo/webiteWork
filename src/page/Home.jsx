import React from 'react'
import { Nav } from '../components/nav'
import { Hero } from '../components/Home/sections/Hero/Hero'
import { Philosophy } from '../components/Home/sections/Philosophy/Philosophy'
import { PickMeUps } from '../components/Home/sections/PickMeUps/PickMeUps'
import persona from '../assets/hero/persona.jpg'
import { TestimonialsSection } from '../components/Home/sections/Testimonials/TestimonialsSection'

export const Home = () => {
  return (
    <>
      <Nav />
      <Hero img={persona}/>
      <Philosophy />
      <PickMeUps />
      <TestimonialsSection />
    </>
  )
}