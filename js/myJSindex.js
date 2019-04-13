$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
  $(".dropdown").mouseenter(function(){
  	$("#dropdown_megamenu").fadeIn(1200);
  });
  $(".dropdown").mouseleave(function(){
  	$("#dropdown_megamenu").fadeOut();
  });
});
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}