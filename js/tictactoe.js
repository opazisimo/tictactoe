$(document).ready(function() {
    console.log( "cargao el jquery" );

// Haciendo que aparezcan X y O
    function ticTac(cajita, contenido){
      $(cajita).click(function(){
        $(contenido).html("X");
      });

      $(cajita).dblclick(function(){
        $(contenido).html("O");
      });
    };// acá termina la funcion ticTac

    ticTac("#a1", "#objA1");
    ticTac("#a2", "#objA2");
    ticTac("#a3", "#objA3");
    ticTac("#b1", "#objB1");
    ticTac("#b2", "#objB2");
    ticTac("#b3", "#objB3");
    ticTac("#c1", "#objC1");
    ticTac("#c2", "#objC2");
    ticTac("#c3", "#objC3");

  }); //acá termina el document ready