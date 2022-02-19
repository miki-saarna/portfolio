import { ParallaxDataset } from "./types"

// designed to accept multiple elements
export default function ParallaxLinear(elements, offset) {
    elements.forEach((element) => {
        const {
            dataset: {
                translateXSpeed,
                translateYSpeed,
                scaleSpeed
            }
        }: ParallaxDataset = element
        element.style.transform = `matrix(${1 + (offset * scaleSpeed)}, 0, 0, ${1 + (offset * scaleSpeed)}, ${offset * translateXSpeed}, ${offset * translateYSpeed})`
    })
}