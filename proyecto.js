let listaPerfumes = [
    {nombre: "Perfume1", precio: 15000, stock: 5},
    {nombre: "Perfume2", precio: 5500, stock: 10},
    {nombre: "Perfume3", precio: 25000, stock: 4},
    {nombre: "Perfume4", precio: 17000, stock: 9},
    {nombre: "Perfume5", precio: 11000, stock: 9},
    {nombre: "Perfume6", precio: 7800, stock: 10},
];


let carrito = [];

let total = 0;

let continuar = confirm("Bienvenido a la tienda\nPresiona 'Aceptar' para continuar");

if (continuar) {
    alert("¡Gracias por entrar! Explora nuestros productos.");
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < listaPerfumes.length; i++) {
        mensaje = mensaje + (i+1)+". ";
        mensaje = mensaje + listaPerfumes[i].nombre+("      -Precio: "+ listaPerfumes[i].precio+"\n")
}
function agregarCarrito(){
    let agregar = parseInt(prompt("Ingresa el numero del Perfume que queres agregar al carrito (en caso de no querer continuar coloca 0 para salir): "));
    if(agregar === 0){
        return false;
    }else if (agregar > 0 && agregar <= listaPerfumes.length){
        let productoSeleccionado = listaPerfumes[agregar -1];
        if(productoSeleccionado.stock > 0){
            carrito.push(productoSeleccionado);
            productoSeleccionado.stock--;
            alert(productoSeleccionado.nombre+" agregado al carrito. Stock restante: "+productoSeleccionado.stock);
        }else {
            alert("Lo sentimos,"+productoSeleccionado.nombre+" esta agotado.");
        }
        return true;
} else {
    alert("Opcion incorrecta, proba nuevamente.");
    return true;
}
}
alert(mensaje)
} else {
    alert("Ha cancelado la operación. ¡Gracias vuelva pronto´s!");
} 

let seguirComprando = true;
while (seguirComprando){
    seguirComprando = agregarCarrito();
}

if (carrito.length>0){
    let mostrar = "Carrito de compras: \n";
    for(let i=0; i < carrito.length; i++){
        mostrar=mostrar + (i+1)+". "+ carrito[i].nombre+ " -Precio"+carrito[i].precio+ "\n";
        total += carrito [i].precio;
    }
    mostrar=mostrar+"\nTotal a pagar: "+total;
    alert(mostrar);
}else {
    alert("El carrito esta vacio");
}