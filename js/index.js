
class NewProduct {
    constructor(id, name, price, imgSrc) {
        this.id = id
        this.name = name
        this.price = price
        this.imgSrc = imgSrc
    }
}

const monitor = new NewProduct(1, 'Monitor Samsung 24 pulgadas 75 hz', 30000, 'https://images.fravega.com/f500/32397e21c5240c13f2d32ad3842cd3e8.jpg')
const teclado = new NewProduct(2, 'Teclado Hyperx', 5000, 'https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-6489042.jpeg')
const mouse = new NewProduct(3, 'Mouse Reddragon', 3000, 'https://www.venex.com.ar/products_images/1582916326_m7191.png')
const auriculares = new NewProduct(4, 'Auriculares Hyperx', 10000, 'https://www.venex.com.ar/mods/html/fil/Model/ProductGrouper/27/5b8c64ccc7ba1-1429219484957-26030190-9173.jpg')
const silla = new NewProduct(5, 'Silla Noga', 35000, 'https://www.venex.com.ar/products_images/1661271239_t1-roja-1.png')
const memoria = new NewProduct(6, 'Memoria RAM DDR4 Hyperx 8GB', 8000, 'https://www.qloud.ar/SITES/IMG/joy-div-computers-09-2021/236_13-10-2022-11-10-49-memoria-ram-ddr4-8gb-2666mhz-hyperx-fury2.jpg')
const gabinete = new NewProduct(7, 'Gabinete Sentey', 15000, 'https://mauricomputacion.com.ar/images/productos/20641.webp')
const mother = new NewProduct(8, 'Mother ASUS ROG STRIX B550-F GAMING WIFI', 70000, 'https://www.venex.com.ar/products_images/1638901038_asdjsdhf.png')
const video = new NewProduct(9, 'Placa de video GTX 1660 6GB', 100000, 'https://http2.mlstatic.com/D_NQ_NP_668024-MLA49013933527_022022-O.webp')

const productos = [monitor, teclado, mouse, auriculares, silla, memoria, gabinete, mother, video]

let spreadProductos = [...productos]
console.log(spreadProductos);

let carrito = []

const cardContainer = document.querySelector('#cardContainer')

productos.forEach((producto) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <h3 class="cardTitle">${producto.name} </h3>
    <img src="${producto.imgSrc}" class="cardImg">
    <span class="cardPrice"> $${producto.price} </span>
    <button data-id="${producto.name}" class="buttonCTA"> Agregar al Carrito </button>
    `
    cardContainer.append(card)
})

const cartContainer = document.querySelector('#cartContainer')


const imprimirCarrito = () => {
    cartContainer.innerHTML = ''
    carrito.forEach((producto) => {
        const cartRow = document.createElement('div')
        cartRow.className = 'cartRow'
        cartRow.innerHTML = `
        <div class="cartImg">
        <img src="${producto.imgSrc}">
        </div>
        <div class="cartTitle"><span> ${producto.name}</span></div>
        <div class="cartPrice"><span> $${producto.price}</span></div>
        `
        cartContainer.append(cartRow)
    })
}

const agregarProducto = (e) => {

    const productoElegido = e.target.getAttribute('data-id')

    const producto = productos.find((producto) => producto.name == productoElegido)
    carrito.push(producto)
    imprimirCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito))
    Swal.fire(
        '',
        `${producto.name} - Agregado con éxito`,
        'success'
    )

}

const botonesCompra = document.querySelectorAll('.buttonCTA')
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})

const vaciarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        localStorage.removeItem('carrito')
    }
    carrito = []
    imprimirCarrito()
}

const comprarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        localStorage.removeItem('carrito')
    }
    carrito = []
    imprimirCarrito()
}

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    imprimirCarrito()
}


const vaciarCarritoBtn = document.querySelector('#vaciarCarrito')
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)

const comprarCarritoBtn = document.querySelector('#comprarCarrito')
comprarCarritoBtn.addEventListener('click', comprarCarrito)

document.querySelector("#vaciarCarrito").addEventListener("click", () => {
    Swal.fire(
        '',
        'CARRITO VACIO',
        'info'
    )
})

document.querySelector("#comprarCarrito").addEventListener("click", () => {
    Swal.fire(
        '',
        'Gracias por su compra!',
        'success'
    )
})

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch("../data/data.json")
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}



