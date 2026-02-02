gsap.from("#intro>h1>span",{
    duration:1,
    opacity:0,
    y:30,
    stagger:0.8
});

gsap.to("#marquee",{
    transform:"translate(-700px)",
    ease:"none",
    duration:3,
    repeat:-1
});

let arrow = document.getElementsByClassName("fa-arrow-down");

window.addEventListener("wheel", (e) => {
    if(e.deltaY < 0){
        gsap.to(arrow,{
            transform:"rotatez(90deg)",
        });
        gsap.to("#marquee",{
            transform:"translate(-300px)",
            ease:"none",
            duration:3,
            repeat:-1
        });
    }
    else{
        gsap.to(arrow,{
            transform:"rotateZ(-90deg)",
        });
        gsap.to("#marquee",{
            transform:"translate(300px)",
            ease:"none",
            duration:3,
            repeat:-1
        });
    }
});

//Cursor effect
document.addEventListener("mousemove",(e)=>{
    var x = e.x - 10;
    var y = e.y - 10;
    if(e.x===null && e.y===null){
        gsap.to("#cursor",{
            width:"0px",
            height: "0px",
            duration: 1.5
        });
    }
    else{
        gsap.to("#cursor",{
            x: x,
            y: y,
            duration: 1
        });
    }
});

document.querySelectorAll("#page2 a").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        document.getElementById("cursor").innerText = elem.id;

        gsap.to("#cursor", {
            width: "60px",
            height: "40px",
            borderRadius: "5px",
            duration: 0.3,
        });
    });
});

document.querySelectorAll("#page2 a").forEach((elem) => {
    elem.addEventListener("mouseleave", () => {
        document.getElementById("cursor").innerText = "";

        gsap.to("#cursor", {
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            duration: 0.3,
        });
    });
});


