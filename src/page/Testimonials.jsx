import React from 'react'
import { Nav } from '../components/nav'
import { Hero } from '../components/Home/sections/Hero/Hero'
import { TestimonialsSection } from '../components/Testimonials/sections/TestimonialsSection'
import persona from '../assets/hero/image_6.jpg'

export const Testimonials = () => {
  return (
    <>
      <Nav />
      <Hero img={persona}/>
      <TestimonialsSection />
    </>
  )
}