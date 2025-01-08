import React from 'react'
import Nav  from '../components/home/nav'
import image from "../assets/image.jpg"
import { motion } from "framer-motion"
import Skills from '../components/home/skills'
import Services from '../components/home/services'
import Contact from '../components/home/contact'
import Foot from '../components/home/foot'
import Projects from '../components/home/projects'

function Home() {
  return (
    <article className='relative'>
        <Nav />
        <section className='h-screen bg-[--gray] flex items-center justify-center w-full rounded-b-[1em] sm:rounded-b-[4em]'>

          <div className='flex items-center justify-center flex-col sm:w-[50%] px-[1em] gap-[20px]'>

            <motion.figure
            initial={{
              rotate: "360deg"
            }}

            animate={{
              rotate: 0
            }}

            transition={{
              duration: 1.5
            }}
             className='bg-[--white] rounded-[50%] p-[5px] shadow-[--black] relative'>

              <img src={image} className='w-[150px] h-[150px] object-cover rounded-[50%]' alt="" />

              <motion.p
              initial={{
                rotate: "-20deg", 
                opacity: 0
              }}

              animate={{
                opacity: [0, 0, 0, 1]
              }}

              transition={{
                duration: 1.2
              }}
               className='pop absolute p-[10px] px-[15px] bg-[--white] rounded-[2em] top-[20%] right-[-100px] text-[0.8rem] text-[--black] font-semibold'>
                Israel Shedrack
              </motion.p>
            </motion.figure>

            <motion.h1
            initial={{
              opacity: 0, 
              x: "-20px"
            }}

            animate={{
              opacity: 1,
              x: "0px"
            }}

            transition={{
              duration: 1.5
            }}
             className='sm:text-[3rem] text-[2.5rem] urba text-center font-semibold capitalize'>Crafting exceptional digital products, brands, and experiences.</motion.h1>
            
            <motion.button
            initial={{
              opacity: 0, 
              y: "20px"
            }}

            whileInView={{
              opacity: 1,
              y: "0px"
            }}

            transition={{
              duration: 1.5
            }}
             className='pop text-[0.9rem] p-[15px] px-[30px] bg-[--black] text-[--white] rounded-[30px] font-semibold'>
              Latest Projects
            </motion.button>
          </div>


        </section>

        <Skills />

        <Services />

        <Projects />

        <Contact />

        <Foot />
    </article>
  )
}

export default Home