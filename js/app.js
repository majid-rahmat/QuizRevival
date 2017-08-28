$(document).ready(function(){

count=0;
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
}

$(".card").flip();

shuffleCards();

$(".card-btn").click(function (){
	$(".card-col").hide();
	$(".question")
	var b = document.getElementsByClassName("question");
    $(b).fadeIn(1000);
});

$(".next-btn").click(function() {
	console.log("fuck");
	$("#questionPic").attr('src', questions[count+1]["image_q"]);
	for (var i=0; i<questions[count+1]["choices"].length; i++) {
	$('#choice'+i).children('button').html(questions[count+1]["choices"][i]);
}
	$("#quizQuestion").html(questions[count+1]["question"]);
	$(".next-btn").attr("disabled", true);
	$(".answer-btn").attr({'class': 'btn btn-lg btn-block btn-primary answer-btn', 'disabled': false, 'type': 'button'})
	$(".modal-body").children("img").attr('src', questions[count+1]["image_a"]);
	$("#explanation").html(questions[count+1]["explanation"]);
	count++;
});

$(".answer-btn").click(function(){
	for (var i=0; i<questions[count]["choices"].length; i++) {
		if ($("#choice"+i).children('button').html() == questions[count]["answer"]) {
			$("#choice"+i).children('button').attr({'class': 'btn btn-lg btn-block btn-success answer-btn', 'type': 'button'});
		}
		else {
			$("#choice"+i).children('button').attr({'class': 'btn btn-lg btn-block btn-danger answer-btn', 'type': 'button'});
		}
	}
		$("#modal").modal('show');
		$(".next-btn").attr("disabled", false);
	if ($(this).html() == questions[count]["answer"]) {
		$("#ModalLabel").html("Correct!");
	}
	else {
		$("#ModalLabel").html("Incorrect!");
	}
});

});
