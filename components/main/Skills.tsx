import React from 'react'
import { Backend_skill, Frontend_skill, Full_stack, Skill_data } from "@/constants"
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
        style={{ transform: "scale(0.9)" }}
    >
        <SkillText />
        <h1 className="font-bold text-white uppercase text-[30px] mt-1">FrontEnd:</h1>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Frontend_skill.map((image, index) => (
                <SkillDataProvider 
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div>

        <h1 className="font-bold text-white uppercase text-[30px] mt-4">BackEnd:</h1>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Backend_skill.map((image, index) => (
                <SkillDataProvider 
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div>

        <div className="w-full h-full absolute">
            <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                <video 
                    className="w-full h-auto"
                    preload="false"
                    playsInline
                    loop
                    muted
                    autoPlay
                    src="/cards-video.webm"
                />
            </div>
        </div>
    </section>
  )
}

export default Skills