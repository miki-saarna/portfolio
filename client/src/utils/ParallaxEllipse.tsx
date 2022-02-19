import { ParallaxDataset, ParallaxEllipseDataset } from './types';

// designed to accept only 1 element
export default function ParallaxEllipse(element, variables, offset) {
    const {
        dataset: {
            translateXSpeed,
            translateYSpeed,
            scaleSpeed
        } 
    }: ParallaxDataset  = element

    const {
        radiusX,
        radiusY,
        velocity,
    }: ParallaxEllipseDataset = variables
    // calculates position relative to offset and velocity
    const movement: number = offset * velocity

    // creates an ellipse motion
    element.style.transform = `translate(${Math.cos(movement) * radiusX}px, ${Math.sin(movement) * radiusY + Math.cos(movement) * radiusX}px) scale(${Math.sin(movement) + (scaleSpeed * 1000)}) rotate(0deg) `

    // adjust z-index based on if element is 'in-front' or 'behind' the earth
    Math.sin(movement) < 0 
    // place zIndex values in quotations?
    ? element.style.zIndex = 2
    : element.style.zIndex = 4;
}

// // // // // // // // // // // 

// other formulas:

// parabola:
// element.style.transform = `translate(${offset * speed * 17}px, -${((offset - 100) * speed) ** 2}px)`;

// circular motion:
// element.style.transform = `translate(${Math.cos(movement) * radiusX}px, ${Math.sin(movement) * radiusX}px) scale(${Math.sin(movement) + 1.3}) rotate(0deg) `

// constantly animated ellipse - the issue is that it resets on each scroll event
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