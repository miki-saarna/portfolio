

export default function ParallaxPortrait(element, portraitVariable, setPortraitVariable, portraitRevealBottom, setPortraitRevealBottom, offset) {

    // default the values to null when window resize event occurs
    window.onresize = function () {
        setPortraitRevealBottom(null);
        setPortraitVariable(null);
    }

    const revealTop = element.getBoundingClientRect().top;
    const revealBottom = element.getBoundingClientRect().bottom;
    const portraitHeight = element.getBoundingClientRect().height;
    
    const portraitContainerHeight = document.querySelector('.portrait-container').getBoundingClientRect().height;

    const heightDifference = portraitHeight - portraitContainerHeight;
    
    if (!portraitRevealBottom) {
        setPortraitRevealBottom(offset + revealBottom);
    }

    if (revealTop <= window.innerHeight && revealBottom >= 0) {
        if (!portraitVariable) {
            setPortraitVariable(offset);
        }
        element.style.transform = `translateY(-${(heightDifference / (portraitRevealBottom - portraitVariable)) * (offset - portraitVariable)}px)`;
    }
}