imagen=document.getElementById("logo-container");
padre=imagen.parentNode;


$(window).on("scroll", function() {
    if($(window).scrollTop() > 90) {
        $(".menu").addClass("active");
    } else {
        //remover la propiedad del fondo del nav, así se vuelve transparente de nuevo
       $(".menu").removeClass("active");
    }
});

/*function eliminarElemento(){
	imagen = document.getElementById("top-logo");	
	padre = imagen.parentNode;
	padre.removeChild(imagen);
	}*/
var phone = document.getElementById("phone").value;
var name=document.getElementById("name").value;