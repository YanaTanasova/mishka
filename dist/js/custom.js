$(function() {

    $("#js-responsive-btn--close").on("click", function(){
    
    	$("#js-nav").slideUp();
    	$("#js-responsive-btn--open").addClass("open--show");
    	$(this).addClass("close--hide")
    });

    $("#js-responsive-btn--open").on("click", function(){
    
    	$("#js-nav").slideDown();
    	$("#js-responsive-btn--close").removeClass("close--hide")
    	$(this).removeClass("open--show")
    });
});