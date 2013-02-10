// define several functions
function firstFunction() {
    alert("just about to call second function");
    secondFunction();
}
function secondFunction() {
    alert("just about to call third function");
    thirdFunction();
}
function thirdFunction() {
    alert("just about to call fourth function");
    fourthFunction();
}
function fourthFunction() {
    headline.innerHTML = "You clicked the headline!";
}

// grab the headline element
var headline = document.getElementById("mainHeading");
// add a click event handler
headline.onclick = function() {
    alert("just about to call first function");
    firstFunction();
    alert("I've called the first function");
};



