import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">Meus Projetos</h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
                src="/1.png"
                title="Modern Next.Js Portfolio"
                description="Um Projeto de Portfólio criado com NextJS, apenas para praticar, para tentar aprimorar minhas habilidades em FrontEnd e como WebDesginer."
            />
            <ProjectCard
                src="/SpaceWebsite.png"
                title="Space Themed Website"
                description="Meu novo portfólio, onde pretendo agregar todos os meus projetos, Habilidades e Desenvolvimentos ao longo da minha carreira como Desenvolvedor."
            />
        </div>
    </div>
  )
}

export default Projects