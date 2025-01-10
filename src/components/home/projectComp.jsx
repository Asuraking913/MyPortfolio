import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { FaTimes } from 'react-icons/fa'

function ProjectComp({images, name, descp, link, skill}) {

  const [moreImages, setMoreImages] = useState(false)
  const imagesList = images.map((items, i) => 
  <SwiperSlide
  key={i}
  >
    <div className='max-h-[400px] overflow-scroll hide-scrollbar'>
      <img className='sm:w-[600px] w-[100%] object-cover ' src={items} alt="" />
    </div>
  </SwiperSlide>
  )

  const screenWidth = window.innerWidth


  return (


    <div  className='flex min-h-[280px] flex-col items-start p-[8px] gap-[5px] bg-[#e2e1de67] rounded-[5px]'>
        <div className=''>
            <img src={images[0]} alt="" />
        </div>
        
        <div className='flex flex-col'>
          <h3 className='urba sm:text-[2rem] text-[1.5rem] font-semibold'>{name}</h3>
          <p className='pop sm:text-[0.9rem] text-[0.8rem]'>{descp}</p>
        </div>

        <p className='pop sm:text-[0.9rem] text-[0.8rem]'><span className='font-bold'>Skills Required:</span> {skill}</p>


        <div className='flex items-center justify-between w-full'>
          <Link to={`${link}`} className='pop sm:text-[0.9rem] text-[0.8rem] underline sm:hover:opacity-60 sm:w-full w-[80%]'>
            {link}
          </Link>

          <button onClick={() => {setMoreImages(prev => true)}} className='pop sm:text-[0.9rem] p-[8px] sm:p-[10px] bg-[--black] text-[--white] rounded-[5px] sm:hover:opacity-60 sm:hover:scale-105 duration-[0.2s]'>
            Images
          </button>
        </div>


      {
        moreImages &&

        <div className='fixed top-0 left-0 h-screen w-full bg-[#00000057] flex items-center justify-center sm:px-[--pdx] px-[10px]'>
          
          <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={images.length > 1 ? screenWidth < 480 ? 1 : 2 : 1}
              
              loop = {true}
              // autoplay = {{delay: 4500}}
              navigation = {true}
              pagination = {{clickable: true}}
              className='w-[95%] z-20'
              >
                {imagesList}
          </Swiper>

          <button onClick={() => setMoreImages(false)} className='fixed top-[80%] text-[4rem] text-[--white]'>
            <FaTimes />
          </button>

        </div>
      }


    </div>
  )
}

export default ProjectComp