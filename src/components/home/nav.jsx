import React from 'react'
import { motion } from "framer-motion"

function Nav() {
  return (
    <div className='flex items-center justify-between text-[0.9rem] pop px-[3em] py-[1em] bg-[--gray] absolute top-0 w-full'>
        <ul className='flex items-center gap-[10px]'>
            <li><a href="#">israelshedrack913@gmail.com</a></li>
            <motion.button
            whileTap={{
              scale: 1.1
            }}

            whileHover={{
              scale: 1.1
            }}

            transition={{
              duration: 0.2
            }}
             className='p-[10px] bg-[--white] px-[30px] rounded-[2em]'>
              Copy
            </motion.button>
        </ul>

        <ul className='flex items-center gap-[20px] '>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href="">LinkedIn</a></li>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href="">Twitter</a></li>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href="">Whatsapp</a></li>
        </ul>
    </div>
  )
}

export default Nav