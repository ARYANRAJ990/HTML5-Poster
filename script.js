var Typed = new Typed(".auto-type",{
    strings: ["Cleanliness begins with me, and ends with we.^1500","Cleanliness is not a choice, it's a responsibility.^1500","Cleanliness is not just about the environment, it's about respect.^1500","Cleanliness is not a one-time task, it's a daily habit.^1500","Cleanliness is a fundamental right.^1500", "Cleanliness is not only the absence of dirt but also the presence of beauty.^1500"],
    typeSpeed: 20,
    backSpeed: 20,
    loop: true,
})


var trashcan1 = document.getElementById("trashcan1");
var trashcan2 = document.getElementById("trashcan2");
var Garbage1 = document.getElementById("Garbage1");

function updateValues(t1l, t1t, t1r, t1o, t2l, t2t, t2r, t2o, g1l, g1t, g1r, g1o){
    //trashcanlid
    trashcan1.style.left = t1l;
    trashcan1.style.top =  t1t;
    trashcan1.style.transform = "rotate(" + t1r + "deg)";
    trashcan1.style.transformOrigin = "\""+t1o+"\"";

    //trashcanbody
    trashcan2.style.left = t2l;
    trashcan2.style.top =  t2t;
    trashcan2.style.transform = "rotate(" + t2r + "deg)";
    trashcan2.style.transformOrigin = t2o;

    //garbage
    Garbage1.style.left = g1l;
    Garbage1.style.top =  g1t;
    Garbage1.style.transform = "rotate(" + g1r + "deg)";
    Garbage1.style.transformOrigin = g1o;
}

var frameIncrease = 0;
frameCount= 0;
function update(){
    frameIncrease++;
    pvalue = 0;
    if (frameCount <= 5){
        pvalue = 0;
    }
    else{
        pvalue = frameCount;
    }
    if(frameIncrease == 8){
        frameIncrease = 0;
        frameCount++;
        if (frameCount == 15){
            frameCount = 15;
        }
    }
    if (frameCount >= 0 && frameCount <= 15){
        updateValues(0, 150, frameCount*4, "85%,50%", 0, 150, 0, "80% 100%", (-200+(frameCount*4)), (0+(frameCount*4)), -45, "50% 50%");
    }
}
function loop(){
    update();
    requestAnimationFrame(loop);
}

loop();

trashcan1.style.transformOrigin = "85% 50%";
trashcan1.style.transform = "rotate(" + 0 + "deg)";
trashcan2.style.transformOrigin = "80% 100%";
trashcan2.style.transform = "rotate(" + 0 + "deg)";
Garbage1.style.transform = "rotate(" + -45 + "deg)";
Garbage1.style.left = "-200";
Garbage1.style.top = "0";
Garbage1.style.transformOrigin = "50% 50%";