export interface MenuDataEntry {
    title: string,
    path: string
}

export interface ProjectCard {
    _id: string,
    image: string,
    name: string,
}

export interface Project extends ProjectCard {
    description: string,
    github_link: string,
    languages: Array<string>,
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

export interface Form {
    name: string,
    email: string,
    url: string,
    message: string,
}