//$(document).click(function() {
//    var fireworks = ["assets/firework1.gif", "assets/firework2.gif"];
//    var image = '<img src="' + fireworks +'" />';
    
//    img = '<img src="path/file.jpg">';
        
//   $('.background').append(image);
//});


var fireworks = ["assets/firework1.gif", "assets/firework2.gif", "assets/firework3.gif", "assets/firework4.gif", "assets/firework5.gif", "rocket.gif"];

var selectedfirework = false;
 
$(document).click(function() {
  var nextfirework = fireworks[Math.floor(Math.random()*fireworks.length)];
  
  while (selectedfirework == nextfirework) {
    nextfirework = fireworks[Math.floor(Math.random()*fireworks.length)];
  }
  
  selectedfirework = nextfirework;
  $(".background").html(nextfirework);
  $(".background").html('<img src="' + fireworks[Math.floor(Math.random()*fireworks.length)]+ '">');
}); 



//$(document).click(function() {
//    var path  = 'assets/firework1.gif',
//        image = '<img src="' + path +'" />';
        
//   $('.background').append(image);
//}); 

