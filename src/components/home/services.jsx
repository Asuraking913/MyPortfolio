import React from 'react'
import ServiceBox from './servicesBox'
import { motion } from 'framer-motion'

function Services() {

    const services = [
        {
            name: "Frontend Web Development", 
            text: "I have proven track record in creating intuitive user interfaces that are responsive and functional to devices of various types. With technologies such as HTML, CSS/SCSS, Javascript Reactjs, Typescript and TailwindCSS. i am able to create modern web site designs, collaborate with UI/UX designers bring their design ideas to life."
        },
        {
            name: "Backend Web Development", 
            text: "My skills set also extends to backend development, where i leverage python to build backend APIs using Django and Flask.Using Flask i have built full stack applications using React for the frontend and Flask for the backend. I am able to create API enpoints with flask that perform CRUD operations on the relational database systems like MySQL and PostgreSQL using Flask SQLAlchemy as an object relationaly mapper.   "
        },
        {
            name: "Automated Bot Development", 
            text: "I have experience in developing automated bots for platforms like Discord, Telegram, and Slack using Python. Leveraging frameworks like Discord.py, Telethon, and Slack SDK, I have built bots that handle tasks such as real-time message processing, user engagement automation, API integrations, and custom command execution. My bots are designed to be efficient, scalable, and secure, ensuring seamless communication and automation across various platforms."
        },
    ]

    const servicesList = services.map((items, i) => (<ServiceBox key={i} index={i}  name={items.name} text={items.text}/>))

  return (
    <section className='min-h-[80vh] bg-[--gray] rounded-t-[1em] sm:rounded-t-[4em] sm:rounded-b-[4em] rounded-b-[1em] flex items-center justify-center flex-col sm:px-[--pdx] px-[1em] gap-[20px] sm:gap-[70px] mt-[20px] py-[20px]'>
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

        <div className='flex items-center justify-center gap-[20px] sm:justify-center w-full sm:px-[10%] sm:flex-row flex-col'>
            {servicesList}
        </div>
    </section>
  )
}

export default Services