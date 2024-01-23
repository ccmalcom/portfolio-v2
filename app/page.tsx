'use client'
import Typewriter from '@/app/ui/typewriter'
import { useState } from 'react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  if (isLoaded) {
    console.log('isLoaded');
  }

  return (
    
    <div className=''>
      {isLoaded ? 
      <p className='text-4xl ease'>test</p>
      : 
      <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      <Typewriter setIsLoaded={setIsLoaded}/>
      </>
      }
    

    </div>
  )
}
