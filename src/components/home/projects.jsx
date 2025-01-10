import React from 'react'
import resto1 from "../../assets/pics/resto1.jpg"
import resto2 from "../../assets/pics/resto2.jpg"
import resto3 from "../../assets/pics/resto3.jpg"
import resto4 from "../../assets/pics/resto4.jpg"
import chef from "../../assets/pics/chef.jpg"
import chef1 from "../../assets/pics/chef1.jpg"
import chef2 from "../../assets/pics/chef2.jpg"
import belle from "../../assets/pics/belle.jpg"
import mystic from "../../assets/pics/mystic.jpg"
import mystic1 from "../../assets/pics/mystic1.jpg"
import mystic2 from "../../assets/pics/mystic2.jpg"
import ProjectComp from './projectComp'

function Projects({projectRef}) {

 const projectList = [
    {
        img: [resto1, resto2, resto3, resto4],
        name: "Kans Resto", 
        descp: "An ecommerce restaurant website to display available menu and their relative prices", 
        link: "https://resto-kans.vercel.app/", 
        skills: "HTML, CSS, Javascript, React, Python, Django, Sqlite/Postgres"
    }, 
    {
      img: [chef, chef1, chef2],
      name: "Chef gods", 
      descp: "Landing page for a restaurant website", 
      link: "https://restaurant-website-one-sigma.vercel.app/",
      skills: "HTML, CSS/SCSS"

    },
    {
      img: [belle],
      name: "Belle", 
      descp: "Jewelry store Website", 
      link: "https://shop-cart-website-hng.vercel.app/", 
      skills: "HTML/CSS, Javascript, React"
      
    },
    {
      img: [mystic, mystic1, mystic2],
      name: "Mystic Reads", 
      descp: "Social Media Website for reading novels", 
      link: "https://mystic-reads.vercel.app/", 
      skills: "HTML/CSS, Javascript, Python, Flask, Postgres"
    },
 ]

 const projects = projectList.map((items, i) => <ProjectComp key={i} images={items.img} name={items.name} skill={items.skills} link={items.link} descp={items.descp}/>)

  return (
   <section ref={projectRef} className='min-h-[60vh] py-[2em] sm:px-[--pdx]'>
        <h2 className='sm:text-[2rem] text-[1.5rem] urba font-semibold text-center'>Some of My Projects</h2>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-[20px] mt-[20px]'>
          {projects}
        </div>

   </section>
  )
}

export default Projects