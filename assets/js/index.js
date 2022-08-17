// creando productos

class ProductoInicio {
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
    new ProductoInicio(1, "Grand Theft Auto V", 600, "accion", "../assets/img/gtashop.jpg"),
    new ProductoInicio(2, "No Man's Sky", 850, "aventura", "../assets/img/nomanshop.jpg"),
    new ProductoInicio(3, "Red Dead Redemption 2", 3000, "accion", "../assets/img/rdr2shop.jpg"),
    new ProductoInicio(4, "Stellaris: Overlord", 850, "estrategia", "../assets/img/stellashop.jpg"),
    new ProductoInicio(5, "FIFA 22", 850, "deportes", "../assets/img/fifa22shop.jpg"),
    new ProductoInicio(6, "Call of Duty: Vanguard", 4300, "accion", "../assets/img/vanguardshop.jpg"),
    new ProductoInicio(7, "Minecraft", 4000, "aventura", "../assets/img/minecraftshop.jpg"),
    new ProductoInicio(8, "Monster Hunter: Rise", 1500, "rol", "../assets/img/mhuntershop.jpg"),
]

//cargando los productos en html

const cargarProd = (productos)=>{
    
    const divProd=document.getElementById("productos")
    divProd.innerHTML="";
    productos.forEach((producto)=>{
        divProd.innerHTML+=`
        <div class="product-item">
            <img src=${producto.imagen} alt="">
            <p class="text-danger" >Cod.#<span id="itemId${producto.id}">${producto.id}</span></p>
            <h6>${producto.nombre}</h6>
            <p class="text-danger">${producto.precio} ARS$</p>
            <div id="addToCarritoBtn" class="cant-btn text-center">
                <button type="button" class="btn btn-secondary mb-1 mt-1" id="restarProd${producto.id}">-</button>
                <span class="mx-4 p-1" id="prodNr${producto.id}">1</span>
                <button type="button" class="btn btn-secondary mb-1 mt-1" id="sumarProd${producto.id}">+</button>
                <button type="button" class="buy-2 btn btn-danger buy" id="buybtn${producto.id}">COMPRAR</button>
            </div>
        </div>`
    })};

cargarProd(listaProd);