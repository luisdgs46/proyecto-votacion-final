class question {
  constructor(question, options, correctAnswer, userAnswer) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.userAnswer = userAnswer;
  }

  isCorrectAnswer() {
    return this.userAnswer === this.correctAnswer;
  }
}
class quiz {
  constructor(questions) {
    this.questions = questions;
  }

  question() {
    this.questions.forEach((question) => {
      console.log(question.question);
      const userAnswer = question.userAnswer;
      if (question.isCorrectAnswer()) {
        console.log("¡Correcto!");
      } else {
        console.log(
          "Incorrecto. La respuesta correcta es ${question.correctAnswer}"
        );
      }
    });
  }
}

const questions = [
  new question("¿Cuál es el fruto del Manzano?", ["Manzana", "Pera", "Frutilla"], "Manzana", "Manzana"),
  new question("¿Cuál es el fruto del moral?", ["Frambuesa", "Mora", "Higos"], "Frambuesa", "Higos"),
  new question("¿Cuál es fruto de la Higuera?", ["Higos", "Piña", "Melones"], "Melones","Melones"),
  new question("¿Cuál es el auto mas veloz?", ["Deportivo", "Camioneta", "City car"], "Deportivo", "Deportivo"),
  new question("¿Cuál es el mejor jugador de football en Chile?", ["Alexis", "Zamorano", "Salas"], "Alexis", "Alexis"),
  new question("¿Cuál es el mejor conductor?", ["Toretto", "O' conner", "Roman"], "Toretto", "Toretto"),
  new question("¿Cuál es el mejor jugador de football del mundo?", ["Pele", "Maradona", "Cristiano"], "Pele", "Pele"),
  new question("¿Cuál es la mejor fruta?", ["Sandia", "Piña", "Melon"], "Sandia", "Sandia"),
];

const quiz = new quiz(questions);
quiz.askquestions();