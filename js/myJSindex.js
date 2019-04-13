$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
  $(".dropdown").mouseenter(function(){
  	$("#dropdown_megamenu").fadeIn(1200);
  });
  $(".dropdown").mouseleave(function(){
  	$("#dropdown_megamenu").fadeOut();
  });
  $(".openbtn").click(function() {
     $("#main").addClass('prevent-click');
      $("#nav_fixed").removeClass('sticky'); 
  });
   $(".closebtn").click(function() {
     $("#main").removeClass('prevent-click');
     $("#nav_fixed").addClass('sticky');
  });
  $("#nav_fixed").addClass('sticky');
   $('.abc').click(function (e) {  
        $('.abc').removeClass('selected');  
        $(this).addClass('selected');  
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
