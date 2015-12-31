$(document).ready(function(){
  $(".word").hover(function(){
    $("body").toggleClass("hover");
    $(".word").toggleClass("text-hover");
  });
});
