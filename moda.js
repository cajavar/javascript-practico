const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1, 3, 3, 3, 3, 2];

const lista1Count = {};

// lista1Count["Nombre"] = "Camilo";
// lista1Count.Apellido = "Vargas";

//Convertimos lista1 en un objeto lista1Count
lista1.map(
    function (elemento) {

        //Si el elemento ya existe en lista1Count
        if(lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }
        //Si el elemento no existe en lista1Count (es nuevo)
        else {
            lista1Count[elemento] = 1;
        }
    }
);

//Convertimos el objeto en un array de nuevo usando Object.entries()
const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

//Hallamos la moda
const moda = lista1Array[lista1Array.length - 1][0];