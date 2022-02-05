import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { retrieveProjects } from "../utils/api";
import TextAnimation from "../utils/TextAnimation";
import ParallaxLinear from "../utils/ParallaxLinear";

import portrait from "../images/portfolio-portrait.jpg";
import earth from "../images/earth.png";
import moon from "../images/moon.png";
import saturn from "../images/saturn.png";
import rocket from "../images/rocket.png";
import satellite from "../images/satellite.png";

const HomePage = () => {
    
    
    const [projectsList, setProjectsList] = useState([]);
    // retreive projects
    useEffect(() => {
        retrieveProjects()
            .then((response) => {
                // only display up to 4 projects on the home page
                setProjectsList(response.slice(0, 4));
            })
    }, [])

    const [offset, setOffset] = useState(0);
    const handleScroll = () => setOffset(window.pageYOffset);
    

    // AnimatedEllipse();
    // let satelliteMovement = 0;
    
    // function satelliteOrbit() {
    //     const radiusX = 95;
    //     const radiusY = 50;
    //     const velocity = 0.02;
        
    //     satelliteMovement += velocity

    //     const satellite = document.querySelector('satellite')
    //     // setRadians(offset * velocity);
    //     satellite.style.transform = `translate(${Math.cos(satelliteMovement) * radiusX}px, ${Math.sin(satelliteMovement) * radiusY + Math.cos(satelliteMovement) * radiusX}px) scale(${Math.sin(satelliteMovement) + 1.3}) rotate(0deg) `
            
    //     // adjust z-index based on if element is 'in-front' or 'behind' the earth
    //     Math.sin(satelliteMovement) < 0 
    //         ? satellite.style.zIndex = 2
    //         : satellite.style.zIndex = 4

    //     requestAnimationFrame(satelliteOrbit);
    // }
    // window.requestAnimationFrame(satelliteOrbit);
    


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        const parallaxLinear = document.querySelectorAll(".parallaxLinear");
        ParallaxLinear(parallaxLinear, offset);


        const parallax = document.querySelectorAll(".parallax");

        parallax.forEach((element) => {
            const speedX = element.dataset.translateXSpeed;
            const speedY = element.dataset.translateYSpeed;
            const scale = element.dataset.scaleSpeed;

            if(element.className.includes('satellite')) {

                // adjust radius x and y values
                const radiusX = 95;
                const radiusY = 50;
                // adjust speed of motion
                const velocity = 0.02;
                // calculates position relative to offset and velocity
                const movement = offset * velocity;

                // formula for a parabola
                // element.style.transform = `translate(${offset * speed * 17}px, -${((offset - 100) * speed) ** 2}px)`;
                
                // creates a circular motion
                // element.style.transform = `translate(${Math.cos(movement) * radiusX}px, ${Math.sin(movement) * radiusX}px) scale(${Math.sin(movement) + 1.3}) rotate(0deg) `

                // creates an ellipse motion
                element.style.transform = `translate(${Math.cos(movement) * radiusX}px, ${Math.sin(movement) * radiusY + Math.cos(movement) * radiusX}px) scale(${Math.sin(movement) + (scale * 1000)}) rotate(0deg) `
                    
                // adjust z-index based on if element is 'in-front' or 'behind' the earth
                Math.sin(movement) < 0 
                    ? element.style.zIndex = 2
                    : element.style.zIndex = 4
                    
            }
        })


        // let revealPoint = 10;
        // if(window.innerWidth < 768) {
        //   revealPoint = 400
        // } 
        // else if(window.innerWidth < 1024) {
        //   revealPoint = 150
        // } else if(window.innerWidth < 1200) {
        //   revealPoint = 150
        // } else {
        //   revealPoint = 150
        // }
        const discoverReveal = document.querySelector(".homepage-title");
        TextAnimation({
            element: discoverReveal,
            revealPoint: 560,
            offset: offset
        })

        const possibilitiesReveal = document.querySelector(".possibilities");
        TextAnimation({
            element: possibilitiesReveal,
            revealPoint: 350
        })

        // possible to replace querySelector with the elements? like h5
        const bioReveal = document.querySelector(".bio");
        TextAnimation({
            element: bioReveal, 
            revealPoint: 300
        })
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    const projectsHTML = projectsList.map((project) => {
        const {
            _id,
            image,
            name,
        } = project;
        
        return (
            <div key={_id}>
                <h3>{name}</h3>
                <img src={image} />
                <div className='overlay project-overlay'></div>
            </div>
        )
    })

    return (
        <>
            <div className='parallax-content'>
                <h3 className='homepage-title' data-translate-y-speed="0.1" data-reveal-opacity-speed='0.03' data-scale-speed=".01">Discover</h3>
                <h3 className='possibilities' data-translate-y-speed="0.1" data-scale-speed=".00175" data-reveal-opacity-speed='0.01' data-hide-opacity-speed='0.007' data-hide-opacity-point='100'> The Possibilities</h3>
                <img className='earth' data-speed="0.7" src={earth} alt="" />
                <img className='moon parallaxLinear' data-translate-x-speed="-0.3" data-translate-y-speed="-0.4" data-scale-speed="-.0007" src={moon} alt="" />
                <img className='saturn parallaxLinear' data-translate-x-speed="-0.1" data-translate-y-speed="0.2" data-scale-speed="-.0005" src={saturn} alt="" />
                <img className='rocket parallaxLinear' data-translate-x-speed="0.9" data-translate-y-speed="-0.6" data-scale-speed=".003" src={rocket} alt="" />
                <img className='satellite parallax' data-translate-x-speed="0.1" data-translate-y-speed="0.1" data-scale-speed=".0013" src={satellite} alt="" />
            </div>
            <div className='portrait-container'>
                <img className='portrait' alt='some text' src={portrait} />
                <h5 className='bio' data-translate-y-speed="0.03" data-scale-speed=".00015" data-reveal-opacity-speed='0.1' data-hide-opacity-speed='0.006' data-hide-opacity-point='100'>I am passionate about creating intuitive, innovative and beautiful applications that make life fulfilling.</h5>
                <div className='overlay portrait-overlay' data-speed-y='0.1'></div>
            </div>
            <div className='portfolio'>
                <h2>Portfolio</h2>
                <div>
                    {projectsHTML}
                </div>
            </div>
        </>
    )
}

export default HomePage;