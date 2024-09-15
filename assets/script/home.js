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
    hearts[i].addEventListener('click', function() {
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
    dislike[i].addEventListener('click', function() {
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
loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.filter .cards .card')];
    for (var i = currentItem; i < currentItem + 3; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}    