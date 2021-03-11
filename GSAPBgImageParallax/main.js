gsap.registerPlugin(ScrollTrigger);

var container = document.querySelector('#scroll-container');
console.log(container);
var height = container.clientHeight;
console.log(height);

document.body.style.height = height + "px";
console.log('Setting container y = ');
console.log(-(height - document.documentElement.clientHeight));
gsap.to(container, {
    y: -(height - document.documentElement.clientHeight),
    scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to("#blk-1", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: self => {
            //console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
            console.log(self.scroll());
        }
    }
});