// Subscribe page

const newsletterForm = document.getElementById('newsletterForm');
const notification = document.getElementById('notification');

newsletterForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  const email = document.getElementById('email').value;
  // Perform newsletter subscription logic here (e.g., send email confirmation)
  displayNotification(`Subscribed to Newsletter with email: ${email}`, 'green' );
  newsletterForm.reset(); // Reset the form
});


// Function to display notifications
function displayNotification(message, color) {
  notification.style.color = color;
  notification.textContent = message;
}

// This code adds a click event listener to each subscribe button. When a button is clicked, it toggles the "clicked"
// class on the button itself and the "pink" class on its parent element. This allows for visual changes, such as changing 
//the button's appearance or the background color of the parent element.
const subscribeBtns = document.querySelectorAll('.subscribe-button button');
subscribeBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('clicked');
    this.parentElement.parentElement.classList.toggle('pink');
  });
});

// This code defines a function called `username()`. 
//When called, it retrieves the values of the elements with the IDs "fname" and "sname". It then converts the values to uppercase and assigns them back 
//to the respective elements. This can be used to convert the inputted names to uppercase.
function username() {
    let fullname = document.getElementById("fname");
    fullname.value = fullname.value.toUpperCase();

    let surname = document.getElementById("sname");
    surname.value = surname.value.toUpperCase();
  }
