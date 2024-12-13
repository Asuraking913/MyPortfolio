import React from 'react'

function Foot() {
  return (
    <section className='sm:min-h-[10vh] py-[1em] border-t-[1px] border-t-[--black] flex sm:justify-between justify-center sm:px-[--pdx] px-[1em] items-center pop text-[0.9rem]'>
        <p>
            2024 All Rights Reserved
        </p>

        <ul className='sm:flex hidden items-center gap-[20px] '>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href="">LinkedIn</a></li>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href="">Twitter</a></li>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href="">Whatsapp</a></li>
        </ul>
    </section>
  )
}

export default Foot