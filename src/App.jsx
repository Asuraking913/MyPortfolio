import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import { LinkProvider } from './utils/contextProvider'

function App() {
  useEffect(() => {
    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL
    if (!webhookUrl) return

    const ua = navigator.userAgent
    const browserMatch = ua.match(/(Chrome|Firefox|Safari|Edge|Opera)[\/\s](\d+)/)
    const browser = browserMatch ? browserMatch[1] : 'Unknown'
    const os = navigator.platform

    const message = [
      '👀 New Website Visitor',
      '',
      `🌐 Browser: ${browser} / ${os}`,
      `🗣 Language: ${navigator.language}`,
      `🖥 Screen: ${window.innerWidth}x${window.innerHeight}`,
      `📱 User Agent: ${ua}`,
      `⏰ Time: ${new Date().toISOString()}`,
    ].join('\n')

    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: message }),
    }).catch(() => {})
  }, [])

  return (
    <LinkProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </LinkProvider>
  )
}

export default App