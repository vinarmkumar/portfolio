import React from 'react'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Training from './sections/Training';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';


export default function App(){
  const [introDone,setIntroDone] = React.useState(false);
  return(
    <>
    {!introDone && <IntroAnimation onFinish={()=> setIntroDone(true)} />}

      {introDone &&(
   <div className='relative bg-black text-white overflow-x-hidden'>
    <ParticlesBackground />
    <CustomCursor />
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Training />
    <Certifications />
    <Education />
    <Testimonials />
    <Contact />

   </div>
   )}
   </>
  );
}