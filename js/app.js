$(document).ready(function(){

var count=0;
var score = 0;
var zonkImg = "<img src='assets/zonk.png' alt='image of the text zonk' class='zonk'>";
var cardBtn = '<button class="btn btn-success btn-lg card-btn" type="button"> Take the quiz! </button>';


var shuffleCards = function () {
	var a = Math.floor(Math.random()*100);
	console.log(a);
	if (a<33) {
		$('#card1').html(cardBtn);
		$('#card2').html(zonkImg);
		$('#card3').html(zonkImg);
	}
	else if (a<66) {
		$('#card1').html(zonkImg);
		$('#card2').html(cardBtn);
		$('#card3').html(zonkImg);

	}
	else {
		$('#card1').html(zonkImg);
		$('#card2').html(zonkImg);
		$('#card3').html(cardBtn);
	}
};

$(".card").flip();

shuffleCards();

function newGame() {
$(".card-col").hide();
	var b = document.getElementsByClassName("question");
    $(b).fadeIn(1000);
    $(".progress-bar").css({'width': (((count+1)/questions.length)*75)+"%", 'visibility': 'visible'});
    $(".progress-bar-border").css('visibility', 'visible');
};

$(".card-btn").click(function (){
	newGame();
});


$(".next-btn").click(function() {
	console.log("here kitty kitty");
	var progress = (((count+2)/questions.length)*75)+"%";
	$("#questionPic").attr('src', questions[count+1]["image_q"]);
	for (var i=0; i<questions[count+1]["choices"].length; i++) {
	$('#choice'+i).children('button').html(questions[count+1]["choices"][i]);
	}
	$("#quizQuestion").html(questions[count+1]["question"]);
	$(".next-btn").attr("disabled", true);
	$(".answer-btn").attr({'class': 'btn btn-lg btn-block btn-primary answer-btn', 'disabled': false, 'type': 'button'})
	$(".modal-body").find("img").attr('src', questions[count+1]["image_a"]);
	$("#explanation").html(questions[count+1]["explanation"]);
	count++;
	$(".progress-bar").css('width', progress);
	
	
});

$(".answer-btn").click(function(){
	for (var i=0; i<questions[count]["choices"].length; i++) {
		if ($("#choice"+i).children('button').html() == questions[count]["answer"]) {
			$("#choice"+i).children('button').attr({'class': 'btn btn-lg btn-block btn-success answer-btn', 'disabled': true, 'type': 'button'});
		}
		else {
			$("#choice"+i).children('button').attr({'class': 'btn btn-lg btn-block btn-danger answer-btn', 'disabled': true, 'type': 'button'});
		}
	}
		$("#modal").modal('show');
		$(".next-btn").attr("disabled", false);
	if ($(this).html() == questions[count]["answer"]) {
		$("#ModalLabel").html("Correct! Your score is " + (score+1) + " out of " + questions.length + "!" );
		score++;
	}
	else {
		$("#ModalLabel").html("Incorrect! " + "Your score is " + score + " out of " + questions.length + ".");
	}
});

$(".modal").on('click','button', function(){
	if (count==questions.length-1) {
		$(".question").hide();
		$('#score-info').html("Congratulations on completing the quiz! Your score is " + score  + "/" + questions.length + ".");
		$('.score').show();
		$(".progress-bar").css({'visibility': 'hidden', 'width': 0});
		$(".progress-bar-border").css('visibility', 'hidden');
	}
});

$(".score").on('click','button', function(){
		$('.score').hide();
		$(".card").flip(false);
		$('.card-col').show();
		shuffleCards();
		count=0;
		score=0;
		$("#questionPic").attr({'src': questions[count]["image_q"], 'id': 'questionPic', 'alt': 'an image of the Empire State building'});
		$("#quizQuestion").html(questions[count]["question"]);
		for (var i=0; i<4; i++) {
			$("#choice"+i).children('button').html(questions[count]["choices"][i]);
			$("#choice"+i).children('button').attr({'class': "btn btn-lg btn-block btn-primary answer-btn", 'disabled': false, 'type':"button"});
		}
		$(".next-btn").attr({'class': "btn btn-success btn-lg next-btn", "disabled": true, 'type': "button"});
		$(".modal-body").find("img").attr('src', questions[count]["image_a"]);
		$("#explanation").html(questions[count]["explanation"]);
		$(".card-btn").click(function (){
		newGame();
		});
});



});
