
const answerStrings= STORE.questions[STORE.questionNumber].answers.map(answer => {

    return `<input type="radio" name="question1" value="${answer}">${answer}</input>`

  })
console.log(answerStrings)