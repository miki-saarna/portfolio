import react, { ReactElement, useState, useEffect } from 'react';
import { Project } from '../utils/types';
import githubLogo from "../images/github_logo.png"


export default function FocusedOnProject ({project, setCardSelected, offset}): ReactElement {
    const {
        github_link,
        image,
        name,
        description,
        languages
    }: Omit<Project, '_id'> = project;

    const [pageYOffset, setPageYOffset] = useState<number>(0);

    useEffect(() => {
        setPageYOffset(offset);
    }, [])

    const exitHandler = (event) => {
        event.preventDefault();
        setCardSelected(null);
        // resolve any type annotation
        const backgroundDim: any = document.querySelector('.background-dim')
        backgroundDim.style.display = `none`;
        // backgroundDim.parentElement.removeChild(backgroundDim)

        
        document.body.style.position = 'static';
        window.scrollTo(0, pageYOffset)
        document.body.style.top = '';

        const parallaxPosition = document.querySelectorAll('.parallax-position');
        // resolve any type annotation
            parallaxPosition.forEach((element: any) => {
                element.style.position = `absolute`;
            })

        // attempt to transition the overlay
        // const removeBackgroundDim = document.createElement('div');
        // removeBackgroundDim.setAttribute('class', 'remove-background-dim');
        // document.body.appendChild(removeBackgroundDim);
    }

    return (
        <>
            <div className='clicked-project'>
                <button onClick={exitHandler}></button>
                <img alt='' src={image} />
                <div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p><b>Primary Languages</b>: {languages.join(', ')}</p>
                    <a href={github_link} target="_blank"><p>Project Link</p><img src={githubLogo} /></a>
                </div>
            </div>
            <div className='background-dim' onClick={exitHandler}></div>
        </>
    )
}