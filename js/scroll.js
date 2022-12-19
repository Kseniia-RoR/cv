window.addEventListener("scroll", () => {

    let hauteur = document.documentElement.scrollHeight - window.innerHeight

    let position = window.scrollY

    let largeur = document.documentElement.clientWidth

    let barre = position / hauteur * largeur

    document.getElementById("progress").style.width = barre + "px";

})


$(window).on("load", function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo("slow", 1);
                }
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity") == 1) {
                    $(this).fadeTo("slow", 0);
                }
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});