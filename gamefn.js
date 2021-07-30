var character =
document.getElementById("character");
var block =
document.getElementById("block");
var count = 0;

function jump(){

	count++;

	if (character.classList != "animate") {
         character.classList.add("animate");
	}
	
	setTimeout( function(){
		character.classList.remove("animate");
	},500);
}

var checkDead = setInterval( function(){
var characterTop =
parseInt(window.getComputedStyle(character).getPropertyValue("top"));

var blockLeft =
parseInt(window.getComputedStyle(block).getPropertyValue("left"));

if (blockLeft <20 && blockLeft>0 && characterTop>=330) {
	block.style.animation ="none";
	block.style.display = "none";
	document.getElementById("result").innerHTML=("The frog ate mosquito!!!<br>Your Score:"+count);
}

},10)
