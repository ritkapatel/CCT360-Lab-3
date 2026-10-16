// initalize variables for images
let image1=document.getElementById("image1");
let image2=document.getElementById("image2");
let image3=document.getElementById("image3");

// initialize variables for image change states
let changeimage1 = true;
let changeimage2 = true;
let changeimage3 = true;

// function to change the image of the first image element
function changeImage1() {
    // change image back and forth
    if (changeimage1 == true) {
        image1.src = "css/images/fighting.jpeg";
        changeimage1 = false;
    }
    else{
        image1.src = "css/images/sleeping.jpg";
        changeimage1 = true
    }
}

// function to change the image of the second image element
function changeImage2() {
    // change image back and forth
    if (changeimage2 == true) {
        image2.src = "css/images/running.webp";
        changeimage2 = false;
    }
    else{
        image2.src = "css/images/fighting.jpeg";
        changeimage2 = true
    }
}

// function to change the image of the third image element
function changeImage3() {
    // change image back and forth
    if (changeimage3 == true) {
        image3.src = "css/images/sleeping.jpg";
        changeimage3 = false;
    }
    else{
        image3.src = "css/images/running.webp";
        changeimage3 = true
    }
}

// function to change all images to story A
function storyA() {
    // reset all changeimage variables to false
    changeimage1 = false;
    changeimage2 = false;
    changeimage3 = false;

    // call functions to change images
    changeImage1();
    changeImage2();
    changeImage3();
}

// function to change all images to story B
function storyB() {
    // reset all changeimage variables to true
    changeimage1 = true;
    changeimage2 = true;
    changeimage3 = true;

    // call functions to change images
    changeImage1();
    changeImage2();
    changeImage3();
}

// Initalize button to the html buttons
let btn1 = document.getElementById("change1");
let btn2 = document.getElementById("change2");
let btn3 = document.getElementById("change3");
let btn4 = document.getElementById("Story A");
let btn5 = document.getElementById("Story B");

// add functionality to the buttons and change the images
btn1.addEventListener("click", changeImage1);
btn2.addEventListener("click", changeImage2);
btn3.addEventListener("click", changeImage3);
btn4.addEventListener("click", storyA);
btn5.addEventListener("click", storyB);
