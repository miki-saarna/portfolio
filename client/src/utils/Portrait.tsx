import react, { ReactElement, useState } from 'react';
import portrait from "../images/portfolio-portrait.jpg";
import ParallaxPortrait from "./ParallaxPortrait";

export default function Portrait({ offset }): ReactElement {

    const [portraitVariable, setPortraitVariable] = useState<number | null>(null);
    const [portraitRevealBottom, setPortraitRevealBottom] = useState<number | null>(null);

    const element = document.querySelector('.portrait');

    if (element) {
        ParallaxPortrait(element, portraitVariable, setPortraitVariable, portraitRevealBottom, setPortraitRevealBottom, offset)
    }


    return <img className='portrait' alt='some text' src={portrait} />
}