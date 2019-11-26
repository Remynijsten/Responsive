menuopen = 0;
navopen = 0;
index = 1;

$(".menuBTN").click(function(){
	if (menuopen == 0){
		$(".header").css("height", "20em");
		menuopen = 1;
	}
	else{
		$(".header").css("height", "5em");
		menuopen = 0;
	}
});
$(".navBTN").click(function(){
	if (navopen == 0){
		$("nav").css("height", "40vh");
		navopen = 1;
	}
	else{
		$("nav").css("height", "8vh");
		navopen = 0;
	}
});

function slide(){
	if (index == 1){
		$(".slideIMG").attr("src","img/vector2.jpg");
		$(".imgTEXT").html("<span>Veiligheid<br></span>Staat centraal bij ons!");
		index++;
	}
	else if (index == 2){
		$(".slideIMG").attr("src","img/vector3.jpg");
		$(".imgTEXT").html("<span>Je bent bij het goede adres!<br></span>Wanneer het gaat om vertrouwen.");
		index++
	}
	else if (index == 3){
		$(".slideIMG").attr("src","img/vector1.jpg");
		$(".imgTEXT").html("<span>Een Rijschool<br></span>Die meer dan alleen een rijschool is");
		index = 1;
	}
}

window.setInterval(function(){
	slide();
}, 4000);