import { TextAnimationDataEntry, TextAnimationDataset } from './types';
import './TextAnimation.css';

export default function TextAnimation(variables, offset) {

    const {
        class_name,
        revealVariable,
        hideVariable,
    }: TextAnimationDataEntry = variables;

    let revealPoint: number;
    let hidePoint: number | void;
    if (window.innerWidth < window.innerHeight) {
        revealPoint = window.innerHeight * revealVariable[0];
        hidePoint = hideVariable ? window.innerHeight * hideVariable[0] : undefined;
    } else {
        revealPoint = window.innerHeight * revealVariable[1];
        hidePoint = hideVariable ? window.innerHeight * hideVariable[1] : undefined;
    }
    
    // resolve any type annotation
    const element: any = document.querySelector(class_name);
    
    const {
        translateYSpeed,
        scaleSpeed,
        revealOpacitySpeed,
        hideOpacitySpeed,
        hideOpacityPoint,
    }: TextAnimationDataset = element.dataset

    if (offset < revealPoint) {
        element.style.opacity = `0`
    }
    
    // for all elements
    if(offset >= revealPoint) {
        element.style.opacity = `${(offset - revealPoint) * revealOpacitySpeed}`
        element.style.transform = `translate(-50%, -${(offset - revealPoint) * translateYSpeed}px) scale(${1 + ((offset - revealPoint) * scaleSpeed)}, ${1 + ((offset - revealPoint) * scaleSpeed)})`
    }

    // if there is a hidePoint
    if (hideOpacitySpeed && hidePoint && offset > hidePoint) {
        element.style.opacity = `${1 - (offset - hidePoint) * hideOpacitySpeed}`
    }


}