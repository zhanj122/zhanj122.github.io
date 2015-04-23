var cats = ["aa.jpg","baby.jpg","bike.jpg","blankie.jpg","chandler.jpg", "denver.JPG", "drake.jpg", "georgecostanza.png", "givenuppug.jpg", "givingup.jpg", "kdrama.jpg", "kevin.jpg", "patrick.png", "pugwholacksmotivationinlife.jpg", "sadpug.jpb", "screamingcat.jpg", "spoongeboob.jpg", "wetcat.jpg"];
 
var poems = ["How do you feel?", "How are you today?", "What time did you sleep last night?", "How is school?", "Are you ready for finals?", "What do you want to do in life?"];
 
var selectedpoem = false;
 
$(".go-button").click(function() {
  var nextpoem = poems[Math.floor(Math.random()*poems.length)];
  
  while (selectedpoem == nextpoem) {
    nextpoem = poems[Math.floor(Math.random()*poems.length)];
  }
  
  selectedpoem = nextpoem;
  $(".poem-holder").html(nextpoem);
  $(".cat-holder").html('<img src="' + cats[Math.floor(Math.random()*cats.length)]+ '">');
  var newheight = (Math.floor(Math.random() * 100) + 100) + "px";
  $(".line").css("height", newheight);
  
  for (var increment = 0; increment < 100; increment++) {
    $("body").append("<div class='dot'></div>"); 
  }
 
  $(".dot").each(function() {
    var newtop = Math.floor(Math.random()*100) + "%";
    var newleft = Math.floor(Math.random()*100) + "%";
    $(this).css("top",newtop);
    $(this).css("left",newleft);
  });
});