export default function ParallaxPortrait(element, portraitVariable, setPortraitVariable, portraitRevealBottom, setPortraitRevealBottom, offset) {

    // default the values to null when window resize event occurs
    window.onresize = function () {
        setPortraitRevealBottom(null);
        setPortraitVariable(null);
    }

    const revealTop: number = element.getBoundingClientRect().top;
    const revealBottom: number = element.getBoundingClientRect().bottom;
    const portraitHeight: number = element.getBoundingClientRect().height;
    
    // resolve any type annotation below
    const portraitContainer: any = document.querySelector('.portrait-container')
    const portraitContainerHeight: number = portraitContainer.getBoundingClientRect().height;

    const heightDifference: number = portraitHeight - portraitContainerHeight;
    
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