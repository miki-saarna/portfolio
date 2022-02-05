
import React, { useState, useEffect } from 'react';
import portrait from '../images/portfolio-portrait.jpg';

const AboutPage = () => {
    
    const [offset, setOffset] = useState(0);

    const handleScroll = () => setOffset(window.pageYOffset);
    
    
    useEffect(() => {
        // update below type annotation with correct value
        const parallax:any = document.querySelector('.portrait');
        window.addEventListener("scroll", handleScroll);
        
        parallax.style.objectPosition = `0 ${offset / 7}%`

        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    useEffect(() => {
        setTimeout(() => {
            const myEle:any = document.getElementById('slidingOut');
            myEle.classList.add('greater')
            myEle.style.width = `90%`
            myEle.style.padding = `0 8px`
            myEle.style.borderRight = `2px solid #f1f1f1`
            myEle.style.borderLeft = `2px solid #f1f1f1`
        }, 150)
    },[])
    

    return (
        <div>    
            <img className='portrait about-portrait' src={portrait} />
            <div className='aboutPage'>
                {/* <h2 className='headerLabel'>about me</h2> */}
                
            <p id="slidingOut">My name is Miki and I'm a Full Stack Developer.</p>
            </div>
            {/* <h3>storeA</h3> */}
            {/* <p>Modern premium theme with customization for dynamic menu, advanced filtering capabilities, and lifestyle design.</p> */}
            {/* <button>See Demo</button> */}
            <p>Checkout my Projects Here!</p>
        </div>
    )
}

export default AboutPage;