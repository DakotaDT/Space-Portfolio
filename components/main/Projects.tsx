import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">My Projects</h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
                src="/1.png"
                title="Modern Next.Js Portfolio"
                description="A Portfolio Project created with NextJS, just to practice, to try to improve my FrontEnd skills and as a WebDesginer."
            />
            <ProjectCard
                src="/SpaceWebsite.png"
                title="Space Themed Website"
                description="My new portfolio, where I intend to add all my projects, Skills and Developments throughout my career as a Developer."
            />
        </div>
    </div>
  )
}

export default Projects