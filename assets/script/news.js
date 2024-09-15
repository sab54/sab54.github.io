// NEWS PAGE 

// This code is a function called "changeTab" that takes a parameter called "tabIndex". 
// It is used to switch between different tabs on a webpage. It hides all tab contents and removes the "tab-hover" class from all tabs. 
// Then, it displays the tab content at the specified index and adds the "tab-hover" class to the corresponding tab.

function changeTab(tabIndex) {
   const tabContents = document.querySelectorAll('.tab-content');
   const tabs = document.querySelectorAll('.tab');
   tabContents.forEach(content => {
    content.style.display = 'none';
  });
  tabs.forEach(tab => {
    tab.classList.remove('tab-hover');
  });
  tabContents[tabIndex - 1].style.display = 'block';
  tabs[tabIndex - 1].classList.add('tab-hover');
}
  


// This code is a function called "toggleLanguage" that is used to switch between English and Spanish content on a webpage. 
//It takes a parameter called "tabId" which represents the ID of the tab. Inside the function, 
//it selects the English and Spanish content elements based on the provided tab ID. It then toggles the visibility of the 
//English and Spanish content by checking their current display style and changing it accordingly. 

//Additionally, the code adds event listeners to the "Switch Language" buttons for each tab. When the button is clicked, 
//it calls the "toggleLanguage" function with the corresponding tab ID to toggle the language content.

// Function to toggle between English and Spanish content
function toggleLanguage(tabId) {
  var englishContent = document.querySelector(`#${tabId} #englishContent`);
  var spanishContent = document.querySelector(`#${tabId} #spanishContent`);
  
  // Toggle visibility of English and Spanish content
  if (englishContent.style.display === "none") {
    englishContent.style.display = "block";
    spanishContent.style.display = "none";
  } else {
    englishContent.style.display = "none";
    spanishContent.style.display = "block";
  }
}

// Add event listeners to the "Switch Language" buttons for each tab
document.querySelectorAll(".tab-content").forEach(function(tab) {
  var switchLanguageButton = tab.querySelector("#switchLanguageButton");
  var tabId = tab.getAttribute("id");

  switchLanguageButton.addEventListener("click", function() {
    toggleLanguage(tabId);
  });
});


// This code is a function called "searchNews" that is used to filter and display news articles based on a search query. 
//It first retrieves the search query from an input field with the ID "searchInput". Then, it retrieves all elements with the class "tab" 
//which represent the news articles. 
//The code then iterates through each news article and compares its text content (converted to lowercase) with the search query 
//(also converted to lowercase). If the news article's text content includes the search query, the article is displayed by setting 
//its style display property to "block". Otherwise, the article is hidden by setting its style display property to "none".
function searchNews() {
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  const tabs = document.getElementsByClassName("tab");
  
  for (let i = 0; i < tabs.length; i++) {
    const tabText = tabs[i].innerText.toLowerCase();
    if (tabText.includes(searchQuery)) {
      tabs[i].style.display = "block";
    } else {
      tabs[i].style.display = "none";
    }
  }
}

// This code is a function called "addReview" that is used to add a user review to a webpage. 
//It retrieves the values entered in the name and comment input fields. It also retrieves the element with the ID 
//"reviews" where the reviews will be displayed. The code then gets the current time and formats it to display only the hour and minute.
// It appends a new review to the "reviews" element by modifying its innerHTML. The review includes the name, comment, and the formatted 
//time when it was sent. Finally, the code clears the values of the name and comment input fields to prepare for the next review.

function addReview() {
  const nameValue = document.getElementById("nameInput").value;
  const commentValue = document.getElementById("commentInput").value;
  const reviews = document.getElementById("reviews");
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  reviews.innerHTML += "<br><strong>" + nameValue + ":</strong> " + commentValue + " (Sent at " + formattedTime + ")"
  document.getElementById("nameInput").value = "";
  document.getElementById("commentInput").value = "";
};

