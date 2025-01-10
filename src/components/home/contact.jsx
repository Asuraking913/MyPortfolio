import React, { useContext } from 'react'
import { FaRegHandshake } from "react-icons/fa6";
import { motion } from "framer-motion"
import LinkContext from '../../utils/contextProvider';

function Contact() {

 const { whatsapp } = useContext(LinkContext)

  return (
    <section className='sm:min-h-[80vh] min-h-[60vh] flex flex-col items-center justify-center'>
      <div className='sm:w-[50%] px-[1em] flex flex-col justify-center gap-[20px] items-center sm:px-[10px]'>

        <motion.div
        initial={{
          scale: 0.5
        }}

        whileInView={{
          scale: 1
        }}

        transition={{
          duration: 0.4
        }}
         className='text-[4rem] p-[20px] rounded-full bg-[--white] border-[1px] border-[--gray]'>
          <FaRegHandshake />
        </motion.div>

        <motion.h2
        initial={{
          x: "-100px", 
          opacity: 0
        }}

        whileInView={{
          x: 0, 
          opacity: [0, 0, 1]
        }}

        transition={{
          duration: 0.4
        }}
         className='sm:text-[3rem] text-[2.5rem] urba font-semibold capitalize text-center'>Tell Me About Your Next Project</motion.h2>

        <div className='pop text-[0.9rem] flex gap-[20px]'>

          <motion.button
          initial={{
          scale: 0.5
          }}

          whileInView={{
            scale: 1
          }}

          whileHover={{
            scale: 1.15, 
          }}

          transition={{
            duration: 0.4
          }}
           className='bg-[--black] text-[--white] p-[15px] px-[20px] rounded-[2em]'>
            Email Me
          </motion.button>

          <motion.a
          href={`${whatsapp}`}
          initial={{
          scale: 0.5
          }}

          whileInView={{
            scale: 1
          }}

          whileHover={{
            scale: 1.15, 
          }}

          transition={{
            duration: 0.4
          }}
           className='bg-[--white] text-[--black] border-[1px]  border-[--black] p-[15px] px-[20px] rounded-[2em]'>
            WhatsApp
          </motion.a>

        </div>
      </div>
    </section>
  )
}

export default Contact