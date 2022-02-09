// implement useEffect and useState to assign offsetVariable
// import React, { useState, useEffect } from 'react';

export default function TextAnimation(variables) {

    // const [update, setUpdate] = useState(false)
    // const [offy, setOffy] = useState(null);

    

    const {
        element,
        revealPoint,
        offset,
    } = variables;

    // if (revealTop < windowHeight - revealPoint) {
    //     setUpdate(true);
    // }

    // useEffect(() => {
    //     if (update) {
    //         setOffy(offset);
    //     }
    // }, [update])

    // console.log(offsetVariable)

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
        element.style.transform = `translateY(-${(windowHeight - revealPoint - revealTop) * translateYSpeed}px) scale(${1 + (((windowHeight - revealPoint) - revealTop) * scaleSpeed)}, ${1 + (((windowHeight - revealPoint) - revealTop) * scaleSpeed)})`
    }

    // set equality to undefined so that it still works when offset equals 0
    // if (offset !== undefined) {
    if (offset !== undefined && revealTop < windowHeight - revealPoint) {
        // adjust the offset variable according to screen resolution
        // element.style.opacity = `${(offset - offsetVariable) * revealOpacitySpeed}`
        element.style.opacity = `${(windowHeight - revealPoint - revealTop) * revealOpacitySpeed}`
        // element.style.opacity = `${(offset - 104) * revealOpacitySpeed}`
    } else {
        if (revealTop >= 100) {
            element.style.opacity = `${((windowHeight - revealPoint) - revealTop) * revealOpacitySpeed}`
        } else if (revealTop < 100) {
            element.style.opacity = `${1 - (hideOpacityPoint - revealTop) * hideOpacitySpeed}`
        }
    }


}