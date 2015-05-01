//$(document).click(function() {
//    var fireworks = ["assets/firework1.gif", "assets/firework2.gif"];
//    var image = '<img src="' + fireworks +'" />';
        
//   $('.background').append(image);
//});
    
    
//    img = '<img src="path/file.jpg">';



var fireworks = ["assets/firework_disk_copper_2f_40fbreak_matte.gif", 
                "assets/firework_disk_orange_2f_18fbreak_tweaked_matte.gif", 
                "assets/firework_disk_teal_2f_24fbreak_matte.gif",
                "assets/firework_flower_green_2f_18fbreak_tweaked_matte.gif",
                "assets/firework_flower_magenta_4f_75fbreak_matte.gif",
                "assets/firework_flower_neon_2f_40fbreak_tweaked_matte.gif",
                "assets/firework_palm_blue_3f_23fbreak_matte.gif",
                "assets/firework_palm_blue2_2f_25fbreak_matte.gif",
                "assets/firework_palm_gold_3f_36fbreak_matte.gif",
                "assets/shooting-star_2f_60f_matte.gif"];

var audio = ["assets/firework1.wav", 
            "assets/firework2.wav"];

var clicked = false;
// why is var clicked true or false? what difference does it make
 
$(document).click(function(event) {
    var nextfirework = fireworks[Math.floor(Math.random()*fireworks.length)];
  
    while (clicked == nextfirework) {
        nextfirework = fireworks[Math.floor(Math.random()*fireworks.length)];
    }
  
    clicked = nextfirework;
    
    var x_coord = event.pageX,
        y_coord = event.pageY,
        image = '<img class="firework" src="' + nextfirework + '" style="top: ' + y_coord + 'px; left: ' + x_coord + 'px;" />'
    
    $(".fireworks-container").append(image);
}); 



//$("play button").click(
//    function(){$("play button").css({"visibility": "hidden"});},
//    function(){$("recording button").css({"visibility": "visible"});},

//$("recording button").click(
//    function(){$("recording button").css({"visibility": "hidden"});},
//    function(){$("stop button").css({"visibility": "visible"});},


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

