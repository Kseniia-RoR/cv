$(function() {
    $("#btn").click(function(event) {
        $(event.target).focus();
        $("#panel").slideToggle("slow");
    });
    $('#btn').blur(function(event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#panel").hide('slow');
        }
    });
});