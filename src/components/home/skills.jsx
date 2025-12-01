import React from 'react'
import react from "../../assets/react.png"
import vercel from "../../assets/vercel.png"
import github from "../../assets/github.png"
import django from "../../assets/django.png"
import flask from "../../assets/flask.png"
import { motion } from "framer-motion"

function Skills() {
  const skills = [
    { name: "Flask", image: flask },
    { name: "Django", image: django },
    { name: "React", image: react },
    { name: "GitHub", image: github },
    { name: "Vercel", image: vercel },
  ]

  const techSkills = [
    { 
      name: "Git", 
      icon: "📦",
      gradient: "from-[#F05032] to-[#E84E31]"
    },
    { 
      name: "Next.js", 
      icon: "▲",
      gradient: "from-[#000000] to-[#404040]"
    },
    { 
      name: "TailwindCSS", 
      icon: "🎨",
      gradient: "from-[#06B6D4] to-[#0EA5E9]"
    },
    { 
      name: "Redux", 
      icon: "🔄",
      gradient: "from-[#764ABC] to-[#593D88]"
    },
  ]

  const additionalSkills = [
    { 
      name: "Discord Bots", 
      icon: "🤖",
      gradient: "from-[#5865F2] to-[#7289DA]"
    },
    { 
      name: "Slack Integration", 
      icon: "💬",
      gradient: "from-[#4A154B] to-[#611f69]"
    },
    { 
      name: "Playwright", 
      icon: "🎭",
      gradient: "from-[#2EAD33] to-[#45a049]"
    },
    { 
      name: "Selenium", 
      icon: "🌐",
      gradient: "from-[#43B02A] to-[#00B300]"
    },
    { 
      name: "IMAP Automation", 
      icon: "📧",
      gradient: "from-[#EA4335] to-[#DB4437]"
    },
    { 
      name: "Python Automation", 
      icon: "🐍",
      gradient: "from-[#3776AB] to-[#FFD343]"
    },
  ]

  return (
    <section className='py-[80px] sm:py-[100px] px-[1.5em]'>
      <div className='max-w-[1200px] mx-auto'>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-[60px]'>
          <p className='pop text-[0.9rem] uppercase tracking-[0.15em] text-[--black] opacity-50 mb-[12px] font-semibold'>
            Technologies & Tools
          </p>
          <h2 className='urba text-[2.5rem] sm:text-[3.5rem] font-bold text-[--black] leading-[1.1]'>
            My Tech Stack
          </h2>
        </motion.div>

        {/* Main Tech Stack - Images */}
        <div className='flex flex-wrap items-center justify-center gap-[20px] sm:gap-[30px] mb-[50px]'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className='bg-[--white] rounded-[20px] p-[20px] shadow-md hover:shadow-xl transition-shadow duration-300 border border-[--black] border-opacity-5'>
              <img 
                src={skill.image} 
                className='w-[120px] sm:w-[180px] h-[120px] sm:h-[180px] object-contain' 
                alt={skill.name} 
              />
            </motion.div>
          ))}
        </div>

        {/* Frontend & Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-center mb-[40px]'>
          <h3 className='pop text-[1.5rem] sm:text-[2rem] font-bold text-[--black] mb-[8px]'>
            Frontend & Development Tools
          </h3>
          <p className='pop text-[0.95rem] text-[--black] opacity-60'>
            Modern frameworks and essential tools
          </p>
        </motion.div>

        {/* Tech Skills Cards */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-[16px] sm:gap-[20px] mb-[60px]'>
          {techSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className='group relative overflow-hidden bg-[--white] rounded-[20px] p-[24px] shadow-md hover:shadow-xl transition-all duration-300 border border-[--black] border-opacity-5 cursor-default'>
              
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300`} />
              
              <div className='relative z-10 text-center'>
                <div className='text-[2.5rem] mb-[12px]'>{skill.icon}</div>
                <h4 className='pop text-[0.95rem] sm:text-[1.05rem] font-semibold text-[--black] leading-[1.3]'>
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-center mb-[40px]'>
          <h3 className='pop text-[1.5rem] sm:text-[2rem] font-bold text-[--black] mb-[8px]'>
            Specializations
          </h3>
          <p className='pop text-[0.95rem] text-[--black] opacity-60'>
            Advanced automation and integration expertise
          </p>
        </motion.div>

        {/* Additional Skills - Cards */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-[16px] sm:gap-[20px]'>
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className='group relative overflow-hidden bg-[--white] rounded-[20px] p-[24px] shadow-md hover:shadow-xl transition-all duration-300 border border-[--black] border-opacity-5 cursor-default'>
              
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300`} />
              
              <div className='relative z-10'>
                <div className='text-[2.5rem] mb-[12px]'>{skill.icon}</div>
                <h4 className='pop text-[0.95rem] sm:text-[1.05rem] font-semibold text-[--black] leading-[1.3]'>
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills