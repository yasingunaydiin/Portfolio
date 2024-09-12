"use client";
import Image from "next/image";
import { Card } from "@/components/Card";
import HTML5Icon from '@/assets/icons/HTML5_Badge.png';
import CSSIcon from '@/assets/icons/CSS3_Badge.png';
import JSIcon from '@/assets/icons/Javascript_Badge.png';
import ReactIcon from '@/assets/icons/React_Badge.png';
import NextJSIcon from '@/assets/icons/NextJS_Badge.png';
import TailwindIcon from '@/assets/icons/Tailwind_Badge.png';
import PythonIcon from '@/assets/icons/Python_Badge.png';
import SQLIcon from '@/assets/icons/SQL_Icon.png';
import GitIcon from '@/assets/icons/Git_Badge.png';
import mapImage from "@/assets/images/map.png";
import faceMemoji from "@/assets/images/memoji-face.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from "react";


const toolboxItems = [
  {
    title: "HTML5",
    iconType: HTML5Icon.src,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon.src,
  },
  {
    title: 'JavaScript',
    iconType: JSIcon.src,
  },
  {
    title: 'React',
    iconType: ReactIcon.src,
  },
  {
    title: 'Next.js',
    iconType: NextJSIcon.src,
  },
  {
    title: 'Tailwind CSS',
    iconType: TailwindIcon.src,
  },
  {
    title: 'Python',
    iconType: PythonIcon.src,
  },
  {
    title: 'Git',
    iconType: GitIcon.src,
  },
  {
    title: 'SQL',
    iconType: SQLIcon.src,
  }
];

const hobbies = [
  {
    title: 'Photo Editing',
    emoji: '📷',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Video Editing',
    emoji: '📹',
    left: '45%',
    top: '55%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Traveling',
    emoji: '🚞',
    left: '50%',
    top: '30%',
  },
  {
    title: 'Running',
    emoji: '🏃',
    left: '5%',
    top: '65%',
  }
]


export const AboutSection = () => {
  const constraintRef = useRef(null);
  return <div className="py-20">
    <div className="container">
          <h2 className="text-3xl text-center md:text-5xl mt-6">A Little About Me</h2>
          <p className="text-base text-center md:text-2xl mt-3">Who am I?</p>
          <div className="mt-16 flex flex-col gap-6">
            <Card className="h-[320px] p-0">
             <CardHeader
             title="My Toolbox"
             description="Explore the technologies and tools I use to create projects."
             className="px-6 pt-6"
             />
             <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left"/>
             <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right"/>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px] p-0 flex flex-col col-span-2 md:col-span-3">
            <CardHeader
            title="My Interests"
            description="Explore my interests and hobbies beyond the code."
            className="px-6 py-6"
            />
              <div className="relative flex-1" ref = {constraintRef} /* To add constraint */> 
                {hobbies.map((hobby) => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 py-1.5 px-6 outline outline-2 outline-black/10 rounded-full absolute bg-white" /* Dragable labels */
                  style={{
                    left: hobby.left,
                    top: hobby.top, 
                  }}
                  drag
                  dragConstraints={constraintRef}
                  >
                    <span className="font-medium">{hobby.title}</span>
                    <span>{hobby.emoji}</span>

                  </motion.div>
                ))}
              </div>
             </Card>
             
             <Card className="h-[320px] p-0 relative col-span-2">
              <Image src={mapImage} alt="Map"
              className="h-full w-full object-cover"
              />
              <div className="absolute top-12 left-56 md:top-12 lg:left-72 lg:top-7 md:left-48 -translate-x-1/2 -translate-y-1/2 size-11 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-blue-400/50">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-200 to-sky-400 -z-10 animate-ping [animation-duration:1.5s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-200 to-sky-400 -z-10"></div>
              <Image src={faceMemoji} alt="Face Memoji"
              className="h-11 w-11 object-contain rounded-full"/>
              </div>
             </Card>
             </div>
          </div>
     </div>
  </div>
  ;
};