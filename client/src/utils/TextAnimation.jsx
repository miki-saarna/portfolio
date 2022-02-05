export default function TextAnimation(variables) {
    const {
        element,
        revealPoint,
        offset
    } = variables

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    const {
        translateYSpeed,
        scaleSpeed,
        revealOpacitySpeed,
        hideOpacitySpeed,
        hideOpacityPoint,
    } = element.dataset

    if(revealTop < windowHeight - revealPoint) {
        element.style.transition = `all .15s ease` 
        element.style.transform = `translateY(-${((windowHeight - revealPoint) - revealTop) * translateYSpeed}px) scale(${1 + (((windowHeight - revealPoint) - revealTop) * scaleSpeed)}, ${1 + (((windowHeight - revealPoint) - revealTop) * scaleSpeed)})`
    }
    
    // set equality to undefined so that it still works when offset equals 0
    if (offset !== undefined) {
        element.style.opacity = `${offset * revealOpacitySpeed}`
    } else {
        if (revealTop >= 100) {
            element.style.opacity = `${((windowHeight - revealPoint) - revealTop) * revealOpacitySpeed}`
        } else if (revealTop < 100) {
            element.style.opacity = `${1 - (hideOpacityPoint - revealTop) * hideOpacitySpeed}`
        }
    }
}