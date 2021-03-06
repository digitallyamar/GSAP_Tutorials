//var red_tween = gsap.to(".red-anime", {duration:2, x:300, y:100, rotate: 90, scale:0.5, ease:"elastic.out(1, 0.3)", boxShadow: "0px 0px 20px 20px #f00"});
//var yellow_tween = gsap.to(".yellow-anime", {duration:2, x:400, y:125, rotate: 180, scale:0.5, ease:"elastic.out(1, 0.3)", boxShadow: "0px 0px 20px 20px #ff0"});

//var green_tween = gsap.fromTo(".green-anime", {x:900}, {duration:2, x:500, y:150, scale:0.5, rotate:360, ease:"elastic.out(1, 0.3)", boxShadow: "0px 0px 20px 20px #0f0"});
//var blue_tween = gsap.fromTo(".blue-anime", {x:900}, {duration:2, x:600, y:175, scale:0.5, rotate:360, ease:"elastic.out(1, 0.3)", boxShadow: "0px 0px 20px 20px #00f"});

var tl = gsap.timeline({repeat: 30, repeatDelay: 0, defaults: {duration:1} });

tl.to(".red-anime", {x:300, y:100, rotate: 90, scale:0.5, ease:"elastic.out(1, 0.3)", boxShadow: "0px 0px 20px 20px #f00"})
.to(".yellow-anime", {x:400, y:125, rotate: 180, scale:0.5, ease:"elastic.out(1, 0.3)", boxShadow: "0px 0px 20px 20px #ff0"})
.fromTo(".green-anime", {x:900}, {x:500, y:150, scale:0.5, rotate:360, ease:"elastic.out(1, 0.3)", boxShadow: "0px 0px 20px 20px #0f0"})
.fromTo(".blue-anime", {x:900}, {x:600, y:175, scale:0.5, rotate:360, ease:"elastic.out(1, 0.3)", boxShadow: "0px 0px 20px 20px #00f"});
//yellow_tween.timeScale(0.5);
//green_tween.timeScale(0.5);
//blue_tween.timeScale(0.5);