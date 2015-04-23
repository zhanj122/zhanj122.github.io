var faces = ["ross.jpg", "chicken.jpg", "pikachu.jpg", "death.jpg", "aa.jpg", "bike.jpg","blankie.jpg","chandler.jpg", "denver.JPG", "drake.jpg", "georgecostanza.png", "givenuppug.jpg", "givingup.jpg", "kdrama.jpg", "kevin.jpg", "patrick.png", "pugwholacksmotivationinlife.jpg", "sadpug.jpg", "screamingcat.jpg", "spoongeboob.jpg", "wetcat.jpg"];
 
var questions = ["How do you feel?", "How are you today?", "When did you sleep last night?", "How is school?", "Are you ready for finals?", "What do you want to do in life?"];

var selectedquestion = false;
 
$(".go-button").click(function() {
  var nextquestion = questions[Math.floor(Math.random()*questions.length)];
  
  while (selectedquestion == nextquestion) {
    nextquestion = questions[Math.floor(Math.random()*questions.length)];
  }
  
  selectedquestion = nextquestion;
  $(".question-holder").html(nextquestion);
  $(".face-holder").html('<img src="' + faces[Math.floor(Math.random()*faces.length)]+ '">');
}); 