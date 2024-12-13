import React from 'react'
import { motion } from "framer-motion"
import { IoMdMenu } from "react-icons/io";


function Nav() {
  return (
    <div className='flex sm:items-center items-start justify-between text-[0.9rem] pop sm:px-[--pdx] px-[1em] py-[1em] bg-[--gray] absolute top-0 w-full'>
        <ul className='flex sm:items-center sm:gap-[10px] gap-[5px] sm:flex-row flex-col items-start'>
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
               className='sm:p-[10px] p-[5px] px-[20px] bg-[--white] sm:px-[30px] rounded-[2em]'>
                Copy
              </motion.button>
        </ul>

        <ul className='sm:flex hidden items-center gap-[20px] '>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href="">LinkedIn</a></li>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href="">Twitter</a></li>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href="">Whatsapp</a></li>
        </ul>


        <button onClick={() => console.log('event')} className='text-4xl'>
          <IoMdMenu />
        </button>
    </div>
  )
}

export default Nav