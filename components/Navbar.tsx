import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import navLogo from '../public/assets/images/sun.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-[#ecf0f3]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={navLogo} alt="/" width="50" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#experiences">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Experiences
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={navLogo} alt="/" width={50} height={50} />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Hello I'm Shao Kiat</p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase" onClick={handleNav}>
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#experiences">
                <li className="py-4 text-sm">Experiences</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5] ">
                Let's Connect!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-200">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-200">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-200">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
