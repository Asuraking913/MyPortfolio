import React from 'react'

function ProjectComp({images, name, descp, link}) {
  return (
    <div className='flex h-[450px] shadow-sm shadow-[--black] rounded-[.8px]'>
        <div className=''>
            <img src={images[0]} alt="" />
        </div>
    </div>
  )
}

export default ProjectComp