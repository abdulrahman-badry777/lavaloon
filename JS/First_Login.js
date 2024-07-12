const box = document.querySelector('.landing');
const content = document.querySelector('.landing .content');

// Create the animation
anime({
    targets: box,            // Target element to animate
    opacity: [0,1],         // Animation property and value
    duration: 700, 
    easing: 'easeInOutQuad'  // Easing function
});

anime({
    targets: content,            // Target element to animate
    translateX: [70,0],         // Animation property and value
    duration: 1000, 
    easing: 'easeInOutQuad'  // Easing function
});

let boxs = document.querySelector('.cards .container')

        anime({
            targets: boxs,            // Target element to animate
            translateX: [-30,0],         // Animation property and value
            duration: 2000, 
            easing: 'easeInOutQuad'  // Easing function
        });
    let content_text = document.querySelector('.sec-two .container .content')
    let sec = document.querySelector('.sec-two');
        window.onscroll = function () {
            if( window.scrollY >= sec.offsetTop) {
                     // Target element to animate
                     content_text.style.right = '100px';         // Animation property and value
                };
};

let sliderImages  = Array.from(document.querySelectorAll(".slider-container img"));
let sliderLenght = sliderImages.length;

let sliderTextNum = document.querySelector("#slider-number");
let currentSlide = 1;

let nextbtn = document.querySelector(".next");
let prevbtn = document.querySelector(".prev");

//Make the ul
let pagenationEle = document.createElement("ul");
pagenationEle.setAttribute("id","pagenation-ul")
// Make the li
for (let i = 0; i < sliderLenght; i++) {
    let myli = document.createElement("li");
    myli.setAttribute("data-index",i);
    myli.innerHTML = i+1;
    pagenationEle.appendChild(myli);
}

// add ul and li to page
let myindi = document.querySelector(".indicators");
myindi.appendChild(pagenationEle);
let mylisform = Array.from(pagenationEle.childNodes);
// loop through bullents
mylisform.forEach(ele => {
    ele.onclick = function(e) {
        currentSlide =  +e.target.innerHTML  ;
        checker();
    }
});

nextbtn.onclick=function (e) {
    if(currentSlide === sliderLenght) {
        return false;
    }
    else {
        currentSlide++;
        checker();
    }
    
};

prevbtn.onclick = function () {
    if(currentSlide === 1) {
        return false;
    }
    else {
        currentSlide--;
        checker();
    }
}
checker();
function checker() {
    sliderTextNum.textContent = "slide#" + currentSlide + "of " +  sliderLenght;
    removeAll();
    mylisform[currentSlide-1].classList.add("active");
    sliderImages[currentSlide-1].classList.add("active");
    if(currentSlide === 1) {
        prevbtn.classList.add("disable");
    }
    else {
        prevbtn.classList.remove("disable");
    }
    if(currentSlide === sliderLenght ) {
        nextbtn.classList.add("disable");
    }
    else {
        nextbtn.classList.remove("disable");
    }
}

function removeAll() {
    sliderImages.forEach(ele => {
        ele.classList.remove("active");
    });
    mylisform.forEach(ele => {
        ele.classList.remove("active");
    });
}
