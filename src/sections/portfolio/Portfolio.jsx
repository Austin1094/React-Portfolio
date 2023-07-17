import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
    const [projects, setProjects] = useState(data);

    return (
        <section id="portfolio">
            <h2>Projects</h2>
            <p>Here is where you can find projects that I've worked on and also contributed in!</p>
            <div className="container portfolio__container">
                <ProjectsCategories />
                <Projects projects={projects} />
            </div>
        </section>
    )
}

export default Portfolio