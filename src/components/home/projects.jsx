import React from 'react'
import resto1 from "../../assets/pics/resto1.jpg"
import resto2 from "../../assets/pics/resto2.jpg"
import resto3 from "../../assets/pics/resto3.jpg"
import resto4 from "../../assets/pics/resto4.jpg"
import chef from "../../assets/pics/chef.jpg"
import chef1 from "../../assets/pics/chef1.jpg"
import chef2 from "../../assets/pics/chef2.jpg"
import belle from "../../assets/pics/belle.jpg"
import mystic from "../../assets/pics/mystic.jpg"
import mystic1 from "../../assets/pics/mystic1.jpg"
import mystic2 from "../../assets/pics/mystic2.jpg"
import ProjectComp from './projectComp'
import bot from "./../../assets/pics/bot.jpg"
import bot1 from "./../../assets/pics/bot1.jpg"
import web3 from "../../assets/pics/web3.jpg"
import { motion } from 'framer-motion'

function Projects({projectRef}) {

 const projectList = [
  {
        img: [web3],
        name: "TypeScript Dashboard", 
        descp: "Modern analytics dashboard with real-time data visualization and responsive design", 
        link: "https://dashboard-zmxy.vercel.app/", 
        skills: "React, TypeScript, TailwindCSS",
        category: "Web App"
  }, 
  {
        img: [bot1, bot],
        name: "Stock Tracker Bot", 
        descp: "Discord bot that fetches and displays live stock market data from Alpha Vantage API", 
        link: "", 
        skills: "Python, Discord.py, Alpha Vantage API",
        category: "Bot"
    }, 
    {
        img: [resto1, resto2, resto3, resto4],
        name: "Kans Resto", 
        descp: "Full-stack restaurant platform with menu management and ordering system", 
        link: "https://resto-kans.vercel.app/", 
        skills: "React, Django, PostgreSQL",
        category: "E-commerce"
    }, 
    {
      img: [chef, chef1, chef2],
      name: "Chef Gods", 
      descp: "Elegant landing page showcasing culinary excellence and restaurant ambiance", 
      link: "https://restaurant-website-one-sigma.vercel.app/",
      skills: "HTML, SCSS, JavaScript",
      category: "Landing Page"
    },
    {
      img: [belle],
      name: "Belle Jewelry", 
      descp: "Sleek e-commerce store with shopping cart and product showcase", 
      link: "https://shop-cart-website-hng.vercel.app/", 
      skills: "React, JavaScript, CSS",
      category: "E-commerce"
    },
    {
      img: [mystic, mystic1, mystic2],
      name: "Mystic Reads", 
      descp: "Social reading platform where users discover and share novels", 
      link: "https://mystic-reads.vercel.app/", 
      skills: "Flask, React, PostgreSQL",
      category: "Social Media"
    },
 ]

 const projects = projectList.map((items, i) => (
   <ProjectComp 
     key={i} 
     index={i}
     images={items.img} 
     name={items.name} 
     skill={items.skills} 
     link={items.link} 
     descp={items.descp}
     category={items.category}
   />
 ))

  return (
   <section ref={projectRef} className='min-h-[60vh] py-[80px] sm:py-[100px] px-[1.5em] sm:px-[2em] relative overflow-hidden'>
        
        {/* Background decorative elements */}
        <motion.div 
          className='absolute top-20 left-10 w-72 h-72 bg-[--black] opacity-[0.02] rounded-full blur-3xl pointer-events-none'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.03, 0.02]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className='max-w-[1400px] mx-auto relative z-10'>
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className='text-center mb-[60px] sm:mb-[80px]'>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='inline-block mb-[16px]'>
              <div className='pop px-[24px] py-[8px] bg-[--white] rounded-[50px] text-[0.9rem] font-semibold shadow-md border border-[--black] border-opacity-5'>
                Portfolio
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className='text-[2rem] sm:text-[3.5rem] urba font-bold mb-[16px] leading-[1.1] tracking-tight'>
              Featured Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='pop text-[0.95rem] sm:text-[1.05rem] text-[--black] opacity-70 max-w-[600px] mx-auto leading-[1.7]'>
              A selection of my recent work spanning web development, automation, and full-stack applications
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[24px] sm:gap-[32px]'>
            {projects}
          </div>

        </div>

   </section>
  )
}

export default Projects