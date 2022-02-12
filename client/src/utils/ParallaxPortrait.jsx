import react, { useState } from 'react';

export default function ParallaxPortrait(element, offset, portraitVariable, setPortraitVariable, portraitRevealBottom, setPortraitRevealBottom) {
    const {
        scaleSpeed
    } = element.dataset;

    const revealTop = element.getBoundingClientRect().top;
    const revealBottom = element.getBoundingClientRect().bottom;
    const portraitHeight = element.getBoundingClientRect().height;
    
    const portraitContainerHeight = document.querySelector('.portrait-container').getBoundingClientRect().height;

    const heightDifference = portraitHeight - portraitContainerHeight;

    if (!portraitRevealBottom) {
        setPortraitRevealBottom(revealBottom);
    }

    if (revealTop <= window.innerHeight && revealBottom >= 0) {
        if (!portraitVariable) {
            setPortraitVariable(offset);
        }
        element.style.transform = `translateY(-${(heightDifference / (portraitRevealBottom - portraitVariable)) * (offset - portraitVariable)}px)`;
    }
}