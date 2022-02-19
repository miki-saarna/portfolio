let satelliteMovement: number = 0;
    
    export default function AnimatedEllipse() {
        const radiusX: number= 85;
        const radiusY: number= 50;
        const velocity: number = 0.02;
        
        satelliteMovement += velocity

        // resolve any type annotation
        const satellite: any = document.querySelector('.menu-bar-satellite');
        
        satellite.style.transform = `translate(${-Math.cos(satelliteMovement) * radiusX}px, ${Math.sin(satelliteMovement) * radiusY + Math.cos(satelliteMovement) * radiusX}px) scale(${Math.sin(satelliteMovement) + 1.3}) rotate(0deg) `
            
        // adjust z-index based on if element is 'in-front' or 'behind' the earth
        Math.sin(satelliteMovement) < 0 
            ? satellite.style.zIndex = 2
            : satellite.style.zIndex = 4

        requestAnimationFrame(AnimatedEllipse);
    }

    window.requestAnimationFrame(AnimatedEllipse);