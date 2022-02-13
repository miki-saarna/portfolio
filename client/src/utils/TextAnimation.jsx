import './TextAnimation.css';

export default function TextAnimation(variables, offset) {

    const {
        class_name,
        revealVariable,
        hideVariable,
    } = variables;

    let revealPoint;
    let hidePoint;
    if (window.innerWidth < window.innerHeight) {
        revealPoint = window.innerHeight * revealVariable[0];
        hidePoint = hideVariable ? window.innerHeight * hideVariable[0] : undefined;
    } else {
        revealPoint = window.innerHeight * revealVariable[1];
        hidePoint = hideVariable ? window.innerHeight * hideVariable[1] : undefined;
    }
    
    const element = document.querySelector(class_name);
    
    const {
        translateYSpeed,
        scaleSpeed,
        revealOpacitySpeed,
        hideOpacitySpeed,
        hideOpacityPoint,
    } = element.dataset

    if (offset < revealPoint) {
        element.style.opacity = `0`
    }
    
    // for all elements
    if(offset >= revealPoint) {
        element.style.opacity = `${(offset - revealPoint) * revealOpacitySpeed}`
        element.style.transform = `translate(-50%, -${(offset - revealPoint) * translateYSpeed}px) scale(${1 + ((offset - revealPoint) * scaleSpeed)}, ${1 + ((offset - revealPoint) * scaleSpeed)})`
    }

    // if there is a hidePoint
    if (hidePoint && offset > hidePoint) {
        element.style.opacity = `${1 - (offset - hidePoint) * hideOpacitySpeed}`
    }


}