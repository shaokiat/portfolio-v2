import Image from 'next/image'
import React from 'react'
import {
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiApollographql,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiJava,
  SiGit,
} from 'react-icons/si'
import IconText from './IconText'

import nextJsIcon from '../public/assets/images/nextjs.svg'
import pythonIcon from '../public/assets/images/python.png'
import awsIcon from '../public/assets/images/aws.png'
import solidityIcon from '../public/assets/images/solidity.png'
import sklearnIcon from '../public/assets/images/sklearn.svg'

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="mt-5">Frontend</h2>
          <div className="w-full py-4 flex justify-center flex-wrap ml-5 gap-8">
            <div className="group items-center flex flex-col relative justify-center">
              <SiReact size={50} style={{ color: '#61DBFB' }} />
              <IconText>React</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <SiTypescript size={50} style={{ color: '#007acc' }} />
              <IconText>TypeScript</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <SiJavascript size={50} style={{ color: '#F0DB4F' }} />
              <IconText>JavaScript</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <SiHtml5 size={50} style={{ color: '#E10098' }} />
              <IconText>HTML</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <Image src={nextJsIcon} alt="" width={60} height={50} />
              <IconText>NextJS</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <SiTailwindcss size={50} style={{ color: '#38bdf8' }} />
              <IconText>TailwindCSS</IconText>
            </div>
          </div>
          <h2 className="mt-5">Backend</h2>
          <div className="w-full py-4 flex justify-center flex-wrap ml-5 gap-8">
            <div className="group items-center flex flex-col relative justify-center">
              <SiNodedotjs size={50} style={{ color: '#3C873A' }} />
              <IconText>NodeJS</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <SiGraphql size={50} style={{ color: '#E10098' }} />
              <IconText>GraphQL</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <SiJava size={50} style={{ color: '#f89820' }} />
              <IconText>Java</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <Image src={pythonIcon} alt="" width={50} height={50} />
              <IconText>Python</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <SiMongodb size={50} style={{ color: '#589636' }} />
              <IconText>MongoDB</IconText>
            </div>
          </div>
          <h2 className="mt-5">Others</h2>
          <div className="w-full py-4 flex justify-center flex-wrap ml-5 gap-8">
            <div className="group items-center flex flex-col relative justify-center">
              <Image src={awsIcon} alt="" width={60} height={36} />
              <IconText>AWS</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <Image src={solidityIcon} alt="" width={50} height={50} />
              <IconText>Solidity</IconText>
            </div>
            <div className="group items-center flex flex-col relative justify-center">
              <Image src={sklearnIcon} alt="" width={75} height={50} />
              <IconText>sklearn</IconText>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
