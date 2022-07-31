import Image from 'next/image'
import React from 'react'
import profilePic from '../public/assets/images/portrait2.jpg'

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
        </div>
        <div className="w-[60%] md:w-full h-auto  m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
          <Image src={profilePic} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About
