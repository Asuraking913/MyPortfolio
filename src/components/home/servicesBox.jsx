import React from 'react'
import { RiNewsLine } from "react-icons/ri";


function ServiceBox({name, text}) {
  return (
    <div className='text-[0.9rem] flex flex-col gap-[10px]'>
        <i className='text-3xl'>
            <RiNewsLine />
        </i>

        <h2 className='urba font-bold'>{name}</h2>

        <p className='pop text-[0.8rem] w-[80%]'>{text}</p>
    </div>
  )
}

export default ServiceBox