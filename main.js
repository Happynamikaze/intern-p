gsap.registerPlugin(ScrollTrigger);
gsap.to(".bottle-cap", {
  y: "430px",
  duration: 1,
});
gsap.to(".bottle-cap", {
  y: "550px",
  delay: 1,
  duration: 1,
});
gsap.to(".bottle-body", {
  y: "50px",
  delay: 1,
  duration: 1,
});
gsap.from(".hero-content-wrapper", {
  scale: 0.6,
  duration: 1,
  delay: 0.7,
  ease: "power1.out",
});
gsap.from(".content-text .content:not(div.content)", {
  opacity: 0,
  scale: 0.8,
  duration: 2,
  delay: 1.5,
  stagger: 0.3,
  // ease: 'power3.out'
});
gsap.from(".content-text div.content", {
  opacity: 0,
  duration: 2,
  y: "40",
  delay: 1.6,
});
gsap.from(".bottle-odd", {
  y: "1000",
  opacity: 0,
  ease: "power3.out",
  duration: 2,
  scrollTrigger: {
    trigger: ".smart-section",
    start: "top center",
  },
});
gsap.from(".bottle-even", {
  y: "-1000",
  opacity: 0,
  ease: "power3.out",
  duration: 2,
  scrollTrigger: {
    trigger: ".smart-section",
    start: "top center",
  },
});