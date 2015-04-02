$("a").html ("Hello world");


function myFunction(arg1, arg2) {
    console.log("Hello world");
}


function addNums(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}


addNums(4, 5);


function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}


add(20, 30);
//using a return function allows the info to be stored//


var mySum = add(20, 30);
mySum

myNums = addNums(1,2);


//objects are containers that allow us to store complex data inside javascript variables//
//objects hold arrays, strings, booleans, other objects (many different types of data) within these squiggly brackets {}//
//arrays always have a value that starts at 0//


var myArray = ["hello", 2, "world", false]

my Array[0]


var myObject = {
    name: "Brendan",
    age: 32,
    currentLocation: "New York, NY";
}


myObject.name;
//will return the info stored in the array "name", which is "Brendan"//

myObject.currentLocation = "Berlin, Germany";
//you can redefine it//
//you can also add new values//

//you need semi-colons at the end of each line//
//it doesn't matter in the console but it will break in javascript//


//jquery is a shortcut version/extension of javascript//
//it's the fastest/easiest way to make changes on the page//
//dom = document object model//

$("a");
//jquery has its own syntax, which begins with a $//
//you can search for any CSS selector within these parenthesis//
//by doing so, you are traversing the dom//

$(".band-button").html("Hello world");
$(".band-button").html("<em>Hello world</em>");
//this can also manipulate html functions//


$(".band-button").css("background-color", "red");
//this can also manipulate css properties/"key value pairs"//
//"background-color" is a property name//


$(".band-button").hide();
$(".band-button").show();



$(".band-button").addClass("current");
//will add all the current key value pair changes at once//
$(".band-button").removeClass("current");
$(".band-button").toggleClass("current");
$(".band-button").appendClass("current");
$(".band-button").prependClass("current");
//append adds to the end, prepend adds to the beginning//



$(".course-info").click(function(); {

$("body").css("background-color", "red");   
}) ;
//append this item to course-info//


var clicked = false;
$(".course-info").click(function(); {

if [clicked ==false] {
    $("body").css("background-color", "red");
    clicked = true;
}
else {
    $("body").css("background-color", "white");
    clicked = false;
}
}) ;
//else represents all other conditions//
//we are using a boolean because there are only 2 conditions: clicked or not clicked//


$(".course-info").mousedown(function(); {
$(".course-info").mouseup(function(); {
$(".course-info").hover(function(); {
$(".course-info").mousemove(function(); {
$(".course-info").mouseenter(function(); {
$(".course-info").mouseleave(function(); {
//very subtle, but they determine when the change happens within the process of clicking/releasing/hovering//