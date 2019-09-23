$(function() {
    $(".tarjeta").on("click", function (){
        /* no se usa función flecha porque no funciona el this */
        $(this).toggleClass("flipped"); 
    });
});

