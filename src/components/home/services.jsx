import React from 'react'
import ServiceBox from './servicesBox'
import { motion } from 'framer-motion'

function Services() {

    const services = [
        {
            name: "Frontend Web Development", 
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum ipsam, enim laboriosam cum nihil modi incidunt nostrum magnam sit vitae inventore veniam cumque tempore error alias quas dolor ut."
        },
        {
            name: "Backend Web Development", 
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum ipsam, enim laboriosam cum nihil modi incidunt nostrum magnam sit vitae inventore veniam cumque tempore error alias quas dolor ut."
        },
        {
            name: "Web Scraping", 
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum ipsam, enim laboriosam cum nihil modi incidunt nostrum magnam sit vitae inventore veniam cumque tempore error alias quas dolor ut."
        },
    ]

    const servicesList = services.map((items, i) => (<ServiceBox key={i} index={i}  name={items.name} text={items.text}/>))

  return (
    <section className='min-h-[80vh] bg-[--gray] rounded-t-[1em] sm:rounded-t-[4em] sm:rounded-b-[4em] rounded-b-[1em] flex items-center justify-center flex-col sm:px-[--pdx] px-[1em] gap-[40px] sm:gap-[70px] mt-[20px]'>
        <div className='sm:w-[50%] py-[1em] px-[1em] h-[80%] flex flex-col items-center gap-[20px]'>
            <motion.h2
            initial={{
                x: "-2em", 
                opacity: 0
            }}

            transition={{
                duration: 1.2 
            }}

            whileInView={{
                x: 0, 
                opacity: [0, 1]
            }}
             className='sm:text-[2rem] text-[1.5rem] urba font-semibold text-center'>Collaborate with me to bring your ideas to life</motion.h2>

            <motion.h3
            initial={{
                rotate: "-10deg"
            }}

            transition={{
                duration: 1.2
            }}

            whileInView={{
                rotate: ["10deg", "-10deg"]
            }}
             className='urba sm:p-[10px] p-[5px] sm:text-[1rem] text-[0.9rem] sm:px-[30px] px-[20px] bg-[--white] rounded-[2em] font-semibold'>
                Services
            </motion.h3>
            
        </div>

        <div className='flex items-center justify-center gap-[20px] sm:justify-between w-full sm:px-[10%] sm:flex-row flex-col'>
            {servicesList}
        </div>
    </section>
  )
}

export default Services