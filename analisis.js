// Helpers o Utils
function esPar (numero) {
    return numero % 2 === 0;
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((valorAcumulado = 0, valorActual) => valorAcumulado + valorActual);
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


// Calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    let mediana = 0;

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    }
    else {
        mediana = lista[mitad];
    }

    return mediana;
}


// Mediana general
const salariosCol = colombia.map( 
    function (obj) {
        return obj.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);


//Mediana del top 10%
const spliceStart = (salariosColSorted.length * (100 - 10) / 100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol, medianaTop10Col});