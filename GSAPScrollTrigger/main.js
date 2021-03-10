gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
    scrollTrigger: {
        trigger: ".c",
        start: "20% 80%",
        end: "bottom 100px",
        markers: true,
        toggleActions: "restart pause reverse pause",
    },
    x:400,
    rotation: 360,
    duration: 3
});