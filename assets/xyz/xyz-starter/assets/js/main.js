$(document).ready(function(){

var word1 = [
	"4x",
	"11x",
	"12x",
	"9x",
	"5x",
	"13x"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "÷",
  "x",
  "-",
  "+"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "45",
  "83",
  "94",
  "18",
  "3"
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

var word4 = [
  "57",
  "24",
  "103",
  "207",
  "99"
];

var randomWord4 = word4[Math.floor(Math.random()*word4.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);
$( ".word4" ).html(randomWord4);

});