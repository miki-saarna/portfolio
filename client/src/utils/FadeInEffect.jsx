export default function FadeInEffect(elements) {
  const appearOptions = {
      // if threshold is 1, the entire element needs to be within the screen to appear
      threshold: 0.25,
      // sets how far from the edges the element needs to be to appear
      rootMargin: "0px 0px -15px 0px"
    };
  const appearOnScroll = new IntersectionObserver(function(
      elements,
      appearOnScroll
  ){
      elements.forEach(element => {
          // will tell you if element is or is not intersecting with the page
          if (!element.isIntersecting) {
            element.target.classList.remove("appear");
          } else {
            element.target.classList.add("appear");
            appearOnScroll.unobserve(element.target);
          }
        });
  },appearOptions)
  elements.forEach(element => {
      appearOnScroll.observe(element);
    });
}