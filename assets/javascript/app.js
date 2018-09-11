const questionsChoicesAnswers = [
  {
    "Question": "Who is the oldest team in the NFL?",
    "MC1": "Cardinals",
    "MC2": "Packers",
    "MC3": "Giants",
    "MC4": "Bears",
    "Answer": "Cardinals"
  },
  {
    "Question": "What team has the most NFL titles?",
    "MC1": "Browns",
    "MC2": "Steelers",
    "MC3": "Packers",
    "MC4": "Cowboys",
    "Answer": "Packers"
  },
  {
    "Question": "Who has the most passing yards in a single game?",
    "MC1": "Drew Brees",
    "MC2": "Dan Fouts",
    "MC3": "Norm Van Brocklin",
    "MC4": "Peyton Manning",
    "Answer": "Norm Van Brocklin"
  },
  {
    "Question": "What year was the 1st NFL playoff game?",
    "MC1": "1967",
    "MC2": "1932",
    "MC3": "1970",
    "MC4": "1920",
    "Answer": "1932"
  },
  {
    "Question": "Who has the most seasons played in the NFL?",
    "MC1": "George Blanda",
    "MC2": "Morten Anderson",
    "MC3": "Brett Favre",
    "MC4": "Jason Hanson",
    "Answer": "George Blanda"
  },
  {
    "Question": "Who has the most touchdowns in a rookie season?",
    "MC1": "Barry Sanders",
    "MC2": "Ezekiel Elliott",
    "MC3": "Adrian Peterson",
    "MC4": "Gale Sayers",
    "Answer": "Gale Sayers"
  },
  {
    "Question": "Who has the most perfect passer rating games in NFL history? (Including playoffs)",
    "MC1": "Joe Montana",
    "MC2": "Tom Brady",
    "MC3": "Peyton Manning",
    "MC4": "Craig Morton",
    "Answer": "Peyton Manning"
  },
  {
    "Question": "Who was the 1st Super Bowl MVP?",
    "MC1": "Vince Lombardi",
    "MC2": "Bart Starr",
    "MC3": "Paul Hornung",
    "MC4": "Max McGee",
    "Answer": "Bart Starr"
  },
  {
    "Question": "Which of these QBs was NOT the #1 overall pick in the NFL draft?",
    "MC1": "Terry Bradshaw",
    "MC2": "Troy Aikman",
    "MC3": "Johnny Unitas",
    "MC4": "Alex Smith",
    "Answer": "Johnny Unitas"
  },
  {
    "Question": "What pick is the earliest a Kicker or Punter has ever been selected in the NFL draft?",
    "MC1": "27",
    "MC2": "15",
    "MC3": "6",
    "MC4": "48",
    "Answer": "6"
  },
  {
    "Question": "What 2 colleges have had the most #1 picks in the NFL draft?",
    "MC1": "Ohio State and Texas",
    "MC2": "Ohio State and Oklahoma",
    "MC3": "USC and Notre Dame",
    "MC4": "Alabama and USC",
    "Answer": "USC and Notre Dame"
  },
  {
    "Question": "What is the most consecutive titles an NFL team has ever won?",
    "MC1": "2",
    "MC2": "3",
    "MC3": "4",
    "MC4": "8",
    "Answer": "3"
  },
  {
    "Question": "Which of these colleges has never produced an NFL MVP winner?",
    "MC1": "Stephen F. Austin",
    "MC2": "Clemson",
    "MC3": "San Diego St",
    "MC4": "Augustana",
    "Answer": "Clemson"
  },
  {
    "Question": "How many Heisman trophy winners are in the NFL Hall of Fame?",
    "MC1": "15",
    "MC2": "12",
    "MC3": "9",
    "MC4": "6",
    "Answer": "9"
  },
  {
    "Question": "What team had the most regular season Wins of the 2000s (2000-2009)?",
    "MC1": "Packers",
    "MC2": "Colts",
    "MC3": "Patriots",
    "MC4": "Steelers",
    "Answer": "Colts"
  },
  {
    "Question": "Who has the most Rushing TDs in their 30s?",
    "MC1": "Walter Payton",
    "MC2": "John Riggins",
    "MC3": "Emmitt Smith",
    "MC4": "Marcus Allen",
    "Answer": "John Riggins"
  },
  {
    "Question": "Who has the most receiving TDs over 70 yards in a career?",
    "MC1": "James Lofton",
    "MC2": "Randy Moss",
    "MC3": "Jerry Rice",
    "MC4": "Lance Alworth",
    "Answer": "Lance Alworth"
  },
  {
    "Question": "How many NFL titles do the Steelers have?",
    "MC1": "5",
    "MC2": "4",
    "MC3": "7",
    "MC4": "6",
    "Answer": "6"
  },
  {
    "Question": "How many NFL titles do the Lions have?",
    "MC1": "4",
    "MC2": "0",
    "MC3": "3",
    "MC4": "1",
    "Answer": "4"
  },
  {
    "Question": "How many NFL titles do the Atlanta Falcons have?",
    "MC1": "2",
    "MC2": "4",
    "MC3": "0",
    "MC4": "1",
    "Answer": "0"
  },
  {
    "Question": "What 49ers pass-catcher is associated with 'The Catch'?",
    "MC1": "Dwight Clark",
    "MC2": "Joe Montana",
    "MC3": "Jerry Rice",
    "MC4": "John Taylor",
    "Answer": "Dwight Clark"
  },
  {
    "Question": "What game is known as 'The Greatest Game Ever Played'?",
    "MC1": "1958 NFL Championship Game",
    "MC2": "Super Bowl 1",
    "MC3": "1940 NFL Championship Game",
    "MC4": "Super Bowl 51",
    "Answer": "1958 NFL Championship Game"
  },
  {
    "Question": "What was the year of the NFL Hall of Fame's first class?",
    "MC1": "1970",
    "MC2": "1940",
    "MC3": "1982",
    "MC4": "1963",
    "Answer": "1963"
  },
  {
    "Question": "What Hall of Famer wore #00?",
    "MC1": "Jim Otto",
    "MC2": "Bob Brown",
    "MC3": "Frank Gatski",
    "MC4": "Earl Campbell",
    "Answer": "Jim Otto"
  },
  {
    "Question": "Who is the only rookie to win AP NFL MVP?",
    "MC1": "Peyton Manning",
    "MC2": "Barry Sanders",
    "MC3": "Johnny Unitas",
    "MC4": "Jim Brown",
    "Answer": "Jim Brown"
  }
]

function Game() {
  this.questionNum = -1;
  this.question;
  this.mc1;
  this.mc2;
  this.mc3;
  this.mc4;
  this.answer;
  this.answerNum;
  this.guess = "";
  this.correct = false;
  this.message = "";
  this.correctImage = "";
  this.score = 0;
  this.maxTime = 15;
  this.timeRemaining = this.maxTime;
  this.intervalID;
  this.gameStarted = false;
  this.guessSubmitted = false;
  this.gameOver = false;
  this.startGame = () => {
    this.questionNum = -1;
    this.gameOver = false;
    this.nextQuestion();
  };
  // change html display info
  this.updateDisplay = () => {
    $("#question-number").text(this.questionNum + 1);
    $("#question-text").text(this.question);
    $("#mc1").text(this.mc1);
    $("#mc2").text(this.mc2);
    $("#mc3").text(this.mc3);
    $("#mc4").text(this.mc4);
    $(".mc").css("background-color", "#fff");
    $("#time-remaining").text(this.maxTime);
    $("#message-container").addClass("display-none");
  };
  // logic to determine if answer is correct and respond accordingly
  this.handleAnswer = (userGuess, mcElement) => {
    this.guessSubmitted = true;
    this.stopTimer();
    this.guess = userGuess;
    if (this.guess === this.answer) {
      this.correct = true;
    } else {
      this.correct = false;
    }

    switch (this.answer) {
      case this.mc1:
        $("#mc1").css("background-color", "rgb(194, 255, 179)");
        break;
      case this.mc2:
        $("#mc2").css("background-color", "rgb(194, 255, 179)");
        break;
      case this.mc3:
        $("#mc3").css("background-color", "rgb(194, 255, 179)");
        break;
      case this.mc4:
        $("#mc4").css("background-color", "rgb(194, 255, 179)");
        break;
      default:
        break;
    }

    if (this.correct) {
      this.score++;
      $("#score").text(this.score);
      $("#message").text("Correct!");
      $("#message-image").attr("src", "./assets/images/td.gif");
    } else {
      $(mcElement).css("background-color", "rgb(255, 172, 172)");
      $("#message").text("Incorrect");
      $("#message-image").attr("src", "./assets/images/drop.gif");
    }

    $("#message-container").removeClass("display-none");

    if (this.questionNum >= questionsChoicesAnswers.length - 1) {
      this.gameOver = true;
    }

    setTimeout(currentGame.nextQuestion, 3000);
  };
  //
  this.nextQuestion = () => {
    if (this.gameOver) {
      this.endGame();
    } else {
      this.questionNum++;

      if (this.questionNum === 0) {
        this.gameStarted = true;
        this.gameOver = false;
        $("#question-container").removeClass("display-none");
      }

      this.question = questionsChoicesAnswers[this.questionNum].Question;
      this.mc1 = questionsChoicesAnswers[this.questionNum].MC1;
      this.mc2 = questionsChoicesAnswers[this.questionNum].MC2;
      this.mc3 = questionsChoicesAnswers[this.questionNum].MC3;
      this.mc4 = questionsChoicesAnswers[this.questionNum].MC4;
      this.answer = questionsChoicesAnswers[this.questionNum].Answer;
      this.guess = "";
      this.correct = false;
      this.message = "";
      this.guessSubmitted = false;
      this.updateDisplay();
      this.resetTimer();
    }
  };
  // stop timer from decrementing
  this.stopTimer = () => {
    clearInterval(this.intervalID);
  };
  // reset timer to max time
  this.resetTimer = () => {
    this.timeRemaining = this.maxTime;
    this.intervalID = setInterval(currentGame.decrementTimer, 1000);
  };
  // decrement time remaining every second
  this.decrementTimer = () => {
    if (this.timeRemaining === 0) {
      this.stopTimer();
      this.handleAnswer("");
    } else {
      this.timeRemaining--;
    }
    $("#time-remaining").text(this.timeRemaining);
  };
  // handle end game event
  this.endGame = () => {
    this.stopTimer();
    this.gameStarted = false;
    this.gameOver = true;
    $("#question-container").addClass("display-none");
    $("#message-container").removeClass("display-none");
    $("#message").text(`You answered a total of ${this.score}/${questionsChoicesAnswers.length} questions correctly`);
    if (this.score > 12) {
      $("#message-image").attr("src", "./assets/images/td.gif");
    } else {
      $("#message-image").attr("src", "./assets/images/drop.gif");
    }
  };
}

// new Game instance
let currentGame = new Game();

$(document).ready(function () {
  // start game click event
  $("#start").on("click", function () {
    if (!currentGame.gameStarted) {
      currentGame.startGame();
    }
  })

  // end game click event
  $("#end").on("click", function () {
    if (currentGame.gameStarted) {
      currentGame.endGame();
    }
  })

  // user guess click event
  $(".mc").on("click", function (event) {
    if (currentGame.timeRemaining > 0 && !currentGame.guessSubmitted) {
      console.log(event.currentTarget.innerText);
      currentGame.handleAnswer(event.currentTarget.innerText, event.currentTarget);
    }
  })
});







