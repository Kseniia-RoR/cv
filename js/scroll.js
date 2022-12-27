window.addEventListener("scroll", () => {

    let hauteur = document.documentElement.scrollHeight - window.innerHeight

    let position = window.scrollY

    let largeur = document.documentElement.clientWidth

    let barre = position / hauteur * largeur

    document.getElementById("progress").style.width = barre + "px";

})