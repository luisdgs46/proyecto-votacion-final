// Paso 1: Definir la estructura de datos para las preguntas y las respuestas


  const questions = [
    {
      question: "¿Cuál es el fruto del Manzano?",
      options: ["Manzana", "Pera", "Frutilla"],
      correctAnswer: "Manzana",
      userAnswer: "Manzana", // Respuesta correcta
    },
    {
      question: "¿Cuál es el fruto del moral?",
      options: ["Mora", "Frambuesa", "Higos"],
      correctAnswer: "Mora",
      userAnswer: "Frambuesa",
      Higos: any, // Respuesta incorrecta
    },
    {
      question: "¿Cuál es fruto de la Higuera?",
      options: ["Higos", "Piña", "Melones"],
      correctAnswer: "Melones",
      userAnswer: "Melones", // Respuesta correcta
    },
    {
      question: "¿Cuál es el auto mas veloz?",
      options: ["Deportivo", "Camioneta", "City car"],
      correctAnswer: "Deportivo",
      userAnswer: "Camioneta",
      "City car": any, // Respuesta incorrecta
    },
    {
      question: "¿Cuál es el mejor jugador de football en Chile?",
      options: ["Alexis", "Zamorano", "Salas"],
      correctAnswer: "Alexis",
      userAnswer: "Alexis", // Respuesta correcta
    },
    {
      question: "¿Cuál es el mejor conductor?",
      options: ["Toretto", "O' conner", "Roman"],
      correctAnswer: "Toretto",
      userAnswer: "O' conner",
      Roman: any, // Respuesta incorrecta
    },
    {
      question: "¿Cuál es el mejor jugador de football del mundo ?",
      options: ["Pele", "Maradona", "Cristiano"],
      correctAnswer: "Pele",
      userAnswer: "Pele", // Respuesta correcta
    },
    {
      question: "¿Cuál es la mejor fruta?",
      options: ["Sandia", "Piña", "Melon"],
      correctAnswer: "Sandia",
      userAnswer: "Piña",
      Melon: any, // Respuesta incorrecta
    },
  ];
  // Paso 2: Crear la función isCorrectAnswer
  function isCorrectAnswer(question, answer) {
    return answer === question.correctAnswer;
  }
  
  // Paso 3: Definir la función getUserAnswer
  function getUserAnswer(question) {
    // Esta función devuelve la respuesta proporcionada por el usuario
    return question.userAnswer;
  }
  
  
  // Paso 4: Crear la función askQuestion
  function askQuestion(question) {
    console.log(question.question);
    const userAnswer = getUserAnswer(question); 
    if (isCorrectAnswer(question, userAnswer)) {
      console.log("¡Correcto!");
    } else {
      console.log("Incorrecto. La respuesta correcta es " + question.correctAnswer);
    }
  }
  
  // Paso 5: Utilizar la función askQuestion para cada pregunta
  questions.forEach((question) => {
    askQuestion(question);
  });