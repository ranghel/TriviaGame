window.onload = function() {


var triviaQuestions = [{
  question: "Which country brought us the tradition of Easter Eggs?",
  options: ["Germany", "Russia", "China", "Columbia"],
  correctAnswer: 0
}, {
  question: "When was the first Easter Egg roll at the white House?",
  options: ["1935", "1878", "1969", "2001"],
  correctAnswer: 1
}, {
  question: "Which flower is associated with Easter?",
  options: ["Rose", "Jasmine", "Lily", "Peony" ],
  correctAnswer: 2
}, {
  question: "What are the Easter colors?",
  options: ["Purple and pink", "Purple and yellow", "Red and green", "Red"],
  correctAnswer: 1
}, {
  question: "How many peeps get eaten every year in the USA?",
  options: ["About 700 million", "About 3 million", "About 10 million", "About 250 million"],
  correctAnswer: 0
}, {
  question: "What is the name of the best known Easter Bunny in North America?",
  options: ["Peter", "Thomas", "James", "Willy"],
  correctAnswer: 0
}, {
  question: "Where would you go to see the world's largest chocolate bunny?",
  options: ["Sydney", "Paris", "Washington DC", "South Africa"],
  correctAnswer: 3
}, {
  question: "Where is the world's largest collection of Easter eggs?",
  options: ["Hungary", "United States", "Poland", "Canada"],
  correctAnswer: 2

}];


var counter = 0; 
var userPick = []; 
var quiz = $('#quiz-container'); 


// Display question
displayQuestion();
startTimer();
$("#start").hide();

// Create the div with the questions and options
function createQA(index) {
  var quizContainer = $('<div>', {
    id: 'question'
  });
  
  var question = $('<p>').append(triviaQuestions[index].question);
  quizContainer.append(question);
  
  var radioButtons = createRadios(index);
  quizContainer.append(radioButtons);
  return quizContainer;
};
  
  // Create radio buttons for the answers
function createRadios(index) {
  var radioList = $('<ul>');
  var input = [];
  for (var i = 0; i < triviaQuestions[index].options.length; i++) {
    var item = $('<li>'); 
    input = '<input type="radio" name="answer" value=' + i + ' />';
    input += triviaQuestions[index].options[i]; 
    item.append(input); 
    radioList.append(item); 
  }
  return radioList;
}
  
// Caputures user selection and pushes the value to an array
function select() {
  userPick[counter] = +$('input[name="answer"]:checked').val();
}
  
// Displays next question
function displayQuestion() {
  quiz.fadeOut(function() {
    $('#question').remove();
    if(counter < triviaQuestions.length){
      var nextQuestion = createQA(counter);
      quiz.append(nextQuestion).show();
      if (!(isNaN(userPick[counter]))) {
        $('input[value='+userPick[counter]+']').prop('checked', true);
      }
      else if(counter === 0){
        $('#next').show();
      }
    }
    else {
    var scoreElem = displayScore();
    quiz.append(scoreElem).fadeIn();
    $('#next').hide();
    $('#start').show();
    }
  });
};

// Next button
$('#next').on('click', function () {
  select();
  // If no answer is selected
  if (isNaN(userPick[counter])) {
    alert("Answer required to proceed to the next question!");
  } 
  else {
    counter++;
    displayQuestion();
  }
})

// Setting the timer
function startTimer(){
  time = setTimeout(timeUp, 1000 * 120); // 120 seconds
}

function stopTimer() {
  clearTimeout(time);
}

function timeUp() {
  $("#message").append("<h3>Time's up! Click Start Over to play again.</h3>").show();
  $('#start').show();
  $('#next').hide(); 
  $('#quiz-container').hide();
  $('#timer').hide();
  stopTimer();
  stopMyTimer(); 
}

var sec;
var temp;

function countdown() {
  sec = $("#seconds").html();
  sec = parseInt(sec);
  if (sec == 0) {
    temp = $("#seconds");
    return;
  }
  sec--;
  temp = $("#seconds").html(sec);
  myTimer = setTimeout(countdown, 1000);
 }
 
countdown();

function stopMyTimer() {
    clearTimeout(myTimer);
}
  // Reset game on 'Start Over' 
$('#start').on('click', function () {
    counter = 0;
    userPick = [];
    displayQuestion();
    $('#start').hide();
    $('#next').show();    
    $('#message').hide();
    $('#timer').show();
    $("#seconds").html("120");
    startTimer();
    countdown();
});
  
  
// Displaying score message
function displayScore() {
  clearTimeout(time);
  $('#timer').hide();
  stopMyTimer();
  stopTimer();
  var score = $('<div>',{id: 'message'});
  var numCorrect = 0;
  for (var i = 0; i < userPick.length; i++) {
    if (userPick[i] === triviaQuestions[i].correctAnswer) {
      numCorrect++;
    }
  }
  score.append('You got ' + numCorrect + ' out of ' + triviaQuestions.length + ' questions right!!!');
  return score;
  };
};
  






