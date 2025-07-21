import React from 'react'
import { Nav } from '../components/nav'
import { Hero } from '../components/Home/sections/Hero/Hero'
import { Philosophy } from '../components/Home/sections/Philosophy/Philosophy'
import persona from '../assets/hero/persona.jpg'

export const Home = () => {
  return (
    <>
      <Nav />
      <Hero img={persona}/>
      <Philosophy />
    </>
  )
}