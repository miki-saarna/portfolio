import satellite from "../images/satellite.png";
import AnimatedEllipse from "../utils/AnimatedEllipse";

function AnimatedEllipseSatellite() {
    window.requestAnimationFrame(AnimatedEllipse);
    return <img className='scale-satellite' data-translate-x-speed="0.1" data-translate-y-speed="0.1" data-scale-speed=".0013" src={satellite} alt="" />
}

export default AnimatedEllipseSatellite;