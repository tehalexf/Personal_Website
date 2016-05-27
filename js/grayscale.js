/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



var font = "010101001010101";
var arrays = [[0, "h"],[1, "e"],[2, "l"],[3, "l"],[4, "o"],[5, " "],
            [6, "w"],[7, "o"],[8, "r"],[9, "l"],[10, "d"],[11, "!"]];
var fontArray = font.split("");
var doneArr = [];
var finalArr = [];
var index = 0;
var refreshIntervalId;

$( document ).ready(function() {
    var str = $("#heading-scramble").text();
    var strSplit = str.split("");

    for (var i = 0 ; i < 12; i++) {
        shuffle(arrays);
        for (var k in strSplit) {
            var j = Number(k);
            if (doneArr.indexOf(j) == -1) {
            
                strSplit[j]  = fontArray[Math.floor((Math.random() * 11))];
            }
        }
        var popped = arrays.pop();
        strSplit[popped[0]] = popped[1];
        doneArr.push(popped[0]);
        finalArr.push(strSplit.join(""));
    }

    refreshIntervalId = setInterval(function(){
        if (index < 12)
            $("#heading-scramble").text(finalArr[index++]);
        else
            clearInterval(refreshIntervalId);
    }, 80);
});
