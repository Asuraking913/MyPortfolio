import React, { useContext } from 'react'
import LinkContext from '../../utils/contextProvider'
import { motion } from 'framer-motion'

function Foot() {

  const { whatsapp, twitter, linkedIn } = useContext(LinkContext)

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', url: linkedIn, icon: '💼' },
    { name: 'Twitter', url: twitter, icon: '🐦' },
    { name: 'WhatsApp', url: whatsapp, icon: '💬' }
  ]

  return (
    <footer className='border-t border-[--black] border-opacity-10 bg-[--gray] relative overflow-hidden'>
      
      {/* Subtle background gradient */}
      <div className='absolute inset-0 bg-gradient-to-t from-[--black] via-transparent to-transparent opacity-[0.02] pointer-events-none' />

      <div className='relative z-10 max-w-[1400px] mx-auto'>
        
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-[40px] sm:gap-[60px] px-[1.5em] sm:px-[2em] py-[60px] sm:py-[80px]'>
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex flex-col gap-[16px]'>
            <h3 className='urba text-[1.8rem] sm:text-[2rem] font-bold text-[--black]'>
              Israel Shedrack
            </h3>
            <p className='pop text-[0.9rem] sm:text-[0.95rem] text-[--black] opacity-60 leading-[1.7] max-w-[300px]'>
              Building digital experiences that combine beautiful design with powerful functionality.
            </p>
            
            {/* Availability Badge */}
            <div className='flex items-center gap-[8px] mt-[8px]'>
              <motion.div
                className='w-[8px] h-[8px] bg-green-500 rounded-full'
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
              <span className='pop text-[0.8rem] text-[--black] opacity-60'>
                Available for projects
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='flex flex-col gap-[16px]'>
            <h4 className='pop text-[1rem] font-semibold text-[--black] mb-[8px]'>
              Quick Links
            </h4>
            <ul className='flex flex-col gap-[12px]'>
              <li>
                <motion.a
                  href="#home"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className='pop text-[0.9rem] text-[--black] opacity-60 hover:opacity-100 transition-opacity duration-300'>
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#services"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className='pop text-[0.9rem] text-[--black] opacity-60 hover:opacity-100 transition-opacity duration-300'>
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#projects"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className='pop text-[0.9rem] text-[--black] opacity-60 hover:opacity-100 transition-opacity duration-300'>
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className='pop text-[0.9rem] text-[--black] opacity-60 hover:opacity-100 transition-opacity duration-300'>
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col gap-[16px]'>
            <h4 className='pop text-[1rem] font-semibold text-[--black] mb-[8px]'>
              Connect
            </h4>
            <ul className='flex flex-col gap-[12px]'>
              {socialLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.url}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className='pop text-[0.9rem] text-[--black] opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center gap-[8px]'>
                    <span className='text-[1.2rem]'>{link.icon}</span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='border-t border-[--black] border-opacity-10 px-[1.5em] sm:px-[2em] py-[24px]'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-[16px] sm:gap-0'>
            
            <p className='pop text-[0.85rem] text-[--black] opacity-60 text-center sm:text-left'>
              © {currentYear} Israel Shedrack. All rights reserved.
            </p>

            <div className='flex items-center gap-[20px]'>
              <motion.a
                href="#privacy"
                whileHover={{ y: -2 }}
                className='pop text-[0.85rem] text-[--black] opacity-60 hover:opacity-100 transition-opacity duration-300'>
                Privacy
              </motion.a>
              <motion.a
                href="#terms"
                whileHover={{ y: -2 }}
                className='pop text-[0.85rem] text-[--black] opacity-60 hover:opacity-100 transition-opacity duration-300'>
                Terms
              </motion.a>
            </div>

          </div>
        </motion.div>

      </div>

    </footer>
  )
}

export default Foot