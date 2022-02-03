import React, { useState, useEffect } from "react";
import { retrieveProjects } from "../utils/api";


const PortfolioPage = () => {

    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        retrieveProjects()
            .then(setProjectsList)
    }, [])

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
                    <img alt='some text' src={image} width='100%' />
                </a>
                <p>Description: {description}</p>
                <p>Languages: {languages.join(', ')}</p>
            </div>
        )
    })

    return (
        <>
            <h1>hello port</h1>
            {projectsList.length ? projectsHTML : null}
        </>
    )
}

export default PortfolioPage;