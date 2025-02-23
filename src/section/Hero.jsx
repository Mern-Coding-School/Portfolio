import React from 'react'

const Hero = () => {
  return (
    <section className="w-full h-screen bg-black/50 absolute top-0 z-[99] pointer-events-none pt-20 max-[640px]:pt-10">
     <div className="flex w-full h-full gap-4 flex-col items-center justify-center text-white px-4 max-[640px]:px-2">
      <img
        src="https://avatars.githubusercontent.com/u/122656682?v=4"
        alt="Profile"
        className="w-30 h-30 rounded-full border-2 border-zinc-800"
      />
      <p className="shiny-text text-[1.5vw]  max-[680px]:text-[3.2vw] text-zinc-400">Hi, I'm Abhisekh Gupta 👋</p>
      <p className="text-[2vw] max-[700px]:text-[3vw]  sm:w-[50%] lg:w-[40%] max-[640px]:w-[70%] font-light text-center leading-tight shiny-text">
  Building scalable backends, APIs, and full-stack solutions.
</p>

<button className="mt-4 bg-zinc-900 px-6 py-2 rounded cursor-pointer pointer-events-auto"><span className='shiny-text'>Hire Me ↗</span></button>
    </div>
    </section>
  )
}

export default Hero