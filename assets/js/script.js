
//-------------precio-y-cantidad
let cantidadInput = document.getElementById("cantidadInput");
let precioInput = document.getElementById("precioInput");
let cantidadResultado = document.getElementById("cantidadResultado");
let precioResultado = document.getElementById("precioResultado");
let totalResultado = document.getElementById("totalResultado");
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
    //----------precio y carro
    let cantidad = parseInt(cantidadInput.value);
    let precio = 400000;
    let total = cantidad * precio;

    cantidadResultado.textContent = cantidad;
    precioResultado.textContent = precio;
    totalResultado.textContent = total;
    //---------color
    cambiarColorBtn = document.querySelector('cambiarColorBtn')
    const colorElegido = colorInput.value;
    circle.style.backgroundColor = colorElegido;
    //---------fin color 
});
