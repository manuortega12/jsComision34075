
class NewProduct {
	constructor(id,name,price, imgSrc){
		this.id = id
		this.name = name
		this.price = price
        this.imgSrc = imgSrc
	}
}

const monitor = new NewProduct(1,'Monitor Samsung',30000, 'https://images.fravega.com/f500/32397e21c5240c13f2d32ad3842cd3e8.jpg')
const teclado = new NewProduct(2,'Teclado Hyperx',5000,'https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-6489042.jpeg')
const mouse = new NewProduct(3,'Mouse Reddragon',3000,'https://www.venex.com.ar/products_images/1582916326_m7191.png')

const productos = [monitor, teclado, mouse]

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
        <div class="cartTitle"><span> Monitor ${producto.name}</span></div>
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
}

const botonesCompra = document.querySelectorAll('.buttonCTA')
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})


if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    imprimirCarrito()
}

const vaciarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        localStorage.removeItem('carrito')
    }
    carrito = []
    imprimirCarrito()
}

const vaciarCarritoBtn = document.querySelector('#vaciarCarrito')
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
