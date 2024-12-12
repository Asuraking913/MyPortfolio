import React from 'react'
import react from "../../assets/react.png"
import vercel from "../../assets/vercel.png"
import github from "../../assets/github.png"
import django from "../../assets/django.png"
import flask from "../../assets/flask.png"

function Skills() {
  return (
    <section className='flex justify-center'>
        <div className='flex items-center justify-center gap-[30px] '>
            <img src={flask} className='w-[250px] object-cover' alt="" />
            <img src={django} className='w-[250px] object-cover' alt="" />
            <img src={github} className='w-[250px] object-cover' alt="" />
            <img src={vercel} className='w-[250px] object-cover' alt="" />
        </div>
    </section>
  )
}

export default Skills