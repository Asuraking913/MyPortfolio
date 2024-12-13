import React from 'react'
import react from "../../assets/react.png"
import vercel from "../../assets/vercel.png"
import github from "../../assets/github.png"
import django from "../../assets/django.png"
import flask from "../../assets/flask.png"
import { motion } from "framer-motion"

function Skills() {
  return (
    <section className='flex justify-center'>
        <div className='flex items-center justify-center gap-[30px] '>
            <motion.img
            initial={{
              opacity: 0
            }}

            whileInView={{
              opacity: [0, 1]
            }}

            transition={{
              duration: 1.5
            }}
             src={flask} className='w-[250px] object-cover' alt="" />
            <motion.img
            initial={{
              opacity: 0
            }}

            whileInView={{
              opacity: [0, 1]
            }}

            transition={{
              duration: 1.5
            }}
             src={django} className='w-[250px] object-cover' alt="" />
            <motion.img
            initial={{
              opacity: 0
            }}

            whileInView={{
              opacity: [0, 1]
            }}

            transition={{
              duration: 1.5
            }}
             src={github} className='w-[250px] object-cover' alt="" />
            <motion.img
            initial={{
              opacity: 0
            }}

            whileInView={{
              opacity: [0, 1]
            }}

            transition={{
              duration: 1.5
            }}
             src={vercel} className='w-[250px] object-cover' alt="" />
        </div>
    </section>
  )
}

export default Skills