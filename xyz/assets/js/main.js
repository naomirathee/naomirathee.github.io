$(document).ready(function(){

var word1 = [
	"Apple",
	"Peach",
	"Orange"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "yell",
  "dance",
  "draw"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "red",
  "blue",
  "yellow"
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);

});