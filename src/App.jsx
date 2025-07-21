import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/custom/NavBar'
import Banner from './components/custom/Banner'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/custom/Skills'
import Projects from './components/custom/Projects'
import Footer from './components/custom/Footer'
import Qualification from './components/custom/Qualification'
import BookRenderer from './components/custom/BookSlider/BookRenderer'
import { Analytics } from '@vercel/analytics/react';



function App() {
  const [count, setCount] = useState(0)
  const [hideNavbar, setHideNavbar] = useState(false);
  const bookRef = useRef();

  useEffect(() => {
    if (!bookRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide navbar when BookRenderer is at least 50% visible
        setHideNavbar(entry.isIntersecting && entry.intersectionRatio >= 0.5);
      },
      {
        threshold: [0, 0.5, 1], // trigger at 0%, 50%, 100%
      }
    );

    observer.observe(bookRef.current);

    return () => {
      observer.disconnect();
    };
  }, [bookRef]);

  return (
    <div>
      <Analytics mode="production" />
      {!hideNavbar && <NavBar />}
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <BookRenderer
        onHoverStart={() => setHideNavbar(true)}
        onHoverEnd={() => setHideNavbar(false)}
        containerRef={bookRef}
      />      
      <Qualification></Qualification>
      <Footer></Footer>
    </div>
  )
}

export default App
