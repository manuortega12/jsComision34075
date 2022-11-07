let carro = 0
let suma = 0
let cantMonitor = 0
let cantTeclado = 0
let cantMouse = 0

const prodArray = []

class NewProduct {
	constructor(id,name,price){
		this.id = id
		this.name = name
		this.price = price
	}
}

const monitor = new NewProduct(1,'monitor samsung',30000,2)
const teclado = new NewProduct(2,'teclado hyperx',5000,5)
const mouse = new NewProduct(3,'mouse reddragon',3000,10)

function opcion(op) {
    op = parseInt(prompt(`Seleccione cualquiera de los siguientes productos
    1- Monitor - $30000
    2- Teclado - $5000
    3- Mouse - $3000
    4- Salir`))      
    return op
}

let num = opcion()
while (num !== 4) {
    if (num === 1) {
        carro = monitor.price
        suma = suma + carro
        cantMonitor += 1
        prodArray.push(monitor)
    } else if (num === 2) {
        carro = teclado.price
        suma = suma + carro
        cantTeclado += 1
        prodArray.push(teclado)
    } else if (num === 3) {
        carro = mouse.price
        suma = suma + carro
        cantMouse += 1
        prodArray.push(mouse)
    } else {
        alert('no eligio ningun producto')
    }
    num = opcion()    
}


if (cantMonitor != 0) {
    console.log('usted eligio ' + cantMonitor + ' ' + monitor.name);
}
if (cantTeclado != 0) {
    console.log('usted eligio ' + cantTeclado + ' ' + teclado.name);
}
if (cantMouse != 0) {
    console.log('usted eligio ' + cantMouse + ' ' + mouse.name);
}
console.log('usted tiene en el carrito ' + prodArray.length + ' productos');
console.log('el total de su carrito de compra es de ' + suma);


