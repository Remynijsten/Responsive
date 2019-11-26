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
		index++;
	}
	else if (index == 2){
		$(".slideIMG").attr("src","img/vector3.jpg");
		index++
	}
	else if (index == 3){
		$(".slideIMG").attr("src","img/vector1.jpg");
		index = 1;
	}
}

window.setInterval(function(){
	slide();
}, 4000);