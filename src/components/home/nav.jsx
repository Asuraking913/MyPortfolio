import React, { useContext, useState } from 'react'
import { motion } from "framer-motion"
import { RiMenu3Line } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useInterval } from 'react-use';
import LinkContext from '../../utils/contextProvider';




function Nav() {

  const [nav, setNav] = useState(false)
  const [copied, setCopied] = useState(false)

  const email = "israelshedrack913@gmail.com"
  const {twitter, whatsapp, linkedIn} = useContext(LinkContext)

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(email)
    setCopied(!copied)
  }

  useInterval(() => {

    if(copied) {
      setCopied(false)
    }
     
  }, 3000, [copied])

  console.log(twitter, whatsapp, linkedIn)

  return (
    <div className='flex sm:items-center items-start justify-between text-[0.9rem] pop sm:px-[--pdx] px-[1em] py-[1em] bg-[--gray] absolute top-0 w-full'>

        { copied && 
          <motion.p
          initial={{
            x: "200px",
          }}

          animate={{
            x: 0
          }}

          transition={{
            duration: 0.5
          }}

          exit={{
            x: "200px"
          }}
           className='absolute w-[250px] p-[10px] rounded-[5px] text-center right-0 top-0 m-[10px] bg-[--white]'>email copied successfully
           </motion.p>
         }

        <ul className='flex sm:items-center sm:gap-[10px] gap-[5px] sm:flex-row flex-col items-start'>
            <li><a href="#">israelshedrack913@gmail.com</a></li>
              <motion.button

              onClick={() => copyToClipBoard()}
              whileTap={{
                scale: 1.1
              }}

              whileHover={{
                scale: 1.1
              }}

              transition={{
                duration: 0.2
              }}
               className='sm:p-[10px] p-[5px] px-[20px] bg-[--white] sm:px-[30px] rounded-[2em]'>
                Copy
              </motion.button>
        </ul>

        <ul className='sm:flex hidden items-center gap-[20px] '>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href={`${linkedIn}`}>LinkedIn</a></li>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href={`${twitter}`}>Twitter</a></li>
            <li className='sm:hover:scale-110 duration-[0.5s] sm:hover:underline'><a href={`${whatsapp}`}>Whatsapp</a></li>
        </ul>


        <motion.button 
        onClick={() => setNav(t => !nav)}
        whileTap={{
          scale: 1.2
        }}
         className='text-4xl sm:hidden'>
          <RiMenu3Line />
        </motion.button>


        {

          nav &&
          
          <motion.ul

          initial={{
            y: "-200px"
          }}

          transition={{
            duration: 1.2
          }}

          animate={{
            y: 0
          }}

           className='flex flex-col text-4xl gap-[20px] fixed  right-0 top-0 p-[10px] bg-[--white] rounded-[5px]'>
          <motion.li
          
          whileTap={{
            scale:1.2
          }}
           className='text-blue-500'><FaLinkedin /></motion.li>
          <motion.li
          whileTap={{
            scale:1.2
          }}
           className='text-green-500'><FaWhatsapp /></motion.li>
          <motion.li
          whileTap={{
            scale:1.2
          }}
          ><FaXTwitter /></motion.li>
        </motion.ul>
        
        }
    </div>
  )
}

export default Nav