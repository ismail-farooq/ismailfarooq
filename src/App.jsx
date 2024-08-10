import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/custom/NavBar'
import Banner from './components/custom/Banner'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/custom/Skills'
import Projects from './components/custom/Projects'
import Footer from './components/custom/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}

export default App
