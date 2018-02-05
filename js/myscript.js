// JavaScript source code


function getrandomNum() {
    var randomNum;


    //box1
    do {
        randomNum = Math.floor(Math.random() * 10);

    } while (randomNum == 0 || randomNum >= 4)  //generate another number
    //randomNum is ready to be used


    if (randomNum == 1) {
        document.getElementById("box1").className = "one";   
    }

    else if (randomNum == 2) {
        document.getElementById("box1").className = "two";
    }

    else if (randomNum == 3) {
        document.getElementById("box1").className = "three";
    }


    //box2

    do {
        randomNum = Math.floor(Math.random() * 10);

    } while (randomNum == 0 || randomNum >= 4)  //generate another number
    //randomNum is ready to be used


    if (randomNum == 1) {
        document.getElementById("box2").className = "one";
    }

    else if (randomNum == 2) {
        document.getElementById("box2").className = "two";
    }

    else if(randomNum == 3) {
        document.getElementById("box2").className = "three";
    }

   

    //box3

    do {
        randomNum = Math.floor(Math.random() * 10);

    } while (randomNum == 0 || randomNum >= 4)  //generate another number
    //randomNum is ready to be used


    if (randomNum == 1) {
        document.getElementById("box3").className = "one";
    }

    else if (randomNum == 2) {
        document.getElementById("box3").className = "two";
    }

    else if(randomNum == 3) {
        document.getElementById("box3").className = "three";
    }

    var b1Class = document.getElementById("box1").className;
    var b2Class = document.getElementById("box2").className;
    var b3Class = document.getElementById("box3").className;

    //document.write(b1Class);
    //document.write(b2Class);
    //document.write(b3Class);


    if (b1Class == b2Class && b2Class == b3Class) {
        document.getElementById("msg").innerHTML = "Congratulations! You've Won!!!"
    }

    else { document.getElementById("msg").innerHTML = "Sorry! Try again!" }
    
}

    
















/*if all 3 colors match change the text in <p id="msg"> to say "Congratulations, you won!"
if the colors don't match, change the text in <p id-"msg? to say "Sorry, try again..."*/


