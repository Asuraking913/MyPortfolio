import React, { useContext } from 'react'
import { FaRegHandshake } from "react-icons/fa6";
import { motion } from "framer-motion"
import LinkContext from '../../utils/contextProvider';

function Contact() {

 const { whatsapp } = useContext(LinkContext)

  return (
    <section className='min-h-[80vh] sm:min-h-[90vh] flex flex-col items-center justify-center px-[1.5em] sm:px-[2em] py-[10px] sm:py-[100px] relative overflow-hidden'>
      
      {/* Background decorative elements */}
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

      <div className='max-w-[700px] w-full flex flex-col justify-center gap-[32px] items-center relative z-10'>

        {/* Icon */}
        <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className='relative group'>
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className='text-[3.5rem] sm:text-[4.5rem] p-[24px] sm:p-[32px] rounded-full bg-[--white] shadow-lg border border-[--black] border-opacity-5 group-hover:shadow-xl transition-shadow duration-300'>
            <FaRegHandshake />
          </motion.div>
          
          {/* Decorative ring */}
          <motion.div
            className='absolute inset-[-8px] border-[2px] border-[--black] opacity-10 rounded-full pointer-events-none'
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='inline-block'>
          <div className='pop px-[24px] py-[8px] bg-[--white] rounded-[50px] text-[0.85rem] sm:text-[0.9rem] font-semibold shadow-md border border-[--black] border-opacity-5'>
            Let's Work Together
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className='text-[2rem] sm:text-[3.5rem] urba font-bold capitalize text-center leading-[1.1] tracking-tight'>
          Tell me about your next project
        </motion.h2>

        {/* Subtext */}
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className='pop text-[0.95rem] sm:text-[1.05rem] text-[--black] opacity-70 text-center leading-[1.7] max-w-[500px]'>
          Whether you have a question or just want to say hi, my inbox is always open. I will get back to you as soon as possible!
        </motion.p>

        {/* Buttons */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className='pop text-[0.9rem] sm:text-[0.95rem] flex flex-wrap gap-[12px] sm:gap-[16px] justify-center'>

          <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className='bg-[--black] text-[--white] p-[14px] px-[32px] sm:p-[16px] sm:px-[40px] rounded-[50px] font-semibold shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group'>
            <span className='relative z-10'>Email Me</span>
            <motion.div 
              className='absolute inset-0 bg-gradient-to-r from-transparent via-[--white] to-transparent opacity-20'
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          <motion.a
          href={whatsapp}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className='bg-[--white] text-[--black] border border-[--black] border-opacity-10 p-[14px] px-[32px] sm:p-[16px] sm:px-[40px] rounded-[50px] font-semibold shadow-md hover:shadow-lg transition-all duration-300'>
            WhatsApp
          </motion.a>

        </motion.div>

        {/* Social proof / availability indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='flex items-center gap-[8px] mt-[12px]'>
          <motion.div
            className='w-[10px] h-[10px] bg-green-500 rounded-full'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <span className='pop text-[0.85rem] text-[--black] opacity-60'>
            Available for new projects
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact