//  *copypastecharacter.com gives you the html value for symbols/special characters   //

//  string = text within a quote    //




"Hello, my name is \"Brendan\". Whats your name"
//  \ is an escape character, tells the computer to jump over the next character, but it's better to use the html entities  //
//  so "Hello, my name is &ldquo;Brendan&rdquo;. What&rsquo;s your name" //

var myVar = "some string"
//  when you name variables, just choose a key word    //

//  numbers always need to be entered WITHOUT quote marks (because the computer actually understands numbers/math)    //

//  a boolean is true or false, it only understands the words true or false WITHOUT quote marks (because the computer conceptually understands these words)    //





["one", "two", "three"] [0]
//  an array is more of a container than it is a data type, it encapsulates many other types of data    //
//  in an array, you can put: strings, numbers, ebulliens, variables, etc.    //
//  items in an array always start at 0 (the first item in an array is always item 0, the second item is item 1)    //

[3.14, "hello world", true, false]





var blackjack = 21;
//  so when you type blackjack into your console, you get the number 21    //

blackjack = 11;
//  when you retype a var, you only need to type the key word because the computer already knows it's a var    //





console.log("Hello world"); 





10 < 20 -> true
//  a relational operator helps you find out if a numerical value is less or greater than another value    //





"Hello" == "Hello" -> true
//  singles equals are for assigning values, double equals are for checking    //

"Hello" == "Hello" && "Hello" == "World" -> false
//  because not both of them are true, && means "and"    //

"Hello" == "Hello" || "Hello" == "World" -> true
//  because one of them is true, || means "or"    //




var name = "Brendan"
var school = "Parsons"

if (name == "Brendan" && school == "Parsons") {
    console.log("Hello");
} -> Hello

name =="Brian" -> undefined




if (name == "Brendan" && school == "Parsons") {
    console.log("Hello");
} else {
    console.log("not true..")
} -> "not true.."
//  if/else statement means to check if the statement is true, and if it isn't, then run the else statement    //




//  SHORTCUTS    //
//  command + k clears the line    //
//  shift + enter lets you add in a line without asking for an answer   //




var counter = 1
counter = counter + 1; -> counter = 2
counter ++ -> 2
counter -- -> 0
//  increment or decrement means to get bigger or smaller by 1    //




for (var multiplier = 1; multiplier <= 10; multiplier++) {
    console.log(multiplier + 10);
}
//  <= means less than or equal to, >= means greater than or equal to   //
//  loops help you do something many times without having to rewrite it    //

for (var multiplier = 1; multiplier <= 10; multiplier++) {
    console.log(multiplier * 10);
} -> 




var colors = ["red", "yellow", "blue", "green"]
colors[2] -> "blue"

for (var index = 0; index <=3; index++) {
    console.log(colors[index])
}
//  colors is the array   //
//  we put less than or equal to 3 because we have 4 items in the array    //

var colors = ["red", "yellow", "blue", "green", "purple", "black", "orange"]

for (var index = 0; index <= 3; index++) {
    console.log(colors[index]);
}

colors.length -> 7
//  there are 7 colors in our array    //

for (var index = 0; index < colors.length; index++) {
    console.log(colors[index]);
} -> //will give you all the colors, no more than you need to//




for (var multiplier = 1; multiplier <= 10; multiplier++) {
    console.log(multiplier + 10);
    var start = "*";
    for (var i = 0)
}



for (var i = 0; i < 21; i++) {
    star = star + "*";
    console.log(star);
}
//  "i" is a common variable name, it's short for increment    //





____________







for (var multiplier = 1; multiplier <= 20; multiplier++) {
console.log (multiplier*2);
var atmark = "@";
for (var i = 20; i <=100; i++) {
atmark = atmark + "*";
}
}

for (var multiplier = 1; multiplier <= 10; multiplier++) {
    console.log(multiplier + 10);
    var star = "*";
}


for (var multiplier = 1; multiplier <= 10; multiplier++) {
    console.log(multiplier + 10);
    var star = "*";
for (var i = 2; 1 <= 10; i--) {
star = star + "*";
console.log(star);
}
}





console.log("hello world");
 
for (var multiplier = 1; multiplier < 11; multiplier++) {
	console.log(multiplier*6);
	var star = "*";
	for (var i = 0; i < 20; i++) {
		star = star + "*";
		console.log(star);
	}
}



__________



console.log("hello world");
 
for (var multiplier = 1; multiplier < 11; multiplier++) {
	console.log(multiplier*6);
	var star;
	for (var i = 0; i < 20; i++) {
		star = "*";
		console.log(star);
	}
}



__________



console.log("hello world");
 
for (var multiplier = 1; multiplier < 11; multiplier++) {
	console.log(multiplier*6);
	var star = "*";
	for (var i = 0; i < 20; i++) {
		console.log(star);
	}
}



__________




for (var multiplier = 1; multiplier < 11; multiplier++) {
	console.log(multiplier*6);
	var star = "*";
	for (var i = 0; i < 20; i++) {
		star = star + "*";
		console.log(star);
	}
}



_______


    
console.log("hello world");
for (var multiplier = 1; multiplier < 11; multiplier++) {
	console.log(multiplier);
	var mountain = "^";
	for (var i = 0; i < 3; i++) {
	mountain = mountain + "^";
	console.log(mountain);
	}
}
	
	

console.log("hello world");
for (var multiplier = 1; multiplier < 11; multiplier++) {
	console.log(multiplier*6);
	var star = "*";
	for (var i = 0; i < 20; i++) {
		star = star + "*";
		console.log(star);
	}
}



_______


    
console.log("hello world");
for (var multiplier = 1; multiplier < 11; multiplier++) {
	console.log(multiplier);
	var mountain = "^";
	for (var i = 10; i < 100; i++) {
	mountain = mountain + "^";
	console.log(mountain);
	}
}



console.log("blast-off!!!");
for (var multiplier = 1; multiplier < 11; multiplier++) {
	console.log(multiplier);
	var mountain = "^";
	for (var i = 0; i < 11; i++) {
	mountain = mountain + "^";
	console.log(mountain);
	}
}
console.log("t-minus");