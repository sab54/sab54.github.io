// Home page

// corousel slides
const carousel = document.querySelector('.slider');
const carouselimg = document.querySelectorAll('.slide');
const corouselWidth = carouselimg[0].clientWidth;
let currentIndex = 0;

function goToSlide(index) {
    if (index < 0 || index >= carouselimg.length) {
        return;
    }
    currentIndex = index;
    const translateX = -corouselWidth * currentIndex;
    carousel.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}
function prevSlide() {
    goToSlide(currentIndex - 1);
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);


// hearts and dislikes
const hearts = document.getElementsByClassName('fa-thumbs-up');
const counts = document.getElementsByClassName('count');
let numbers = Array.from({ length: hearts.length }, () => 0);

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        if (hearts[i].classList.contains('green')) {
            hearts[i].classList.remove('green');
            numbers[i]--;
        } else {
            hearts[i].classList.add('green');
            numbers[i]++;
        }
        counts[i].textContent = numbers[i];
    });
}

const dislike = document.getElementsByClassName('fa-thumbs-down');
const coun = document.getElementsByClassName('coun');
let numb = Array.from({ length: dislike.length }, () => 0);

for (let i = 0; i < dislike.length; i++) {
    dislike[i].addEventListener('click', function () {
        if (dislike[i].classList.contains('red')) {
            dislike[i].classList.remove('red');
            numb[i]--;
        } else {
            dislike[i].classList.add('red');
            numb[i]++;
        }
        coun[i].textContent = numb[i];
    });
}
// load more button
var loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;
loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.filter .cards .card')];
    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// responsive screen
const bars = document.querySelector(".bars");
const nav = document.querySelector("nav");

bars.onclick = () => {
    nav.classList.toggle("active");
};

// when button pressed night mode and when button pressed light mode

function nightmode() {
    const wasNightmode = localStorage.getItem('nightmode') === 'true';
    localStorage.setItem('nightmode', !wasNightmode);
    const element = document.body;
    element.classList.toggle('night-mode', !wasNightmode);
}

// when button pressed small mode and when button pressed large mode

function fontchange() {
    const wassmall = localStorage.getItem('fontchange') === 'true';
    localStorage.setItem('fontchange', !wassmall);
    const y = document.getElementById("appearance")
    y.classList.toggle('text-size', !wassmall);
}
// when reloaded the page or gone to other page then it will save the dark mode button or small font button
function onload() {
    document.body.classList.toggle('night-mode', localStorage.getItem('nightmode') === 'true');
    document.getElementById("appearance").classList.toggle('text-size', localStorage.getItem('fontchange') === 'true');
}

// settings popup box will contain dark mode and font mode and many more
function togglePopup() {
    document.getElementById("popup-box").classList.toggle("active");
}


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
