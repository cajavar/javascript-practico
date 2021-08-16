const lista1 = [100, 2, 400, 100000000];
const mitadLista1 = parseInt(lista1.length / 2);
let mediana = 0;

lista1.sort(function (a, b) { return a - b;});

function esPar(numero) {
    if (numero % 2 === 0)
        return true;
    else
        return false;
}

//Si la lista es par
if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];

    mediana = (elemento1 + elemento2) / 2;
}

//Si la lista es impar
else {
    mediana = lista1[mitadLista1];
}