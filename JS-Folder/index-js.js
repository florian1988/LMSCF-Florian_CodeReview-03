

console.log("autor: florian");



var name = document.getElementById("wieso");
var age = document.getElementById("alter").value;
var horsepower = document.getElementById("pferde").value;
var country = document.getElementById("land").value;
var c = 12;

function wert(){
	document.getElementById("print").innerHTML = c;
}




// // function bald(){

// // // if (country = Austria){
// // // 	result = (Number(horsepower) * 100) / (Number(age) + 50); 
// // // } else if (country = Hungary){
// // // 	result = (Number(horsepower) * 120) / (Number(age) + 100);
// // // } else (country = Greece){
// // // 	result = (Number(horsepower) * 150) / (((Number)age+3) + 50);
// // // }


// document.getElementById("print").innerHTML = name + ", your insurance costs: " + result; 
// }

var elementNode = document.getElementById("button");
elementNode.onclick = wert;

