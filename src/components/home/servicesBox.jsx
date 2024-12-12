import React from 'react'
import { RiNewsLine } from "react-icons/ri";
import { FaGears } from "react-icons/fa6";
import { GiFarmer } from "react-icons/gi";




function ServiceBox({name, text, index}) {
  return (
    <div className='text-[0.9rem] flex flex-col gap-[10px]'>
        <i className='text-3xl'>
            { index === 0 ? <RiNewsLine /> : index === 2 ? <GiFarmer /> : <FaGears />}
        </i>

        <h2 className='urba font-bold'>{name}</h2>

        <p className='pop text-[0.8rem] w-[80%]'>{text}</p>
    </div>
  )
}

export default ServiceBox