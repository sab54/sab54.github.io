// Feedback page

// This code adds a click event listener to the submit button. 
//When the button is clicked, it sets the display property of the confirmation message element to "block" and changes 
//its inner HTML to display the message "Thank You for the feedback." This code is used to show a confirmation message after 
//submitting a review.
const submitButton = document.getElementById("review-sent");
const confirmationMessage = document.getElementById("confirmationMessage");

submitButton.addEventListener("click", function() {
confirmationMessage.style.display = "block";
confirmationMessage.innerHTML = "<br> Thank You for the feedback.";
});