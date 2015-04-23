//$(document).click(function() {
//    var fireworks = ["assets/firework1.gif", "assets/firework2.gif"];
//    var image = '<img src="' + fireworks +'" />';
        
//   $('.background').append(image);
//});
    
    
//    img = '<img src="path/file.jpg">';


var fireworks = ["assets/firework1.gif", "assets/firework2.gif", "assets/firework3.gif", "assets/firework4.gif", "assets/firework5.gif", "assets/rocket.gif"];

var clicked = false;
// why is var clicked true or false? what difference does it make
 
$(document).click(function() {
    var nextfirework = fireworks[Math.floor(Math.random()*fireworks.length)];
  
    while (clicked == nextfirework) {
    nextfirework = fireworks[Math.floor(Math.random()*fireworks.length)];
  }
  
clicked = nextfirework;
    $(".fireworks-container").html(nextfirework);
    $(".fireworks-container").html('<img src=" '+fireworks[Math.floor(Math.random()*fireworks.length)]+' ">');
}); 



//  clicked = nextfirework;
//  $(".fireworks-container").html(nextfirework);
//  $(".fireworks-container").html('<img src="' + fireworks[Math.floor(Math.random()*fireworks.length)]+ '">');
//}); 

// single quotation is paired inside-out/outside-in
// but you need space around the equation
// so in:       $(".fireworks-container").html('<img src="' + fireworks[Math.floor(Math.random()*fireworks.length)]+ '">');
//              ' + fireworks[Math.floor(Math.random()*fireworks.length)]+ '    is its own thing

// while loops means no matter how many times you click, it's going to generate a new image over and over again

// single = assigning a value to something
// double == means it's equal to

//$(document).click(function() {
//    var path  = 'assets/firework1.gif',
//        image = '<img src="' + path +'" />';
        
//   $('.background').append(image);
//}); 

