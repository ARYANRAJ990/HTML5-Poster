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
    trashcan1.style.left = t1l+12;
    trashcan1.style.top =  t1t-75;
    trashcan1.style.transform = "rotate(" + t1r + "deg)";
    trashcan1.style.transformOrigin = "\""+t1o+"\"";

    //trashcanbody
    trashcan2.style.left = t2l+12;
    trashcan2.style.top =  t2t-75;
    trashcan2.style.transform = "rotate(" + t2r + "deg)";
    trashcan2.style.transformOrigin = t2o;

    //garbage
    Garbage1.style.left = g1l+12;
    Garbage1.style.top =  g1t-75;
    Garbage1.style.transform = "rotate(" + g1r + "deg)";
    Garbage1.style.transformOrigin = g1o;
}

var frameIncrease = 0;
frameCount= 0;
function update(){
    frameIncrease++;
    pvalue = 0;
    if (frameCount <= 4){
        pvalue = 0;
    }
    else{
        pvalue = frameCount-5;
    }
    if(frameIncrease == 4){
        frameIncrease = 0;
        frameCount++;
        if (frameCount >= 100){
            frameCount = 0;
        }
    }
    if (frameCount >= 0 && frameCount <= 15){
        updateValues(0, 150, frameCount*4, "85%,50%", 0, 150, 0, "80% 100%", (-200+(pvalue*20)), (0+(pvalue*20)), -45, "50% 50%");
    }
    if (frameCount == 16){
        updateValues(0, 150, 60, "85%,50%", 0, 150, 0, "80% 100%", 20, 225, -35, "50% 50%");
    }
    if (frameCount == 17){
        updateValues(5, 150, 59, "85%,50%", 0, 150, 1, "80% 100%", 25, 225, -35, "50% 50%");
    }
    if (frameCount == 18){
        updateValues(10, 150, 58, "85%,50%", 0, 150, 2, "80% 100%", 26, 225, -35, "50% 50%");
    }
    if (frameCount == 19){
        updateValues(12, 150, 60, "85%,50%", 0, 150, 4, "80% 100%", 28, 225, -35, "50% 50%");
    }
    if (frameCount == 20){
        updateValues(14, 150, 61, "85%,50%", 0, 150, 4, "80% 100%", 30, 225, -34, "50% 50%");
    }
    if (frameCount == 21){
        updateValues(14, 150, 62, "85%,50%", 0, 150, 6, "80% 100%", 35, 226, -31, "50% 50%");
    }
    if (frameCount == 22){
        updateValues(16, 150, 59, "85%,50%", 0, 150, 6, "80% 100%", 36, 228, -31, "50% 50%");
    }
    if (frameCount == 23){
        updateValues(16, 150, 60, "85%,50%", 0, 150, 6, "80% 100%", 36, 230, -30, "50% 50%");
    }
    if (frameCount == 24){
        updateValues(16, 150, 60, "85%,50%", 0, 150, 6, "80% 100%", 36, 234, -27, "50% 50%");
    }
    if (frameCount == 25){
        updateValues(14, 150, 60, "85%,50%", 0, 150, 7, "80% 100%", 36, 240, -23, "50% 50%");
    }
    if (frameCount == 26){
        updateValues(14, 150, 55, "85%,50%", 0, 150, 6, "80% 100%", 36, 239, -20, "50% 50%");
    }
    if (frameCount == 27){
        updateValues(14, 150, 50, "85%,50%", 0, 150, 6, "80% 100%", 37, 238, -17, "50% 50%");
    }
    if (frameCount == 28){
        updateValues(12, 150, 45, "85%,50%", 0, 150, 4, "80% 100%", 37, 245, -14, "50% 50%");
    }
    if (frameCount == 29){
        updateValues(11, 150, 40, "85%,50%", 0, 150, 3, "80% 100%", 38, 250, -11, "50% 50%");
    }
    if (frameCount == 30){
        updateValues(10, 150, 35, "85%,50%", 0, 150, 2, "80% 100%", 39, 255, -8, "50% 50%");
    }
    if (frameCount == 31){
        updateValues(8, 150, 30, "85%,50%", 0, 150, 1, "80% 100%", 40, 260, -5, "50% 50%");
    }
    if (frameCount == 32){
        updateValues(6, 150, 25, "85%,50%", 0, 150, 0, "80% 100%", 40, 266, -2, "50% 50%");
    }
    if (frameCount == 33){
        updateValues(4, 150, 20, "85%,50%", 0, 150, 0, "80% 100%", 40, 272, 0, "50% 50%");
    }
    if (frameCount == 34){
        updateValues(2, 150, 15, "85%,50%", 0, 150, 0, "80% 100%", 40, 279, 0, "50% 50%");
    }
    if (frameCount == 35){
        updateValues(0, 150, 10, "85%,50%", 0, 150, 0, "80% 100%", 40, 287, 0, "50% 50%");
    }
    if (frameCount == 36){
        updateValues(0, 150, 5, "85%,50%", 0, 150, 0, "80% 100%", 40, 290, 0, "50% 50%");
    }
    if (frameCount == 37){
        updateValues(0, 150, 0, "85%,50%", 0, 150, 0, "80% 100%", 40, 290, 0, "50% 50%");
    }
}
function loop(){
    update();
    requestAnimationFrame(loop);
}

loop();