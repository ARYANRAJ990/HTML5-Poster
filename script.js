var Typed = new Typed(".auto-type",{
    strings: ["Cleanliness begins with me, and ends with we.^1500","Cleanliness is not a choice, it's a responsibility.^1500","Cleanliness is not just about the environment, it's about respect.^1500","Cleanliness is not a one-time task, it's a daily habit.^1500","Cleanliness is a fundamental right.^1500", "Cleanliness is not only the absence of dirt but also the presence of beauty.^1500"],
    typeSpeed: 20,
    backSpeed: 20,
    loop: true,
})

var frameIncrease = 0;
frameCount= 1;
var angle = 0;
function update(){
    angle+=1;
    frameIncrease++;
    if(frameIncrease == 24){
        frameIncrease = 0;
        frameCount++;
        if (frameCount == 5){
            frameCount = 1;
        }
    }

}
function frame(){
    trashcan2.style.transform = "rotate(" + angle + "deg)";
}
function loop(){
    update();
    frame();
    requestAnimationFrame(loop);
}

var trashcan1 = document.getElementById("trashcan1");
var trashcan2 = document.getElementById("trashcan2");
var Garbage1 = document.getElementById("Garbage1");

trashcan1.style.transformOrigin = "85% 50%";
trashcan1.style.transform = "rotate(" + 0 + "deg)";
trashcan2.style.transformOrigin = "80% 100%";
trashcan2.style.transform = "rotate(" + 0 + "deg)";
Garbage1.style.transform = "rotate(" + -45 + "deg)";
Garbage1.style.left = "-200";
Garbage1.style.top = "0";
Garbage1.style.transformOrigin = "50% 50%";