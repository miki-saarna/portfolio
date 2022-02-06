export default function FadeInEffect(elements) {
  // does not appear to be functioning properly
  const appearOptions = {
      // if threshold is 1, the entire element needs to be within the screen 
      threshold: 0,
      // sets how far from the edges the element needs to be
      rootMargin: "0px 0px -50px 0px"
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
        },
        appearOptions);
  })
  elements.forEach(element => {
      appearOnScroll.observe(element);
    });
}