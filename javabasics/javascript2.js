$(function(){
    $(".button1").click(function(){
    $("#box").css({'height':400,'width':400});
  });
  $(".button2").click(function(){
    $("#box").css('background-color','blue');
  });
  $(".button3").click(function() {
    $("#box").fadeOut();
  });
  $(".button4").click(function() {
    $("#box").show().css({'height':150, 'width':150, 'background-color':'orange'});
  });
});
//All plagiarised from the web :(
    document.get