$(document).ready(function () {
        
    $("#menu-btn").click(slider);
    
    function slider() {
        var alpha =  $("#links").toggle(2000);
        var beta = $("#menu-btn").toggleClass('turn');
    }
    
 })