
// This code defines a function called "showQuiz" that displays or hides a quiz based on its ID.

//initializes a variable called "currentOpenQuiz" and sets its initial value to null. 
//This variable will be used to keep track of the currently open quiz.
var currentOpenQuiz = null;
// The line "var quizDiv = document.getElementById(quizDivId);
//" retrieves the HTML element with the specified ID and assigns it to the variable "quizDiv". 
//This allows the code to manipulate and interact with the quiz element on the webpage.
function showQuiz(quizDivId) {
    var quizDiv = document.getElementById(quizDivId);

    // his code block is responsible for showing or hiding the quiz based on its current display state.
    //- The first `if` statement checks if there is a currently open quiz (`currentOpenQuiz`). If there is, it sets its display style to "none" to hide it.
    //- The second `if` statement checks if the quiz is currently hidden (display style is "none"). If it is hidden, it sets the display style to "block" to show it, and assigns the quiz element to `currentOpenQuiz` to keep track of the currently open quiz.
    //- If the quiz is not hidden (display style is not "none"), the `else` block is executed. It sets the display style to "none" to hide the quiz, and sets `currentOpenQuiz` to null since there is no longer an open quiz.
    if (currentOpenQuiz) {
        currentOpenQuiz.style.display = "none";
    }
    if (quizDiv.style.display === "none") {
        quizDiv.style.display = "block";
        currentOpenQuiz = quizDiv;
    } else {
        quizDiv.style.display = "none";
        currentOpenQuiz = null;
    }
}

const questionElement1 = document.getElementById('question1');
const optionsElement1 = document.getElementById('options1');
const feedbackElement1 = document.getElementById('feedback1');
const nextButton1 = document.getElementById('next-btn1');

const questionElement2 = document.getElementById('question2');
const optionsElement2 = document.getElementById('options2');
const feedbackElement2 = document.getElementById('feedback2');
const nextButton2 = document.getElementById('next-btn2');


const questionElement3 = document.getElementById('question3');
const optionsElement3 = document.getElementById('options3');
const feedbackElement3 = document.getElementById('feedback3');
const nextButton3 = document.getElementById('next-btn3');

// These lines of code define an array called `questions1` that contains multiple objects. Each object represents a question and its corresponding options and answer. Here's what each part of the code does:
//- `const questions1 = [` declares a constant variable called `questions1` and assigns it an array.
//- Inside the array, there are multiple objects, each representing a question. Each object has the following properties:
// - `question`: Represents the question itself.
// - `options`: Represents an array of options for the question.
//  - `answer`: Represents the index of the correct answer within the `options` array.
//This code is used to store a set of questions, options, and answers, which can be used in a quiz or any other interactive application that requires question-based functionality.

const questions1 = [
    {
        question: 'When did the Winchcombe meteorite fall to Earth?',
        options: ['Feburary 2019', 'Feburuary 1998', 'Feburary 2021'],
        answer: 2
    },
    {
        question: 'Which country did the Winchcombe meteorite fall in?',
        options: ['United Kingdom', 'India', 'Austrila'],
        answer: 0
    },
    {
        question:'What is the estimated age of the Winchcombe meteorite?',
        options: [' 10000 years',  '100000 years' , '4.6 billion yearold '],
        answer: 1
    }
];
const questions2 = [
    {
        question: 'What is the main objective of Chandrayaan 3?',
        options: [' demonstrate safe and soft landing on the moons surface, demonstrate rover operations, and conduct scientific experiments on the lunar surface. ', 'To search for water ice on the moon', 'To establish a permanent human settlement on the moon'],
        answer: 0
    },
    {
        question: 'Which organization is responsible for the Chandrayaan 3 mission?',
        options: ['NASA', 'Indian Space Research Organisation (ISRO)-color', 'European Space Agency (ESA)'],
        answer: 1
    },
    {
        question: 'Which lunar rover is planned to be deployed as part of the Chandrayaan 3 mission?',
        options: ['Vikram', 'Pragyan', 'Mangalyaan'],
        answer: 1
    }
];

const questions3 = [
    {
        question: 'Who sucessfully launched the first liquid fueled rocket?',
        options: ['Dmitri Mendeleev' , 'Robert Goddard ', 'Newton'],
        answer: 1
    },
    {
        question: 'When was the first successful launch of a liquid-fueled rocket?',
        options: [' 1926',' 1942',' 1957'],
        answer: 0
    },
    {
        question: 'what was liquid fueld rocket made of',
        options: [' water oxygen', 'nitrogen', 'sodium chloride'],
        answer: 0
    }
];

let currentQuestionIndex1 = 0;
let currentQuestionIndex2 = 0;
let currentQuestionIndex3 = 0;

// This function sets up the question and options for a quiz on the webpage. Users can click on the buttons to select their answers
function showQuestion1(questionIndex) {
    const question = questions1[questionIndex];
    questionElement1.textContent = question.question;
    optionsElement1.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer1(index));
        optionsElement1.appendChild(button);
    });
    
    feedbackElement1.textContent = '';
    nextButton1.style.display = 'none';
}
function showQuestion2(questionIndex) {
    const question = questions2[questionIndex];
    questionElement2.textContent = question.question;
    
    optionsElement2.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer2(index));
        optionsElement2.appendChild(button);
    });
    feedbackElement2.textContent = '';
    nextButton2.style.display = 'none';
}
function showQuestion3(questionIndex) {
    const question = questions3[questionIndex];
    questionElement3.textContent = question.question;
    
    optionsElement3.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer3(index));
        optionsElement3.appendChild(button);
    });
    
    feedbackElement3.textContent = '';
    nextButton3.style.display = 'none';
}

//two functions here, `checkAnswer1` , `checkAnswer2` and 'checkAnswer3', which handle checking the user's selected answer in the quiz. 
//They compare the selected index with the correct index of the current question and provide feedback accordingly. 
//If the selected index matches the correct index, it displays "Correct!" in the feedback element. Otherwise, it displays "Wrong!".
// Then, it shows the next button for the user to proceed to the next question.
function checkAnswer1(selectedIndex) {
    const correctIndex = questions1[currentQuestionIndex1].answer;
    if (selectedIndex === correctIndex) {
        feedbackElement1.textContent = 'Correct!';
    } else {
        feedbackElement1.textContent = 'Wrong!';
    }
    nextButton1.style.display = 'block';
}

function checkAnswer2(selectedIndex) {
    const correctIndex = questions2[currentQuestionIndex2].answer;
    if (selectedIndex === correctIndex) {
        feedbackElement2.textContent = 'Correct!';
    } else {
        feedbackElement2.textContent = 'Wrong!';
    }
    nextButton2.style.display = 'block';
}

function checkAnswer3(selectedIndex) {
    const correctIndex = questions3[currentQuestionIndex3].answer;
    if (selectedIndex === correctIndex) {
        feedbackElement3.textContent = 'Correct!';
    } else {
        feedbackElement3.textContent = 'Wrong!';
    }
    nextButton3.style.display = 'block';
}

showQuestion1(currentQuestionIndex1);
showQuestion2(currentQuestionIndex2);
showQuestion3(currentQuestionIndex3);

// adds event listeners to the `nextButton1` , `nextButton2` 'nextButton3' elements. 
//When the user clicks on either button, it increments the `currentQuestionIndex1` or `currentQuestionIndex2` or 'currentQuestionIndex3'
//variable, depending on which button was clicked. 
//If there are more questions remaining in the respective quiz, 
//it calls the `showQuestion1` or `showQuestion2` function with the updated index to display the next question. 
//If there are no more questions remaining, it updates the text content of the `questionElement1` or `questionElement2` 
//to indicate that the quiz is completed. It also clears the options and feedback elements, and hides the next button. 
//This allows the user to progress through the quiz and see the results at the end.

nextButton1.addEventListener('click', () => {
    currentQuestionIndex1++;
    if (currentQuestionIndex1 < questions1.length) {
        showQuestion1(currentQuestionIndex1);
    } else {
        questionElement1.textContent = 'Quiz 1 completed!';
        optionsElement1.innerHTML = '';
        feedbackElement1.textContent = '';
        nextButton1.style.display = 'none';
    }
});

nextButton2.addEventListener('click', () => {
    currentQuestionIndex2++;
    if (currentQuestionIndex2 < questions2.length) {
        showQuestion2(currentQuestionIndex2);
    } else {
        questionElement2.textContent = 'Quiz 2 completed!';
        optionsElement2.innerHTML = '';
        feedbackElement2.textContent = '';
        nextButton2.style.display = 'none';
    }
});

nextButton3.addEventListener('click', () => {
    currentQuestionIndex3++;
    if (currentQuestionIndex3 < questions3.length) {
        showQuestion3(currentQuestionIndex3);
    } else {
        questionElement3.textContent = 'Quiz 3 completed!';
        optionsElement3.innerHTML = '';
        feedbackElement3.textContent = '';
        nextButton3.style.display = 'none';
    }
});