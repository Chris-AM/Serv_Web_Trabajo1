let lista = [{
            producto: 'Agua',
            precio: 500
        },
        {
            producto: 'Cereal',
            precio: 2700
        },
        {
            producto: 'Carne',
            precio: 1990
        },
        {
            producto: 'Yoghurt',
            precio: 150
        },
        {
            producto: 'Café',
            precio: 1540
        },
        {
            producto: 'Tomate',
            precio: 800
        },
        {
            producto: 'Cebolla',
            precio: 700
        },
        {
            producto: 'Ají',
            precio: 500
        },
        {
            producto: 'Canela',
            precio: 500
        },
        {
            producto: 'Leche',
            precio: 870
        }
    ],
    sum = 0;

const $lista = document.querySelector('#lista');
const $ul = document.createElement("ul");
lista.forEach(producto => {
    let $liProducto = document.createElement("li");
    $liProducto.textContent = producto.producto + " $" + producto.precio;
    $ul.appendChild($liProducto);
    $lista.appendChild($ul);
})

const $sumaTotal = document.querySelector('#sumaTotal');
const $precioTotal = document.createElement("p");
lista.forEach(sumPrecios => {
    sum += sumPrecios.precio;
    $precioTotal.textContent = "$" + sum;
    $sumaTotal.appendChild($precioTotal);
});



const $tabla = document.querySelector('#tabla');
lista.forEach(producto => {
    const $tr = document.createElement("tr");
    let $tdProducto = document.createElement("td");
    $tdProducto.textContent = producto.producto;
    $tr.appendChild($tdProducto);
    let $tdPrecio = document.createElement("td");
    $tdPrecio.textContent = producto.precio;
    $tr.appendChild($tdPrecio);
    $tabla.appendChild($tr);
})

const $compraTotal = document.querySelector("#compraTotal");
const $precioFinal = document.createElement("p");
$precioFinal.textContent = sum;
$compraTotal.appendChild($precioFinal);