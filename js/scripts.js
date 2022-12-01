
var colors= ["#CE1713", "#D5B534", "#0F7833"];
var counter = 0;

/* Piano Elements sound effects    */

var Q = document.getElementById("qsound")
$("#Q").on("click", function () {
    Q.play();
})
$(document).on("keypress", function(e) {
    if (e.key == "Q" || e.key == "q") 
       Q.play();
    
       $("#Q").css("background-color", colors[counter])
       counter++;
       if (counter == colors.length) {
           counter = 0;
       }
})

var W = document.getElementById("wsound")
$("#W").on("click", function () {
    W.play();
})
$(document).on("keypress", function(e) {
    if (e.key == "W" || e.key == "w")
       W.play();

       $("#W").css("background-color", colors[counter])
       counter++;
       if (counter == colors.length) {
           counter = 0;
       }
})

var E = document.getElementById("esound")
$("#E").on("click", function () {
    E.play();
})
$(document).on("keypress", function(e) {
    if (e.key == "E" || e.key == "e")
       E.play();

       $("#E").css("background-color", colors[counter])
       counter++;
       if (counter == colors.length) {
           counter = 0;
       }
})

var R = document.getElementById("rsound")
$("#R").on("click", function () {
    R.play();
})
$(document).on("keypress", function(e) {
    if (e.key == "R" || e.key == "r")
       R.play();

       $("#R").css("background-color", colors[counter])
       counter++;
       if (counter == colors.length) {
           counter = 0;
       }
})

var T = document.getElementById("tsound")
$("#T").on("click", function () {
    T.play();
})
$(document).on("keypress", function(e) {
    if (e.key == "T" || e.key == "t")
       T.play();

       $("#T").css("background-color", colors[counter])
       counter++;
       if (counter == colors.length) {
           counter = 0;
       }
})

var Y = document.getElementById("ysound")
$("#Y").on("click", function () {
    Y.play();
})
$(document).on("keypress", function(e) {
    if (e.key == "Y" || e.key == "y")
       Y.play();

       $("#Y").css("background-color", colors[counter])
       counter++;
       if (counter == colors.length) {
           counter = 0;
       }
})

var U = document.getElementById("usound")
$("#U").on("click", function () {
    U.play();
})
$(document).on("keypress", function(e) {
    if (e.key == "U" || e.key == "u")
       U.play();

       $("#U").css("background-color", colors[counter])
       counter++;
       if (counter == colors.length) {
           counter = 0;
       }
})

var I = document.getElementById("isound")
$("#I").on("click", function () {
    I.play();
})
$(document).on("keypress", function(e) {
    if (e.key == "I" || e.key == "i")
       I.play();

       $("#I").css("background-color", colors[counter])
       counter++;
       if (counter == colors.length) {
           counter = 0;
       }
})

var O = document.getElementById("osound")
$("#O").on("click", function () {
    O.play();
})
$(document).on("keypress", function(e) {
    if (e.key == "O" || e.key == "o")
       O.play();

       $("#O").css("background-color", colors[counter])
       counter++;
       if (counter == colors.length) {
           counter = 0;
       }
})

var P = document.getElementById("psound")
$("#P").on("click", function () {
    P.play();
})
$(document).on("keypress", function(e) {
    if (e.key == "P" || e.key == "p")
       P.play();

       $("#P").css("background-color", colors[counter])
       counter++;
       if (counter == colors.length) {
           counter = 0;
       }
})