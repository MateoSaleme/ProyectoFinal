let preciototal;

let localstoragearr = JSON.parse(localStorage.getItem("carrito"));
localstoragearr.forEach((storage)=>{
    preciototal+=storage.precio*storage.cantidad;
    console.log(precio.storage);
    console.log(cantidad.storage);
});

document.getElementById("precioTotal").textContent = preciototal;