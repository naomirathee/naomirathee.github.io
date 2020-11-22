$(document).ready(function(){

var word1 = [
	"4x",
  "5x",
  "9x",
	"11x",
	"12x",
	"13x",
  "133x",
  "201x"
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
  "99",
  "33"
];

var randomWord4 = word4[Math.floor(Math.random()*word4.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);
$( ".word4" ).html(randomWord4);

});

$( document ).ready(
  function () {
    
    function marquee ( bar, speed, direction ) { //main marquee function
    
      //marquee text width
      var initWidth = $( bar + " .marquee-message" ).width();
      
      //initial position
      $( bar + " .marquee-message" ).css( 'margin-left', function () {
        return ( $( bar ).width() - initWidth ) / 2;
      } );
      
      if ( direction == 'left' ) { //from left to right
        //resetting the marquee element
        function resMarquee_left () {
          var left = -1 * initWidth;
          $( bar + " .marquee-message" ).css( 'margin-left', left );
        }
        
        //marquee function
        function marquee_left () {
          $( bar + " .marquee-message" ).css( 'margin-left', function ( index, val ) {
            return parseInt( val, 10 ) + speed + 'px';
          } );
          
          //reset the element if it's out of it's container
          if ( parseInt ( $( bar + " .marquee-message" ).css( 'margin-left' ) ) > $( bar ).width() ) {
            resMarquee_left ();
          }
        
        }
        
        setInterval( marquee_left, 10 );
      
      } else { //default: from right to left
        //marquee text width
        var initWidth = $( bar + " .marquee-message" ).width();
        
        //initial position
        $( bar + " .marquee-message" ).css( 'margin-left', function () {
          return ( $( bar ).width() - initWidth ) / 2;
        } );
      
        //resetting the marquee element
        function resMarquee_right () {
          $( bar + " .marquee-message" ).css( 'margin-left', $( bar ).width() );
        }
        
        //marquee function
        function marquee_right () {
          $( bar + " .marquee-message" ).css( 'margin-left', function ( index, val ) {
            return parseInt( val, 10 ) - speed + 'px';
          } );
          
          //reset the element if it's out of it's container
          if ( parseInt ( $( bar + " .marquee-message" ).css( 'margin-left' ) ) < -1 * $( bar + " .marquee-message" ).width() ) {
            resMarquee_right ();
          }
        
        }
        
        setInterval( marquee_right, 10 );
      
      }
    
      
      
    }
    
    
    marquee( ".marquee", 1, 'left' );
    marquee( ".marquee2", 3, 'right' );

  }
);