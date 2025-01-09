import React from 'react'
import { Link } from 'react-router-dom'

function ProjectComp({images, name, descp, link, skill}) {
  return (
    <div className='flex min-h-[280px] flex-col items-start p-[4px] gap-[5px] bg-[#e2e1de67] rounded-[5px]'>
        <div className=''>
            <img src={images[0]} alt="" />
        </div>
        
        <div className='flex flex-col'>
          <h3 className='urba sm:text-[2rem] text-[1.5rem] font-semibold'>{name}</h3>
          <p className='pop text-[0.9rem]'>{descp}</p>
        </div>

        <p className='pop text-[0.9rem]'><span className='font-bold'>Skills Required:</span> {skill}</p>


        <div className='flex items-center justify-between w-full'>
          <Link to={"/"} className='pop text-[0.9rem] underline sm:hover:opacity-60'>
            {link}
          </Link>

          <button className='pop text-[0.9rem] p-[10px] bg-[--black] text-[--white] rounded-[2px] sm:hover:opacity-60 sm:hover:scale-105 duration-[0.2s]'>
            more images
          </button>
        </div>
    </div>
  )
}

export default ProjectComp