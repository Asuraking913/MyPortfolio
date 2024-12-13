import React from 'react'
import { FaRegHandshake } from "react-icons/fa6";

function Contact() {
  return (
    <section className='sm:min-h-[80vh] min-h-[60vh] flex flex-col items-center justify-center'>
      <div className='sm:w-[50%] px-[1em] flex flex-col justify-center gap-[20px] items-center sm:px-[10px]'>

        <div className='text-[4rem] p-[20px] rounded-full bg-[--white] border-[1px] border-[--gray]'>
          <FaRegHandshake />
        </div>

        <h2 className='sm:text-[3rem] text-[2.5rem] urba font-semibold capitalize text-center'>Tell Me About Your Next Project</h2>

        <div className='pop text-[0.9rem] flex gap-[20px]'>

          <button className='bg-[--black] text-[--white] p-[15px] px-[20px] rounded-[2em]'>
            Email Me
          </button>

          <button className='bg-[--white] text-[--black] border-[1px]  border-[--black] p-[15px] px-[20px] rounded-[2em]'>
            WhatsApp
          </button>

        </div>
      </div>
    </section>
  )
}

export default Contact