export default function FadeInEffect(elements) {
        elements.forEach((element) => {
            const windowHeight = window.innerHeight;
            const revealTop = element.getBoundingClientRect().top;
            if (revealTop < windowHeight - 125) {
                element.style.opacity = `1`
                element.style.transition = `625ms`;
            } else {
                element.style.opacity = `0`
                element.style.transition = `625ms`;
            }
        })
}