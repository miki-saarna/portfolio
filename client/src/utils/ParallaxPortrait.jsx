import react, { useState } from 'react';

export default function ParallaxPortrait(element, offset, offsetVariable, setOffsetVariable) {

    const topOfElement = element.getBoundingClientRect()
    // console.log(topOfElement)
    const appearOptions = {
        // if threshold is 1, the entire element needs to be within the screen to appear
        threshold: 0,
        // sets how far from the edges the element needs to be to appear
        rootMargin: "0px 0px 0px 0px"
      };
      const appearOnScroll = new IntersectionObserver(function(
        elements,
        appearOnScroll
    ){
        elements.forEach(element => {
            if (!element.isIntersecting) {

            } else {
                if (!offsetVariable) {
                    setOffsetVariable(offset);
                } else {
                    console.log(element)
                    element.target.style.transform = `translateY(-${offset - offsetVariable / 24}px)`
                }
              appearOnScroll.unobserve(element.target);
            }
        });
    }, appearOptions)
        appearOnScroll.observe(element);
}

// portrait.style.transform = `translateY(-${(offset - 251) / 24}px)`;
//   element.style.transform = `translateY(-${})`