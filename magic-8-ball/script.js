$(document).ready(function() {
  var magic8Ball = {};

  magic8Ball.listOfAnswers = ["Yes, I think so.", "Word, believe in yourself.", "Trust the process.", "I don't know.", "Not sure, let's see what happens.", "Nope, sorry.", "Most likely."];

  magic8Ball.askQuestion = function(question) {
    $("#answer").fadeIn(4000);
	  var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];

    $("#answer").text(answer);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  };

  $("#answer").hide();

  var onClick = function() {
	  $("#answer").hide();
	  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	  setTimeout(
       function() {
           var question = prompt("Ask Me Anything")
           magic8Ball.askQuestion(question)
       }, 500);
    $("#8ball").effect("shake");
  };

  $("#questionButton").click(onClick);

});
