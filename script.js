 //jQuery | $

 console.log(jQuery);
 console.log($);

$(function (){
 var $element = $(".wrapper");

 var $links = $("p");

 $links.css({
color:"red",
  background: "black"
 });

 $links.attr("href", "http://google.com/");
