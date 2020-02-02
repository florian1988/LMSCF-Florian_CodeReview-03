
var namee = document.getElementById("wieso").value;
var age = document.getElementById("alter").value;
var horsepower = document.getElementById("pferde").value;
var country = document.getElementById("land").value;
// var c = 20;



// function wert(){
// 	document.getElementById("putitout").innerHTML = namee;

// }

var x = 3;


function calculateInsurance(){

if (country = "Austria"){
   	result = (Number(horsepower) * 100)/(Number(age) + 50); 
} else if (country = "Hungary"){
  	result = (Number(horsepower) * 120)/(Number(age) + 100); 
 } else {
  	result = (Number(horsepower) * 150)/((Number(age) + x) + 50);
}


 document.getElementById("putitout").innerHTML = namee + ", your insurance costs: " + result; 
 }

var elementNode = document.getElementById("buttton");
elementNode.onclick = calculateInsurance; 

