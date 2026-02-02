//Navbar Animation
gsap.from("#nav-heading span",{
    duration: 0.6,
    opacity:0,
    y:20,
    stagger:0.2,
    delay:0.8,
    repeat:-1,
    yoyo: true,
    repeatDelay: 1
});

// First page contents
let tl1 = gsap.timeline();
tl1.from("#logo-img",{
    duration:1,
    delay:1,
    opacity:0
});
tl1.from("#first-page h1",{
    duration:1,
    x:-100,
    opacity:0
});
tl1.from("#first-page h2",{
    duration:1,
    x:100,
    opacity:0
});
tl1.from("#first-page p",{
    duration:1,
    y:100,
    opacity:0
});

//Middle page animation
gsap.to("#middle-page h1",{
    duration:5,
    transform:"translateX(-120%)",
    ease: "sine.out",
    scrollTrigger:{
        trigger:"#middle-page",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true
    }
});

//Second page Animation
gsap.from("#a",{
    duration:1.5,
    delay:1,
    yoyo:true,
    rotateZ:"180",
    stagger:0.8
});
gsap.from("#b",{
    duration:1.5,
    delay:1,
    yoyo:true,
    rotateZ:"360",
    stagger:0.8
});


gsap.from("#webhack-content",{
    duration:1.5,
    x:500,
    opacity:0,
    scrollTrigger:{
        trigger: "#webhack-content", 
		start: 'top 60%', 
		end: 'top 20%', 
		scrub: 1
    }
});
gsap.from("#second-page img",{
    duration:1.5,
    x:-500,
    opacity:0,
    scrollTrigger:{
        trigger: "#second-page img", 
		start: 'top 60%', 
		end: 'top 20%', 
		scrub: 1
    }
});

//Cursor effect
document.addEventListener("mousemove",(e)=>{
    var x = e.x - 10;
    var y = e.y - 10;
    gsap.to("#cursor",{
        x: x,
        y: y,
        duration: 0.5,
    });
});