import React from 'react'
import Nav  from '../components/home/nav'
import image from "../assets/image.jpg"

function Home() {
  return (
    <article className='relative'>
        <Nav />
        <section className='h-screen bg-[--gray] flex items-center justify-center w-full'>

          <div className='flex items-center justify-center flex-col w-[50%] gap-[20px]'>

            <figure className='bg-[--white] rounded-[50%] p-[5px] shadow-[--black]'>
              <img src={image} className='w-[150px] h-[150px] object-cover rounded-[50%]' alt="" />
            </figure>

            <h1 className='text-[3rem] urba text-center font-semibold capitalize'>Crafting exceptional digital products, brands, and experiences.</h1>
            
            <button className='pop text-[0.9rem] p-[10px] px-[30px] bg-[--black] text-[--white] rounded-[20px]'>
              Latest Projects
            </button>
          </div>


        </section>
    </article>
  )
}

export default Home