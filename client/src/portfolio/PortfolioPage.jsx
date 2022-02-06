import React, { useState, useEffect } from "react";
import { retrieveProjects } from "../utils/api";
import FadeInEffect from "../utils/FadeInEffect";


const PortfolioPage = () => {

    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        retrieveProjects()
            .then(setProjectsList)
    }, [])

    const projectCards = document.querySelectorAll('.project-card');
    FadeInEffect(projectCards)

    const projectsHTML = projectsList.map((project) => {
        const {
            _id,
            github_link,
            image,
            name,
            description,
            languages
        } = project;

        return (
            <div key={_id}>
                <h3>{name}</h3>
                <a href={github_link} target='_blank'>
                    <img alt='some text' src={image} width='100%' className='project-card' />
                </a>
                <p>Description: {description}</p>
                <p>Languages: {languages.join(', ')}</p>
            </div>
        )
    })

    return (
        <>
            <h1 className='space'>hello port</h1>
            {projectsList.length ? projectsHTML : null}
        </>
    )
}

export default PortfolioPage;