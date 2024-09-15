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
function togglePopup(){
  document.getElementById("popup-box").classList.toggle("active");
}


// Get the button
let mybutton = document.getElementById("myBtn");
                                
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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