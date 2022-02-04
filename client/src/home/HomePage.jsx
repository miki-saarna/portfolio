import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { retrieveProjects } from "../utils/api";

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
        const parallax = document.querySelectorAll(".parallax");

        parallax.forEach((element) => {
            const speedX = element.dataset.speedX;
            const speedY = element.dataset.speedY;
            const scale = element.dataset.scale;

            if(element.className.includes('rocket')) {
                element.style.transform = `matrix(${1 + (offset * scale)}, 0, 0, ${1 + (offset * scale)}, ${offset * speedX}, -${offset * speedY})`
            }
            if(element.className.includes('moon')) {
                element.style.transform = `matrix(${1 - (offset * scale)}, 0, 0, ${1 - (offset * scale)}, -${offset * speedX}, -${offset * speedY})`
            }
            if(element.className.includes('saturn')) {
                element.style.transform = `matrix(${1 - (offset * scale)}, 0, 0, ${1 - (offset * scale)}, -${offset * speedX}, ${offset * speedY})`
            }
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

    const windowHeight = window.innerHeight;

    const reveal = document.querySelector(".homepage-title");

    const revealTop = reveal.getBoundingClientRect().top;

    let revealPoint = 10;
    if(window.innerWidth < 768) {
      revealPoint = 400
    } else if(window.innerWidth < 1024) {
      revealPoint = 150
    } else if(window.innerWidth < 1200) {
      revealPoint = 150
    } else {
      revealPoint = 150
    }

    const speedY = reveal.dataset.speedY;
    const scale = reveal.dataset.scale;
    
    if(revealTop < windowHeight - revealPoint) { // x < 444
        reveal.classList.add('active');
            reveal.style.opacity = `${offset * speedY * .3}`
            reveal.style.transition = `all .15s ease`
            reveal.style.transform = `translateY(-${offset * speedY}px) scale(${1 + (offset * scale)}, ${1 + (offset * scale)})`
    } 

    const reveal2 = document.querySelector(".possibilities");
    
            const revealTop2 = reveal2.getBoundingClientRect().top;
            
            
            let revealPoint2 = 10;
            if(window.innerWidth < 768) {
              revealPoint2 = 350
            } else if(window.innerWidth < 1024) {
              revealPoint2 = 150
            } else if(window.innerWidth < 1200) {
              revealPoint2 = 150
            } else {
              revealPoint2 = 150
            }

        const speedY2 = reveal2.dataset.speedY;
        const scale2 = reveal2.dataset.scale;

        if(revealTop2 >= windowHeight - revealPoint2) {
            reveal2.style.opacity = '0';
        }

        if(revealTop2 < windowHeight - revealPoint2) { // x < 544
            reveal2.style.transition = `all .15s ease` 
            reveal2.style.transform = `translateY(-${offset * speedY2}px) scale(${1 + (offset * .35 * scale2)}, ${1 + (offset * .35 * scale2)})`
        }

        if(revealTop2 < windowHeight - revealPoint2 && revealTop2 >= 100) { // 100 < x < 544
            reveal2.style.opacity = `${(offset - 129)* speedY2 * .1}`
        } else if(revealTop2 < 100) { // x < 100
            reveal2.style.opacity = `${1 - (offset - 480) * 0.006}`
        }

        // possible to replace querySelector with the elements? like h5
        const reveal3 = document.querySelector(".bio");

        const revealTop3 = reveal3.getBoundingClientRect().top;

        let revealPoint3 = 10;
        if(window.innerWidth < 768) {
          revealPoint3 = 300
        } else if(window.innerWidth < 1024) {
          revealPoint3 = 150
        } else if(window.innerWidth < 1200) {
          revealPoint3 = 150
        } else {
          revealPoint3 = 150
        }

        const speedY3 = reveal3.dataset.speedY;
        const scale3 = reveal3.dataset.scale;

    if(revealTop3 < windowHeight - revealPoint3) {
        reveal3.style.transition = `all .20s ease` 
        reveal3.style.transform = `translateY(-${offset * speedY3 * 0.3}px) scale(${1 + (offset * .015 * scale3)}, ${1 + (offset * .015 * scale3)})`
    }

    if(revealTop3 < windowHeight - revealPoint3 && revealTop3 >= 100) { // if 100 <= x < 544
        reveal3.style.opacity = `1`
    } else if(revealTop3 < windowHeight - revealPoint3 && revealTop3 < 100) { // if x < 100
        reveal3.style.opacity = `${1 - (offset - 1208) * 0.006}`
    } else { // else...
        reveal3.style.opacity = 0;
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
                <h3 className='homepage-title' data-speed-y="0.1" data-scale=".01">Discover</h3>
                <h3 className='possibilities' data-speed-y="0.1" data-scale=".005"> The Possibilities</h3>
                <img className='earth' data-speed="0.7" src={earth} alt="" />
                <img className='moon parallax' data-speed-x="0.3" data-speed-y="0.4" data-scale=".0007" src={moon} alt="" />
                <img className='saturn parallax' data-speed-x="0.1" data-speed-y="0.2" data-scale=".0005" src={saturn} alt="" />
                <img className='rocket parallax' data-speed-x="0.9" data-speed-y="0.6" data-scale=".003" src={rocket} alt="" />
                <img className='satellite parallax' data-speed-x="0.1" data-speed-y="0.1" data-scale=".0013" src={satellite} alt="" />
            </div>
            <div className='portrait-container'>
                <img className='portrait' alt='some text' src={portrait} />
                <h5 className='bio' data-speed-y="0.1" data-scale=".01">I am passionate about creating intuitive, innovative and beautiful applications that make life fulfilling.</h5>
                <div className='overlay portrait-overlay'></div>
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