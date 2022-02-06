// designed to accept multiple elements
export default function ParallaxLinearRocket(element, offset) {
    // elements.forEach((element) => {
        const {
            dataset: {
                translateXSpeed,
                translateYSpeed,
                scaleSpeed
            }
        } = element
        element.style.transform = `matrix(${1 + (offset * scaleSpeed)}, 0, 0, ${1 + (offset * scaleSpeed)}, ${offset * translateXSpeed}, ${offset * translateYSpeed})`
        // element.style.transform = `translateX(${offset * translateXSpeed}px)`
    // })
}