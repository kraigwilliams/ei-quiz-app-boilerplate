/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the Capital of Florida?',
      answers: [
        'Orlando',
        'Miami',
        'Tallahassee',
        'Fort Lauderdale'
      ],
      correctAnswer: 'Tallahassee'
    },
    {
      question: 'What is the Capital of California?',
      answers: [
        'Los Angeles',
        'San Diego',
        'San Francisco',
        'Sacramento'
      ],
      correctAnswer: 'Sacramento'
    },
    {
      question: 'What is the Capital of Texas?',
      answers: [
        'Austin',
        'Dallas',
        'Houston',
        'Texas'
      ],
      correctAnswer: 'Austin'
    },
    {
      question: 'What is the Capital of Massachusetts?',
      answers: [
        'Salem',
        'Boston',
        'Cambridge',
        'Plymouth'
      ],
      correctAnswer: 'Boston'
    },
    {
      question: 'What is the Capital of New York?',
      answers: [
        'New York',
        'Albany',
        'Buffalo',
        'Syracuse'
      ],
      correctAnswer: 'Albany'
    }

  ],

  questionNumber: 0,
  score: 0
};

let renderQuiz = function(){
  /* This function displays html on the screen*/
  console.log('render function ran');
  $('body').html(`<header><h1>State Quiz App</h1> </header> <main>
  <h3>Do you know your state capitals?</h3>
  <h4>Let's find out!</h4>
  <form action= "https://thinkful-ei-jaguar.github.io/Quiz_AppCK/question1_wireframe.html">
      <input type= "submit" value= "Submit Answer">
          </form>
      
  <br>
  <br>
  <img src="#" alt="Map of the United States"> 
  </main>`)
};

let startQuiz =function(){
  /*This function allow the user to press a button
  to start the quiz and display the first question */
  console.log('startQuiz function ran');

}

let nextQuestion = function(){
  /*This function allows the user to press a button
  after they have answered the current question and 
  received feedback to then move on the the next question 
  in the quiz */

  console.log('nextQuestion function ran');
}

let checkAnswer = function(){
  /*This function runs when the user submits thier answer
  to the current question and checks their response with
  the correct answer then display whether they were right or wrong. */
  console.log('checkAnswer function ran');

}

let restartQuiz = function(){
/* This function runs when the user is finishes the quiz and can 
submit using a button to do the quiz over from scratch  beginning
with quesition one*/
console.log('restartQuiz function ran');
}

let showResults= function(){
  /* This functions is run when the user submits the final answer
  to the quiz questions and then displays the summary of the
  quiz showing their total score on the quiz */

  console.log('showResults function ran');
}

let handleQuizApp = function(){
  renderQuiz()
}

// when the page loads, call `handleQuizApp`
$(handleQuizApp);


/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */