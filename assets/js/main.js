// creando productos

class Producto {
    constructor(id, nombre, precio, categoria, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}

//listando productos

const listaProd = [
    new Producto(1, "Grand Theft Auto V", 600, "accion", "../assets/img/gtashop.jpg"),
    new Producto(2, "No Man's Sky", 850, "aventura", "../assets/img/nomanshop.jpg"),
    new Producto(3, "Red Dead Redemption 2", 3000, "accion", "../assets/img/rdr2shop.jpg"),
    new Producto(4, "Stellaris: Overlord", 850, "estrategia", "../assets/img/stellashop.jpg"),
    new Producto(5, "FIFA 22", 850, "deportes", "../assets/img/fifa22shop.jpg"),
    new Producto(6, "Call of Duty: Vanguard", 4300, "accion", "../assets/img/vanguardshop.jpg"),
    new Producto(7, "Minecraft", 4000, "aventura", "../assets/img/minecraftshop.jpg"),
    new Producto(8, "Monster Hunter: Rise", 1500, "rol", "../assets/img/mhuntershop.jpg"),
    new Producto(9, "F1® 2022", 6200, "deportes", "../assets/img/formula1shop.jpg"),
    new Producto(10, "Dark Souls 3", 3000, "rol", "../assets/img/ds3shop.jpg"),
    new Producto(11, "Age of Empires 2", 300, "estrategia", "../assets/img/aoe2shop.jpg"),
    new Producto(12, "Borderlands 3", 3200, "accion", "../assets/img/borderlands3shop.jpg"),
    new Producto(13, "Days Gone", 4000, "accion", "../assets/img/daysgoneshop.jpg"),
    new Producto(14, "Elden Ring", 6500, "rol", "../assets/img/eldenringshop.jpg"),
    new Producto(15, "The Elder Scrolls V: Skyrim", 2000, "rol", "../assets/img/skyrimshop.jpg"),
    new Producto(16, "Ready Or Not", 899, "accion", "../assets/img/readyornotshop.jpg"),
]

//cargando los productos en html

const cargarProd = (productos)=>{
    const divProd=document.getElementById("productos")
    divProd.innerHTML="";
    productos.forEach((producto)=>{
        divProd.innerHTML+=`
        <div class="product-item">
            <img src=${producto.imagen} alt="">
            <p class="text-danger" >Cod.#<span id="itemId">${producto.id}</span></p>
            <h6>${producto.nombre}</h6>
            <p class="text-danger">${producto.precio} ARS$</p>
            <div id="addToCarritoBtn" class="cant-btn text-center">
                <button type="button" class="btn btn-secondary mb-1 mt-1" onclick="restarProd${producto.id}">-</button>
                <span class="mx-4 p-1" id="prodNr${producto.id}">1</span>
                <button type="button" class="btn btn-secondary mb-1 mt-1" onclick="sumarProd${producto.id}">+</button>
                <button type="button" class="buy-2 btn btn-danger buy" id="buybtn">COMPRAR</button>
            </div>
        </div>`
    })};

cargarProd(listaProd);

//filtrado y busqueda de productos

const busqueda = document.getElementById("btn-buscar");
busqueda.addEventListener("click", (e)=>{
    const inputProd = document.getElementById("input-buscar").value;
    e.preventDefault();
    filtrarProd(inputProd);
});

function filtrarProd(inputProd){
    const filtrar = listaProd.filter((producto)=>producto.nombre.toUpperCase().indexOf(inputProd.toUpperCase())!==-1);
    cargarProd(filtrar);
};

//carrito de compras
let cantidad = document.getElementById("prodNr")
let id = document.getElementById("itemId")
let carrito = [
    [id, cantidad]
]

const agregarProd = document.getElementById("buybtn");
agregarProd.addEventListener("click", (e)=>{
    e.preventDefault();
    agregarCarrito();
});


function agregarCarrito() {
    carrito.push({id, cantidad})
    console.log(carrito)
}

agregarProd.addEventListener("click", )

//cantidad de productos

function sumarProd(){

};

function restarProd() {

};

