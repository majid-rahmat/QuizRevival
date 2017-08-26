$(document).ready(function(){


var zonkImg = "<img src='assets/zonk.png' alt='image of the text zonk' class='zonk'>"
var cardBtn = '<button class="btn btn-success btn-lg card-btn" type="button"> Take the quiz! </button>'
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
	$(".card-col").fadeOut(1000);
});




});
