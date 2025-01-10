import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import { LinkProvider } from './utils/contextProvider'

function App() {
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