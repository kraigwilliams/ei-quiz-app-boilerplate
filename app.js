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

let render = function(){
  /* This function displays html on the screen*/
  console.log('render function is running');
}

let startQuiz =function(){
  /*This function allow the user to press a button
  to start the quiz and display the first question */
  console.log('startQuiz function is running');

}

let nextQuestion = function(){
  /*This function allows the user to press a button
  after they have answered the current question and 
  received feedback to then move on the the next question 
  in the quiz */

  console.log('nextQuestion function is running');
}

let checkAnswer = function(){
  /*This function runs when the user submits thier answer
  to the current question and checks their response with
  the correct answer then display whether they were right or wrong. */
  console.log('checkAnswer function is running');

}

let restartQuiz = function(){
/* This function runs when the user is finishes the quiz and can 
submit using a button to do the quiz over from scratch  beginning
with quesition one*/
console.log('restartQuiz function is running');
}

let showResults= function(){
  /* This functions is run when the user submits the final answer
  to the quiz questions and then displays the summary of the
  quiz showing their total score on the quiz */

  console.log('showResults function is running');
}



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