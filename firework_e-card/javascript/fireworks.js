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
            "assets/firework2.wav",
            "assets/firework3.wav",
            "assets/firework4.wav",
            "assets/firework5.wav",
            "assets/firework6.wav",
            "assets/firework7.wav",
            "assets/firework8.wav",
            "assets/firework9.wav",
            "assets/firework10.wav"];



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

$('.record').click(function() {
    $(this).addClass('hide');
    $('.recording').removeClass('hide');
});

$('.recording').hover(function() {
    $(this).toggleClass('stop');
});

$('.recording').click(function() {
     $(this).addClass('hide');
     $('.lightbox-wrapper').removeClass('hide');
});