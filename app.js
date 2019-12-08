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
  userScore: 0,
  quizBegin: false
};

function questionIncrement () { 
  console.log('questionIncrement ran');
    STORE.questionNumber++;
  };

function updateScore() {
  STORE.userScore++;
};

function quizHomePage() {
console.log('quizHomePage ran')

  const homeHeaderHTML= 
  `<header><h1>State Quiz App</h1>
  </header>
  <h1>Do you know your state capitals?</h1>
  <h2>Let's find out!</h2>`
  
  const homePageHTML = 
  `<main>
  <form id = "start-page">
  <input type="button" id="start-quiz" aria-label="Start Page Button" value="Start Quiz"></input>
  </form>
  <br><br>
  <img src="#" alt="Map of the United States"> 
  </main>`

$('main').html(homePageHTML); 
$('header').html(homeHeaderHTML);
// ran aXe and was dinged for changing header tags out of order....fixed to <h1> THEN <h2>, can style in CSS (will do for results page)
};

function resultsPage() {
  console.log('resultsPage ran')
  const resultsHeader =  
  `<header>
  <h1>Final Results</h1>
  <h2>You got ${STORE.score} out of 5!</h2>
  </header>`

  const resultsHTML = `
  <form id = "Restart Quiz">
  <input type="button" id="restart-quiz" aria-label="Restart Quiz Button" value= "Click to Try Again!">
  </input>
  </form>
  
  <br>
  <br>
  <img src="#" alt="Map of the United States"> 
  `
  $('main').html(resultsHTML);
  $('header').html(resultsHeader);
};

function questionHeaders() {
  console.log('questionHeaders ran')
  const headers = 
  `<h2>${STORE.questions[STORE.questionNumber].question} </h2>`
  $('header').html(headers);
}

function renderQuestions() {
    console.log('renderQuestions ran')
    
    const questionCounter = 
    `
    <strong class = "question-count" aria-label= "Quiz Progress"></strong>
    `
    const answersHTML = STORE.questions[STORE.questionNumber].answers.map(answer => {
    return `
    <form id ="answer-options">
    <input type="radio" lang="en" name="answers" value="${answer}">${answer}
    </input>
    </form>
    <br><br>`
    });

    //add score and question number tracker here too with const

    const buttonHTML = 
    `<input type="button" id="submit-answer" aria-label="Submit Answer Button" value="Submit Answer">
    </input>`

    $('main').html(questionCounter + answersHTML.join('') + buttonHTML); 
    //join together so that they will be on the same page when rendered 
};

function initializeQuiz() {
  console.log('initialize quiz ran'); 
  $(document).on("click", "#start-quiz", function(event) {  
    STORE.quizBegin = true;   
    renderQuiz();
  });
  $(document).on("click", "#submit-answer", function(event) {
    renderQuiz(); 
  });
  $(document).on("click", "#restart-quiz", function(event) {
    STORE.quizBegin = false;
    STORE.questionNumber = 0;
    STORE.userScore = 0; 
    quizHomePage();
  });
  renderQuiz(); 
}; 

function renderQuiz() {
  console.log('renderQuiz function ran')  
  if (STORE.quizBegin === false) {
    quizHomePage();
  }
  else if (STORE.questionNumber >= 0 && STORE.questionNumber < 5) {
    renderQuestions(); 
    questionHeaders(); 
    questionIncrement(); 
  }
  else if (STORE.questionNumber >= 5) {
    resultsPage(); 
  }
}; 

$(initializeQuiz);