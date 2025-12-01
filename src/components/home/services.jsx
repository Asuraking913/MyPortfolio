import React from 'react'
import ServiceBox from './servicesBox'
import { motion } from 'framer-motion'

function Services() {

    const services = [
        {
            name: "Frontend Development", 
            text: "Building responsive, modern interfaces with React, Next.js, TypeScript, and TailwindCSS. I transform designs into pixel-perfect, performant web applications that work seamlessly across all devices.",
            icon: "💻",
            gradient: "from-[#667eea] to-[#764ba2]"
        },
        {
            name: "Backend Development", 
            text: "Creating robust APIs and server-side solutions using Django and Flask. I design scalable architectures with PostgreSQL and MySQL, handling everything from authentication to complex data operations.",
            icon: "⚙️",
            gradient: "from-[#f093fb] to-[#f5576c]"
        },
        {
            name: "Bot Development", 
            text: "Developing intelligent bots for Discord, Slack, and Telegram that automate workflows, manage communities, and integrate seamlessly with your existing tools. From moderation to custom commands.",
            icon: "🤖",
            gradient: "from-[#4facfe] to-[#00f2fe]"
        },
        {
            name: "Browser Automation", 
            text: "Automating web interactions with Playwright and Selenium for testing, scraping, and workflow automation. I build reliable scripts that handle complex scenarios and save hours of manual work.",
            icon: "🎭",
            gradient: "from-[#43e97b] to-[#38f9d7]"
        },
        {
            name: "Email Automation", 
            text: "Creating Python-based IMAP solutions that automatically process emails, extract data, send responses, and integrate with other systems. Perfect for streamlining communication workflows.",
            icon: "📧",
            gradient: "from-[#fa709a] to-[#fee140]"
        },
        {
            name: "Python Automation", 
            text: "Building custom automation solutions that eliminate repetitive tasks. From data processing to API integrations, I create scripts that work 24/7 to boost your productivity.",
            icon: "🐍",
            gradient: "from-[#30cfd0] to-[#330867]"
        },
    ]

    const servicesList = services.map((items, i) => (<ServiceBox key={i} index={i} name={items.name} text={items.text} icon={items.icon} gradient={items.gradient}/>))

  return (
    <section className='min-h-[80vh] bg-[--gray] rounded-t-[2em] sm:rounded-t-[5em] sm:rounded-b-[5em] rounded-b-[2em] flex items-center justify-center flex-col px-[1.5em] sm:px-[2em] gap-[40px] sm:gap-[60px] mt-[40px] py-[60px] sm:py-[80px] relative overflow-hidden'>
        
        {/* Background decorative elements */}
        <motion.div 
          className='absolute top-10 right-10 w-64 h-64 bg-[--black] opacity-[0.02] rounded-full blur-3xl pointer-events-none'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Header Section */}
        <div className='max-w-[800px] flex flex-col items-center gap-[20px] text-center relative z-10'>
            
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className='relative'>
              <motion.h3
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className='urba p-[10px] px-[30px] bg-[--white] rounded-[50px] font-semibold text-[0.95rem] sm:text-[1rem] shadow-md border border-[--black] border-opacity-5 inline-block'>
                  Services
              </motion.h3>
            </motion.div>

            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className='text-[2rem] sm:text-[3rem] urba font-bold leading-[1.1] tracking-tight'>
              Let's bring your ideas to life
            </motion.h2>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className='pop text-[1rem] sm:text-[1.1rem] text-[--black] opacity-70 leading-[1.7] max-w-[600px]'>
              From concept to deployment, I deliver solutions that combine technical excellence with creative problem-solving
            </motion.p>
            
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[24px] w-full max-w-[1200px] relative z-10'>
            {servicesList}
        </div>
    </section>
  )
}

export default Services