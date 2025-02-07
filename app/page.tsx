import About from '@/app/ui/about'
import Skills from './ui/skills'
import Work from './ui/work'
import Contact from './ui/contact'
import Hero from './ui/hero'

export default function Home() {


  return (
    <div className=''>
      <p className='text-xl ease'>This is where main content will be</p>
      <br />
      <Hero />
      <br />
      <Skills />
      <br />
      <Work />
      <br />
      <About />
      <br />
      <Contact />
    </div>
  )
}
