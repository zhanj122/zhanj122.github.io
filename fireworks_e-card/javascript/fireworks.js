$('#runner').runner();

console.log("hello world");

var fireworks = ["assets/hot-air-balloon_loop1.gif",
                "assets/firework_disk_copper_1f_80fbreak.gif",
                "assets/firework_disk_copper_2f_40fbreak.gif",
                "assets/firework_disk_copper_2f_loop1.gif",
                "assets/firework_disk_copper_3f_45fbreak.gif",
                "assets/firework_disk_orange_1f_28fbreak.gif",
                "assets/firework_disk_orange_2f_18fbreak.gif",
                "assets/firework_disk_orange_3f_28fbreak.gif",
                "assets/firework_disk_orange_3f_loop1.gif",
                "assets/firework_disk_teal_1f_24fbreak.gif",
                "assets/firework_disk_teal_1f_loop1.gif",
                "assets/firework_disk_teal_2f_24fbreak.gif",
                "assets/firework_disk_teal_2f_loop1.gif",
                "assets/firework_disk_teal_3f_24fbreak.gif",
                "assets/firework_flower_aqua_1f_loop1.gif",
                "assets/firework_flower_aqua_2f_60fbreak.gif",
                "assets/firework_flower_aqua_2f_120fbreak.gif",
                "assets/firework_flower_green_1f_60fbreak.gif",
                "assets/firework_flower_green_2f_20fbreak.gif",
                "assets/firework_flower_green_3f_36fbreak.gif",
                "assets/firework_flower_green_4f_loop3.gif",
                "assets/firework_flower_magenta_1f_45fbreak.gif",
                "assets/firework_flower_magenta_2f_36fbreak.gif",
                "assets/firework_flower_magenta_4f_75fbreak.gif",
                "assets/firework_flower_magenta_5f_loop1.gif",
                "assets/firework_flower_neon_1f_90fbreak.gif",
                "assets/firework_flower_neon_1f_150fbreak.gif",
                "assets/firework_flower_neon_2f_36fbreak.gif",
                "assets/firework_palm_blue_3f_23fbreak.gif",
                "assets/firework_palm_blue2_2f_25fbreak.gif",
                "assets/firework_palm_gold_3f_36fbreak.gif",
                "assets/hot-air-balloon_loop1.gif",
                "assets/hot-air-balloon.gif",
                "assets/shooting-star_2f_60f.gif",
                "assets/shooting-star_loop1.gif",
                "assets/ufo_loop1.gif",
                "assets/ufo.gif",
                "assets/skymessage1.gif",
                "assets/constellation_pegasus.gif"];

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

$('.record').click(function(event) {
    event.stopImmediatePropagation();
    $(this).addClass('hide');
    $('.recording').removeClass('hide');
    $('.recording-message').addClass('show');
    $(".fireworks-container").html("");
    start_timer();
    $('.timer').addClass('show');
    $('.timer').removeClass('hide');
});

function start_timer() {
    $('#runner').runner('start');
}

$('.recording').hover(function() {
    $(this).toggleClass('stop');
    $('.recording-message').addClass('hide');
    $('.recording-message').removeClass('show');
}, function() {
    $('.recording-message').addClass('show');
    $('.recording-message').removeClass('hide');
});

$('.recording').click(function() {
     $(this).addClass('hide');
     $('.lightbox-wrapper').removeClass('hide');
});

$('.nevermind').click(function() {
    location.reload();
});

window.onload = function(){
    $('.timer').addClass('hide');
    $('.timer').removeClass('show');
};

var favicons = ["assets/favicon1.png", 
                "assets/favicon2.png",
                "assets/favicon3.png", 
                "assets/favicon4.png", 
                "assets/favicon5.png", 
                "assets/favicon6.png", 
                "assets/favicon7.png",
                "assets/favicon8.png", 
                "assets/favicon9.png", 
                "assets/favicon10.png", 
                "assets/favicon11.png", 
                "assets/favicon12.png", 
                "assets/favicon13.png", 
                "assets/favicon14.png", 
                "assets/favicon15.png", 
                "assets/favicon16.png", 
                "assets/favicon17.png", 
                "assets/favicon18.png", 
                "assets/favicon19.png", 
                "assets/favicon20.png", 
                "assets/favicon21.png", 
                "assets/favicon22.png", 
                "assets/favicon23.png", 
                "assets/favicon24.png", 
                "assets/favicon25.png", 
                "assets/favicon26.png", 
                "assets/favicon27.png", 
                "assets/favicon28.png", 
                "assets/favicon29.png"];
                
var randomfav = favicons[Math.floor(Math.random()*favicons.length)];
console.log(randomfav);
$(".randomfavicon").attr("href", randomfav);
