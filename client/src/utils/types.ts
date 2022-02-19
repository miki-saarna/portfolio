export interface MenuDataEntry {
    title: string,
    path: string
}

export interface Project {
    description: string,
    github_link: string,
    image: string,
    languages: Array<string>,
    name: string,
    _id: string
}
// convert above and below interfaces to use extend?
export interface ProjectCard {
    _id: string,
    image: string,
    name: string,
}

export interface TextAnimationDataEntry {
    class_name: string,
    revealVariable: Array<number>
    // above and below are 2 different ways to indicate an array
    hideVariable?: number[]
}

export interface ParallaxDataset {
    dataset: {
        translateXSpeed: number,
        translateYSpeed: number,
        scaleSpeed: number
    }
}

export interface ParallaxEllipseDataset {
    radiusX: number,
    radiusY: number,
    velocity: number
}