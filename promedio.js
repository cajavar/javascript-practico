//const lista1 = [100, 200, 300, 500];

function calcularMediaAritmetica(lista) {
    /*let sumaLista = 0;

    for (let i = 0; i < lista1.length; i++) {
        sumaLista += lista[i];
    }*/

    /*const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );*/

    // const reducidor = (valorAcumulado = 0, valorActual) => valorAcumulado + valorActual;
    const sumaLista = lista.reduce((valorAcumulado = 0, valorActual) => valorAcumulado + valorActual);
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}