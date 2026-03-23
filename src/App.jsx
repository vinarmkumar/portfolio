import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';

const Home = lazy(() => import('./sections/Home'));
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Training = lazy(() => import('./sections/Training'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Education = lazy(() => import('./sections/Education'));
const Contact = lazy(() => import('./sections/Contact'));

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);
  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <div className='relative bg-black text-white overflow-x-hidden'>
          <ParticlesBackground />
          <CustomCursor />
          <Navbar />
          <Suspense fallback={<div className="h-screen w-full bg-black"></div>}>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Training />
            <Certifications />
            <Education />
            <Contact />
          </Suspense>

        </div>
      )}
    </>
  );
}