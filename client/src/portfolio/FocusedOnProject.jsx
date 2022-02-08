import react, { useState, useEffect } from 'react';
import githubLogo from "../images/github_logo.png"


export default function FocusedOnProject ({project, setCardSelected, offset}) {
    const {
        github_link,
        image,
        name,
        description,
        languages
    } = project;

    const [pageYOffset, setPageYOffset] = useState(0);

    useEffect(() => {
        setPageYOffset(offset);
    }, [])

    const exitHandler = (event) => {
        event.preventDefault();
        setCardSelected(null);
        const backgroundDim = document.querySelector('.background-dim')
        backgroundDim.parentElement.removeChild(backgroundDim)
        document.body.style.position = 'static';
        window.scrollTo(0, pageYOffset)
        document.body.style.top = '';
        // attempt to transition the overlay out
        // const removeBackgroundDim = document.createElement('div');
        // removeBackgroundDim.setAttribute('class', 'remove-background-dim');
        // document.body.appendChild(removeBackgroundDim);
    }

    return (
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
    )
}