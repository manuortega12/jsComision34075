let carro = 0
let suma = 0


function opcion(op) {
    op = parseInt(prompt('ingrese un producto')) 
    return op
}

alert(`Seleccione cualquiera de los siguientes productos
    1- Monitor - $30000
    2- Teclado - $5000
    3- Mouse - $3000
    4- Salir`)     

let num = opcion()
while (num !== 4) {

    if (num === 1) {
        carro = 30000
        suma = suma + carro
    } else if (num === 2) {
        carro = 5000
        suma = suma + carro
    } else if (num === 3) {
        carro = 3000
        suma = suma + carro
    } else {
        alert('no eligio ningun producto')
    }
    num = opcion()    
}

console.log('el total de su carrito de compra es de ' + suma);


