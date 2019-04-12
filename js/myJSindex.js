$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
  $(".dropdown").mouseenter(function(){
  	$("#dropdown_megamenu").fadeIn(1200);
  });
  $(".dropdown").mouseleave(function(){
  	$("#dropdown_megamenu").fadeOut();
  });
   $('#sidebarCollapse').on('click', function () {
	     $('#sidebar').toggleClass('active');
	     $(this).toggleClass('active');
    });
});