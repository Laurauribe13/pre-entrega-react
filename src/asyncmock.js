const productos = [
    {nombre: "Labial Anastasia", precio: 250000, id: "1", img: "../img/labial-anastasia.jpg", idCat:"1"},
    {nombre: "Labial Chanel", precio: 415000, id: "2", img: "../img/labial-chanel.jpg", idCat:"1"},
    {nombre: "Labial Dior", precio: 467000, id: "3", img: "../img/labial-dior.jpg", idCat:"1"},
    {nombre: "Labial Givenchy", precio: 515000, id: "4", img: "../img/labial-givenchy.jpg", idCat:"1"},
    {nombre: "Sombras Tarte", precio: 270000, id: "5", img: "../img/sombras tarte.jpg", idCat:"2"},
    {nombre: "Sombras Naked", precio: 245000, id: "6", img: "../img/sombras-naked.jpg", idCat:"2"},
    {nombre: "Sombras Nars", precio: 315000, id: "7", img: "../img/sombras-nars.jpg", idCat:"2"},
    {nombre: "Sombras Norvina", precio: 325000, id: "8", img: "../img/sombras-norvina.jpg", idCat:"2"},
    {nombre: "Pestañina Dior", precio: 410000, id: "9", img: "../img/pestanina-dior.jpg", idCat:"3"},
    {nombre: "Pestañina Lauder", precio: 425000, id: "10", img: "../img/pestanina-lauder.jpg", idCat:"3"},
    {nombre: "Pestañina Mac", precio: 330000, id: "11", img: "../img/pestanina-mac.jpg", idCat:"3"},
    {nombre: "Pestañina YSL", precio: 405000, id: "12", img: "../img/pestanina-ysl.jpg", idCat:"3"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}