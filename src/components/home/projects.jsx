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

function Projects() {

 const projectList = [
    {
        img: [resto1, resto2, resto3, resto4],
        name: "Kans Resto", 
        descp: "An ecommerce restaurant website to display available menu and their relative prices", 
        link: "resto"
    }, 
    {
      img: [chef, chef1, chef2],
      name: "Chef gods", 
      descp: "Landing page for a restaurant website", 
      link: "chef"
    },
    {
      img: [belle],
      name: "Belle", 
      descp: "Jewelry store Website", 
      link: "belle"
    },
    {
      img: [],
      name: "Mystic Reads", 
      descp: "Social Media Website for reading novels", 
      link: "mystic"
    },
 ]

  return (
   <section className='min-h-[60vh] py-[2em]'>
        <h2 className='sm:text-[2rem] text-[1.5rem] urba font-semibold text-center'>Some of My Projects</h2>

        <div>

        </div>
   </section>
  )
}

export default Projects