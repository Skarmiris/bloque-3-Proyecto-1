
//-------------precio-y-cantidad
let cantidadInput = document.getElementById("cantidadInput");
let precioInput = document.getElementById("precioInput");
let calcularBtn = document.getElementById("calcularBtn");
let resultadoTotal = document.getElementById("resultadoTotal");
//---------------color
let colorInput = document.querySelector('#colorInput');
let cambiarColorBtn = document.querySelector('#cambiarColorBtn');
let circle = document.querySelector('#circle');
//---------------boton-y-intentos-de-precio
let presBoton = document.querySelector('#presBoton');
let totalCompra = document.querySelector('#totalCompra');
let cantidadCarrito = document.querySelector('#cantidadCarrito');
let indiqueCantidad = document.querySelector('#indiqueCantidad');


presBoton.addEventListener("click", () => {
    //---------color
    cambiarColorBtn = document.querySelector('cambiarColorBtn')
    let colorElegido = colorInput.value;
    circle.style.backgroundColor = colorElegido;
    //---------fin color
    console.log(indiqueCantidad);
});
