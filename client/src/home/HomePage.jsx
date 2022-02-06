import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { retrieveProjects } from "../utils/api";
import TextAnimation from "../utils/TextAnimation";
import ParallaxLinear from "../utils/ParallaxLinear";
import ParallaxEllipse from "../utils/ParallaxEllipse";

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
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        const parallaxLinear = document.querySelectorAll(".parallaxLinear");
        ParallaxLinear(parallaxLinear, offset);

        const parallaxEllipse = document.querySelector(".parallaxEllipse");
        // adjust radius x and y values and speed of motion
        const variables = {
            radiusX: 95,
            radiusY: 50,
            velocity: 0.02
        }
        ParallaxEllipse(parallaxEllipse, variables, offset);

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

        const portrait = document.querySelector('.portrait');
        if (offset >= 251){
            portrait.style.transform = `translateY(-${(offset - 251) / 24}px)`;
        }
    
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
                <img className='satellite parallaxEllipse' data-translate-x-speed="0.1" data-translate-y-speed="0.1" data-scale-speed=".0013" src={satellite} alt="" />
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