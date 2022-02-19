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

export interface TextAnimationDataEntry {
    class_name: string,
    revealVariable: Array<number>
    // above and below are 2 different ways to indicate an array
    hideVariable?: number[]
}