import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { retrieveProjects } from "../utils/api";
import TextAnimation from "../utils/TextAnimation";
import ParallaxLinear from "../utils/ParallaxLinear";
import ParallaxEllipse from "../utils/ParallaxEllipse";
import ParallaxLinearRocket from "../utils/ParallaxLinearRocket";
import ContactPage from "../contact/ContactPage";
import ProjectCards from "../portfolio/ProjectCards";
import FocusedOnProject from "../portfolio/FocusedOnProject";

import portrait from "../images/portfolio-portrait.jpg";
import earth from "../images/earth.png";
import moon from "../images/moon.png";
import saturn from "../images/saturn.png";
import rocket from "../images/rocket.png";
import satellite from "../images/satellite.png";

const HomePage = () => {
    
    // retreive projects
    useEffect(() => {
        retrieveProjects()
            .then((response) => {
                // only display up to 4 projects on the home page
                setProjectsList(response.slice(0, 4));
            })
    }, [])

    const [projectsList, setProjectsList] = useState([]);
    const [cardSelected, setCardSelected] = useState(null);
    const [offset, setOffset] = useState(0);
    const handleScroll = () => setOffset(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        const parallaxLinear = document.querySelectorAll(".parallaxLinear");
        ParallaxLinear(parallaxLinear, offset);

        const parallaxLinearRocket = document.querySelector(".parallaxLinearRocket");
        // tremendous difficulty getting the rocket to not affect other elements
        // ParallaxLinearRocket(parallaxLinearRocket, offset);
        // console.log(ParallaxEllipse)
        const parallaxEllipse = document.querySelector(".parallaxEllipse");
        // adjust radius x and y values and speed of motion
        const variables = {
            radiusX: 105,
            radiusY: 60,
            velocity: 0.02
        }
        if (window.innerWidth >= 768) {
            variables['radiusX'] = 160;
            variables['radiusY'] = 90;
        }
        if (window.innerWidth >= 820) {
            variables['radiusX'] = 175;
            variables['radiusY'] = 90;
            variables['velocity'] = 0.017;
        }
        if (window.innerWidth >= 1000) {
            variables['radiusX'] = 145;
            variables['radiusY'] = 82;
            variables['velocity'] = 0.022;
        }
        if (window.innerWidth >= 1200) {
            variables['radiusX'] = 185;
            variables['radiusY'] = 106;
            variables['velocity'] = 0.02;
        }
        if (window.innerWidth >= 1400) {
            variables['radiusX'] = 190;
            variables['radiusY'] = 108;
        }
        if (window.innerWidth >= 1600) {
            variables['radiusX'] = 200;
            variables['radiusY'] = 100;
            variables['velocity'] = 0.019;
        }
        ParallaxEllipse(parallaxEllipse, variables, offset);
    
        const discoverReveal = document.querySelector(".homepage-title");
        // move to separate file
        // switch to case statements?
        let discoverRevealPoint = 560;
        if (window.innerWidth < 375) {
            discoverRevealPoint = 480;
        } else if(window.innerWidth < 390) {
            discoverRevealPoint = 420
        } else if(window.innerWidth < 410) {
            discoverRevealPoint = 580
        }
        else if(window.innerWidth < 450) {
            discoverRevealPoint = 650
        }
        else if(window.innerWidth <= 600) {
            discoverRevealPoint = 600
        }
        else if(window.innerWidth <= 700) {
            discoverRevealPoint = 700
        }
        else if(window.innerWidth <= 768) {
          discoverRevealPoint = 700
        } else if(window.innerWidth <= 820) {
          discoverRevealPoint = 850
        } else if(window.innerWidth <= 912) {
            discoverRevealPoint = 230
          }
          else if(window.innerWidth <= 1000) {
          discoverRevealPoint = 325
        }
        else if(window.innerWidth <= 1200) {
            discoverRevealPoint = 425
          } 
          else if(window.innerWidth <= 1400) {
            discoverRevealPoint = 550
          } 
          else if(window.innerWidth <= 1600) {
            discoverRevealPoint = 625
          } 
        else {
          discoverRevealPoint = 725
        }
        


        TextAnimation({
            element: discoverReveal,
            revealPoint: discoverRevealPoint,
            offset: offset,
        })
        // sometimes offset of 0 doesn't get passed into TextAnimation
        if (offset === 0) {
            discoverReveal.style.opacity = `0`
        }

        const possibilitiesReveal = document.querySelector(".possibilities");
        // move to separate file
        // switch to case statements?
        let possibilitiesRevealPoint = 300;
        if (window.innerWidth < 375) {
            possibilitiesRevealPoint = 300;
        } else if(window.innerWidth < 390) {
            possibilitiesRevealPoint = 325
        } else if(window.innerWidth < 410) {
            possibilitiesRevealPoint = 350
        }
        else if(window.innerWidth < 450) {
            possibilitiesRevealPoint = 375
        }
        else if(window.innerWidth <= 600) {
            possibilitiesRevealPoint = 300
        }
        else if(window.innerWidth <= 700) {
            possibilitiesRevealPoint = 300
        }
        else if(window.innerWidth <= 768) {
          possibilitiesRevealPoint = 350
        } else if(window.innerWidth <= 820) {
          possibilitiesRevealPoint = 500
        } else if(window.innerWidth <= 912) {
            possibilitiesRevealPoint = 230
          }
          else if(window.innerWidth <= 1000) {
          possibilitiesRevealPoint = 100
        }
        else if(window.innerWidth <= 1200) {
            possibilitiesRevealPoint = 150
          } 
          else if(window.innerWidth <= 1400) {
            possibilitiesRevealPoint = 175
          } 
          else if(window.innerWidth <= 1600) {
            possibilitiesRevealPoint = 200
          } 
        else {
          possibilitiesRevealPoint = 725
        }

        
        TextAnimation({
            element: possibilitiesReveal,
            revealPoint: possibilitiesRevealPoint
        })

        // possible to replace querySelector with the elements? like h5
        const bioReveal = document.querySelector(".bio");
        // move to separate file
        // switch to case statements?
        let bioRevealPoint = 300;
        if (window.innerWidth < 375) {
            bioRevealPoint = 300;
        } else if(window.innerWidth < 390) {
            bioRevealPoint = 300
        } else if(window.innerWidth < 410) {
            bioRevealPoint = 300
        }
        else if(window.innerWidth < 450) {
            bioRevealPoint = 300
        }
        else if(window.innerWidth <= 600) {
            bioRevealPoint = 300
        }
        else if(window.innerWidth <= 700) {
            bioRevealPoint = 300
        }
        else if(window.innerWidth <= 768) {
          bioRevealPoint = 300
        } else if(window.innerWidth <= 820) {
          bioRevealPoint = 300
        } else if(window.innerWidth <= 912) {
            bioRevealPoint = 100
          }
          else if(window.innerWidth <= 1000) {
          bioRevealPoint = 100
        }
        else if(window.innerWidth <= 1200) {
            bioRevealPoint = 150
          } 
          else if(window.innerWidth <= 1400) {
            bioRevealPoint = 175
          } 
          else if(window.innerWidth <= 1600) {
            bioRevealPoint = 200
          } 
        else {
          bioRevealPoint = 725
        }
        TextAnimation({
            element: bioReveal, 
            revealPoint: bioRevealPoint
        })

        // move this parallax effect into a separate helper file!!!
        const portrait = document.querySelector('.portrait');
        if (offset >= 251){
            portrait.style.transform = `translateY(-${(offset - 251) / 24}px)`;
        }

        // const projectCards = document.querySelectorAll('.project-card');
        // FadeInEffect(projectCards)
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    return (
        <>
            {/* consider moving to separate file */}
            <div className='parallax-content'>
                <h3 className='homepage-title' data-translate-y-speed="0.1" data-reveal-opacity-speed='0.03' data-scale-speed=".01">Imagine</h3>
                <h3 className='possibilities' data-translate-y-speed="0.1" data-scale-speed=".00235" data-reveal-opacity-speed='0.01' data-hide-opacity-speed='0.007' data-hide-opacity-point='100'> The Possibilities</h3>
                <img className='earth parallax-position' data-speed="0.7" src={earth} alt="" />
                <img className='moon parallaxLinear parallax-position' data-translate-x-speed="-0.3" data-translate-y-speed="-0.4" data-scale-speed="-.0007" src={moon} alt="" />
                <img className='saturn parallaxLinear parallax-position' data-translate-x-speed="-0.1" data-translate-y-speed="0.2" data-scale-speed="-.0005" src={saturn} alt="" />
                <img className='rocket parallaxLinearRocket parallax-position' data-translate-x-speed="0.3" data-translate-y-speed="-0.6" data-scale-speed=".003" src={rocket} alt="" />
                <img className='satellite parallaxEllipse parallax-position' data-translate-x-speed="0.1" data-translate-y-speed="0.1" data-scale-speed=".0013" src={satellite} alt="" />
            </div>

            {/* consider moving to separate file */}
            <div className='portrait-container' id='about'>
                <img className='portrait' alt='some text' src={portrait} />
                <h5 className='bio' data-translate-y-speed="0.03" data-scale-speed=".0002" data-reveal-opacity-speed='0.03' data-hide-opacity-speed='0.006' data-hide-opacity-point='100'>I am passionate about creating intuitive, innovative and beautiful applications that make life fulfilling.</h5>
                <div className='overlay portrait-overlay' data-speed-y='0.1'></div>
            </div>

            <div className='portfolio' id='portfolio'>
                <h2>Portfolio</h2>
                <div>
                    <ProjectCards projectsList={projectsList} setCardSelected={setCardSelected} />
                </div>
                <p>Check out my other projects at <a href='https://github.com/miki-saarna' target='_blank'>GitHub!</a></p>
            </div>
            {cardSelected ? <FocusedOnProject project={projectsList.find(project => project._id === cardSelected)} setCardSelected={setCardSelected} offset={offset} /> : null}

            <ContactPage />
        </>
    )
}

export default HomePage;