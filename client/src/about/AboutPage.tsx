
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
            console.log(myEle.style)
        }, 150)
    },[])
    

    return (
        <>    
            <div className='aboutPage'>
                <h2 className='headerLabel'>about me</h2>
                <p id="slidingOut">My name is Miki and I am a Shopify Expert specializing in store setup, migrations, theme customization, development and more.</p>
            </div>
            <img className='portrait' src={portrait} />
            {/* <h3>storeA</h3> */}
            {/* <p>Modern premium theme with customization for dynamic menu, advanced filtering capabilities, and lifestyle design.</p> */}
            {/* <button>See Demo</button> */}
        </>
    )
}

export default AboutPage;