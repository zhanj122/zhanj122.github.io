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
                "assets/ufo.gif"];

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

$('.record').click(function(event) {
    event.stopImmediatePropagation();
    $(this).addClass('hide');
    $('.recording').removeClass('hide');
    $('.recording-message').addClass('show');
    $('.time').removeClass('hide');
    $(".fireworks-container").html("");
    start_timer();
});

function start_timer() {
    setInterval(increment_time, 1000);
}

function increment_time() {
    var current_time = eval($('.timer').html()) + 1;
    
    $('.timer').html(current_time);
}

$('.recording').hover(function() {
    $(this).toggleClass('stop');
});

$('.recording').click(function() {
     $(this).addClass('hide');
     $('.lightbox-wrapper').removeClass('hide');
     $('.recording-message').removeClass('show');
});

$('.nevermind').click(function() {
    location.reload();
});


// $(".band-button").css("background-color", "red");
// var name = fireworks[0];


// function DisplayTime(){
// if (!document.all && !document.getElementById)
// return
// timeElement=document.getElementById? document.getElementById("curTime"): document.all.tick2
// var CurrentDate=new Date()
// var minutes=CurrentDate.getMinutes()
// var seconds=CurrentDate.getSeconds()
// if (minutes<=9) minutes="0"+minutes;
// if (seconds<=9) seconds="0"+seconds;
// var currentTime=hours+":"+minutes+":"+seconds;
// timeElement.innerHTML="<font style='font-size:12px;font-weight:bold;'>"+currentTime+"</b>"
// setTimeout("DisplayTime()",1000)
// }
// window.onload=DisplayTime


// var h=0;
// var m=0;
// var s=0;
// function to_start(){

// switch(document.getElementById('btn').value)
// {
// case 'Stop':
// window.clearInterval(tm); // stop the timer 
// document.getElementById('btn').value='Start';
// break;
// case 'Start':
// tm=window.setInterval('disp()', 1000);
// document.getElementById('btn').value='Stop';
// break;
// }
// }


// function disp(){
// // Format the output by adding 0 if it is single digit //
// if(s<10){var s1='0' + s;}
// else{var s1=s;}
// if(m<10){var m1='0' + m;}
// else{var m1=m;}
// if(h<10){var h1='0' + h;}
// else{var h1=h;}
// // Display the output //
// str= h1 + ':' + m1 +':' + s1 ;
// document.getElementById('n1').innerHTML=str;
// // Calculate the stop watch // 
// if(s<59){ 
// s=s+1;
// }else{
// s=0;
// m=m+1;
// if(m==60){
// m=0;
// h=h+1;
// } // end if m ==60
// }// end if else s < 59
// // end of calculation for next display

// }