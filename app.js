const STORE = {

  questions: [
    {

      question: 'What is the Capital of Florida?',
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
  score: 0,
  quizBegin: false
};

function questionIncrement () { 
  console.log('questionIncrement ran');
  /* Question incrementer */
    STORE.questionNumber++; 
  };

function quizHomePage() {
console.log('quizHomePage ran')

const homePageHTML = 
` <header><h1>State Quiz App</h1></header>
  <h1>Do you know your state capitals?</h1>
  <h2>Let's find out!</h2>

  <form id = "start-page">
  <input type="button" id="start-quiz" aria-label="Start Page Button" value="Start Quiz"></input>
  </form>

  <br><br>
  <img src="#" alt="Map of the United States"> 
  </main>`

$('body').html(homePageHTML); 
// ran aXe and was dinged for changing header tags out of order....fixed to <h1> THEN <h2>, can style in CSS (will do for results page)
};

function resultsPage() {
  console.log('resultsPage ran')
  const resultsHTML = 
  `<header class = "Results Header">
   <h1>Final Results</h1>
  </header>
  <h2>You got x out of 5!</h2>

  <form id = "Restart Quiz>
  <input type="submit" id="restart-quiz" aria-label="Restart Quiz Button" value= "Click to Try Again"></input>
  </form>
  
  <br>
  <br>
  <img src="#" alt="Map of the United States"> 
  `
  $('body').html(resultsHTML);
};

function questionHeaders() {
  console.log('questionHeaders ran')
  const headers = `<h2>${STORE.questions[STORE.questionNumber].question} </h2>`
  $('header').html(headers);
}

function renderQuestions() {
    console.log('renderQuestions ran')
    
    const answersHTML = STORE.questions[STORE.questionNumber].answers.map(answer => {
    return `<form id ="answers"><input type="radio" lang="en" name="answers" value="${answer}">${answer}</input>/form>
    <br><br>`
    });

    //add score and question number tracker here too with const

    const buttonHTML = 
    `<input type="button" id="submit-answer" aria-label="Submit Answer Button" value="Submit Answer"></input>/`

    $('main').html(answersHTML + buttonHTML); //join together so that they will be on the same page when rendered 
};

function initializeQuiz() {
  console.log('initialize quiz ran'); 
  $('document').on("click", "#start-quiz", function(event) {  
    STORE.beginQuiz = true;   
    renderQuiz(); 
  });
  $('document').on("click,", "#submit-answer", function(event) {
    renderQuiz(); 
    questionIncrement(); 
  });
  renderQuiz(); 
}

function renderQuiz() {
  console.log('renderQuiz function ran')  
  if (STORE.quizBegin === false) {
    quizHomePage();
  }
  else if (STORE.questionNumber < 0 && STORE.questionNumber <= 5) {
    renderQuestions(); 
    questionHeaders(); 
    questionIncrement(); 
  }
  else if (STORE.questionNumber > 5) {
    resultsPage(); 
  }
}; 

$(initializeQuiz)