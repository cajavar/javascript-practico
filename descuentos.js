// const precioOriginal = 100;
// const descuento = 1;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (100 - descuento)) / 100; //(P * (100 - D)) / 100

    return precioConDescuento; //Single Responsbility
}

// console.log({precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento});

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice").innerText = "El precio con descuento es $" + precioConDescuento;
    //resultPrice.innerText = "El precio con descuento es $" + precioConDescuento;
}