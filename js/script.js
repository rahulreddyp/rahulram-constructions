/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
/*Scroll to top when arrow up clicked END*/



// When the user scrolls down 80px from the top of the document, resize the navbar's padding by adding shrink 
$(document).on("scroll", function(){
 
    if ($(document).scrollTop() > 80){
        $(".primary-nav").addClass("shrink");
    } else {
        $(".primary-nav").removeClass("shrink");
    }

});