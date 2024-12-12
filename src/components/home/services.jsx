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
    <section className='min-h-[80vh] bg-[--gray] rounded-t-[4em] rounded-b-[4em] flex items-center justify-center flex-col px-[--pdx] gap-[70px] mt-[20px]'>
        <div className='w-[50%] h-[80%] flex flex-col items-center gap-[20px]'>
            <h2 className='text-[2rem] urba font-semibold text-center'>Collaborate with me to bring your ideas to life</h2>

            <motion.h3
            initial={{
                rotate: "-10deg"
            }}
             className='urba p-[10px] px-[30px] bg-[--white] rounded-[2em] font-semibold'>Services</motion.h3>

            
        </div>

        <div className='flex items-center justify-between w-full px-[10%]'>
            {servicesList}
        </div>
    </section>
  )
}

export default Services