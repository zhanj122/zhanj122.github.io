$(document).ready(function (){
   var a = function(self){
      self.anchor.attr('target','_blank');
   };
   $("#pikame").PikaChoose({buildFinished:a});
});