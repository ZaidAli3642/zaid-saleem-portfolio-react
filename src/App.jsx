import { useLayoutEffect } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/projects/Projects'
import initScrollReveal from './utils/scrollReveal/initScrollReveal'

function App() {
  useLayoutEffect(() => {
    initScrollReveal()
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
