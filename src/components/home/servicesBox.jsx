import React from 'react'
import { RiNewsLine } from "react-icons/ri";
import { FaGears } from "react-icons/fa6";
import { GiFarmer } from "react-icons/gi";
import { motion } from "framer-motion"




function ServiceBox({name, text, index}) {
  return (
    <motion.div
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
     className='text-[0.9rem] flex flex-col sm:items-start items-center gap-[10px] w-full'>
        <i className='text-3xl'>
            { index === 0 ? <RiNewsLine /> : index === 2 ? <GiFarmer /> : <FaGears />}
        </i>

        <h2 className='urba font-bold'>{name}</h2>

        <p className='pop text-[0.8rem] sm:w-[90%] sm:text-start text-center'>{text}</p>
    </motion.div>
  )
}

export default ServiceBox