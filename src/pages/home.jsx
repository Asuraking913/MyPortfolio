import React, { useRef } from 'react'
import Nav  from '../components/home/nav'
import image from "../assets/image.png"
import { motion } from "framer-motion"
import Skills from '../components/home/skills'
import Services from '../components/home/services'
import Contact from '../components/home/contact'
import Foot from '../components/home/foot'
import Projects from '../components/home/projects'

function Home() {

  const projectRef = useRef()

  return (
    <article className='relative'>
        <Nav />
        <section className='min-h-screen bg-[--gray] flex items-center justify-center w-full rounded-b-[2em] sm:rounded-b-[5em] relative overflow-hidden'>

          {/* Animated background elements */}
          <motion.div 
            className='absolute top-20 right-10 w-72 h-72 bg-[--black] opacity-[0.02] rounded-full blur-3xl pointer-events-none'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.02, 0.04, 0.02]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className='absolute bottom-20 left-10 w-96 h-96 bg-[--black] opacity-[0.02] rounded-full blur-3xl pointer-events-none'
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.02, 0.03, 0.02]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Floating decorative elements */}
          <motion.div
            className='absolute top-[15%] left-[10%] w-[80px] h-[80px] border-[2px] border-[--black] opacity-[0.08] rounded-[20px] pointer-events-none hidden sm:block'
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className='absolute bottom-[20%] right-[15%] w-[60px] h-[60px] border-[2px] border-[--black] opacity-[0.08] rounded-full pointer-events-none hidden sm:block'
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          <div className='flex items-start justify-center flex-col sm:flex-row sm:items-center gap-[40px] sm:gap-[80px] px-[1.5em] sm:px-[2em] py-16 sm:py-20 relative z-10 max-w-[1200px] mx-auto w-full'>

            {/* Left side - Image and info */}
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='flex flex-col items-center sm:items-start gap-[20px] sm:gap-[24px] w-full sm:w-[40%]'>
              
              <div className='relative'>
                <motion.figure
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                className='bg-[--white] rounded-[50%] p-[6px] shadow-lg hover:shadow-xl transition-shadow duration-300 relative group'>

                  <div className='absolute inset-0 rounded-[50%] bg-gradient-to-br from-transparent via-transparent to-[--black] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300' />

                  <img src={image} className='w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] object-cover object-top rounded-[50%] relative z-10' alt="" />
                  
                  {/* Decorative ring */}
                  <motion.div
                    className='absolute inset-[-8px] border-[2px] border-[--black] opacity-10 rounded-full pointer-events-none'
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.figure>

                {/* Status badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className='absolute top-[-10px] right-[5px] sm:top-[-15px] sm:right-[10px] bg-[--white] rounded-full px-[14px] py-[8px] shadow-lg border border-[--black] border-opacity-10 flex items-center gap-[6px] z-20'>
                  <motion.div
                    className='w-[8px] h-[8px] bg-green-500 rounded-full'
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                  <span className='pop text-[0.75rem] font-semibold text-[--black]'>Available</span>
                </motion.div>
              </div>

              <div className='text-center sm:text-left w-full'>
                <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='pop text-[1.5rem] sm:text-[2.2rem] font-bold text-[--black] mb-[6px]'>
                  Israel Shedrack
                </motion.h2>
                
                <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='pop text-[0.95rem] sm:text-[1rem] text-[--black] opacity-60 mb-[14px]'>
                  Product Designer & Developer
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='flex gap-[10px] justify-center sm:justify-start flex-wrap'>
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className='pop px-[14px] py-[6px] bg-[--white] rounded-[20px] text-[0.8rem] sm:text-[0.85rem] text-[--black] shadow-sm border border-[--black] border-opacity-10 cursor-default'>
                    5+ Years
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className='pop px-[14px] py-[6px] bg-[--white] rounded-[20px] text-[0.8rem] sm:text-[0.85rem] text-[--black] shadow-sm border border-[--black] border-opacity-10 cursor-default'>
                    50+ Projects
                  </motion.div>
                </motion.div>
              </div>

            </motion.div>

            {/* Right side - Main content */}
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className='flex flex-col gap-[24px] sm:gap-[28px] w-full sm:w-[60%]'>
              
              <div>
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex items-center gap-[10px] mb-[16px]'>
                  <motion.div 
                    className='w-[40px] h-[2px] bg-[--black] opacity-30'
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  />
                  <p className='pop text-[0.95rem] uppercase tracking-[0.15em] text-[--black] opacity-50 font-semibold'>
                    Welcome to my portfolio
                  </p>
                </motion.div>

                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className='urba text-[2rem] sm:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[--black] mb-[16px] sm:mb-[20px]'>
                  Crafting exceptional digital experiences
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='pop text-[0.95rem] sm:text-[1.05rem] leading-[1.7] text-[--black] opacity-70 mb-[24px] sm:mb-[32px]'>
                  I specialize in building products, brands, and digital experiences that combine beautiful design with seamless functionality. From concept to launch, I bring ideas to life.
                </motion.p>
              </div>

              {/* Stats row */}
              <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className='grid grid-cols-3 gap-[12px] sm:gap-[16px] mb-[8px]'>
                <motion.div 
                  whileHover={{ y: -3 }}
                  className='bg-[--white] rounded-[14px] sm:rounded-[16px] p-[12px] sm:p-[16px] shadow-sm border border-[--black] border-opacity-5'>
                  <p className='pop text-[1.4rem] sm:text-[1.8rem] font-bold text-[--black] mb-[2px] sm:mb-[4px]'>50+</p>
                  <p className='pop text-[0.7rem] sm:text-[0.8rem] text-[--black] opacity-50'>Projects Done</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -3 }}
                  className='bg-[--white] rounded-[14px] sm:rounded-[16px] p-[12px] sm:p-[16px] shadow-sm border border-[--black] border-opacity-5'>
                  <p className='pop text-[1.4rem] sm:text-[1.8rem] font-bold text-[--black] mb-[2px] sm:mb-[4px]'>5+</p>
                  <p className='pop text-[0.7rem] sm:text-[0.8rem] text-[--black] opacity-50'>Years Exp</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -3 }}
                  className='bg-[--white] rounded-[14px] sm:rounded-[16px] p-[12px] sm:p-[16px] shadow-sm border border-[--black] border-opacity-5'>
                  <p className='pop text-[1.4rem] sm:text-[1.8rem] font-bold text-[--black] mb-[2px] sm:mb-[4px]'>100%</p>
                  <p className='pop text-[0.7rem] sm:text-[0.8rem] text-[--black] opacity-50'>Satisfaction</p>
                </motion.div>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className='flex flex-wrap gap-[12px] justify-center sm:justify-start'>
                <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className='pop text-[0.9rem] sm:text-[0.95rem] p-[14px] px-[32px] sm:p-[16px] sm:px-[36px] bg-[--black] text-[--white] rounded-[50px] font-semibold shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group' 
                onClick={() => projectRef.current.scrollIntoView({behavior: "smooth"})}>
                  <span className='relative z-10'>View Projects</span>
                  <motion.div 
                    className='absolute inset-0 bg-gradient-to-r from-transparent via-[--white] to-transparent opacity-20'
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                <motion.a
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className='pop text-[0.9rem] sm:text-[0.95rem] p-[14px] px-[32px] sm:p-[16px] sm:px-[36px] bg-[--white] text-[--black] rounded-[50px] font-semibold shadow-md hover:shadow-lg transition-all duration-300 border border-[--black] border-opacity-10'>
                  Get in Touch
                </motion.a>
              </motion.div>

            </motion.div>

          </div>

        </section>

        <Skills />

        <Services />

        <Projects projectRef={projectRef}/>

        <Contact />

        <Foot />
    </article>
  )
}

export default Home