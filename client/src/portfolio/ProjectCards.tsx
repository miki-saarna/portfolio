import { ProjectCard } from '../utils/types';
import { ReactElement } from 'react';
import FadeInEffect from "../utils/FadeInEffect";
    
export default function ProjectCards ({projectsList, setCardSelected}): ReactElement {

    // implements fade-in effect on the project cards
    const projectCards = document.querySelectorAll('.project-card');
    FadeInEffect(projectCards)

    return projectsList.map((project) => {
        const {
            _id,
            image,
            name,
        }: ProjectCard = project;
    
        const projectCardClickHandler = (event) => {
            event.preventDefault();
            setCardSelected(_id);

            // re-renders 4 times when background-dimmer is placed within `FocusedOnProject` file
            // maybe try rendering as a React component?

            // rename to background-overlay?
            // const backgroundDim = document.createElement('div');
            // backgroundDim.setAttribute('class', 'background-dim');
            // document.body.appendChild(backgroundDim);
            
            // find current position
            const scrollY:number = window.scrollY // unsure of the difference with `window.pageYOffset`
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;

            const parallaxPosition = document.querySelectorAll('.parallax-position');
            // fix any type annotation below
            parallaxPosition.forEach((element: any) => {
                element.style.position = `static`;
            })
        }
        
        return (
            <div key={_id} className='project-card' onClick={projectCardClickHandler}>
                <h3>{name}</h3>
                <img src={image} />
            </div>
        )
    })
}