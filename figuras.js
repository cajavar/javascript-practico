//Código del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);

console.groupEnd();

//Código del triángulo
console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(`Los lados del triángulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es: ${alturaTriangulo} cm`);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cm`);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log(`El área del triángulo es: ${areaTriangulo} cm^2`);

console.groupEnd();

//Código del circulo
console.group("Circulo");

// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo} cm`);

function diametroCirculo(radio) {
    return radio * 2;
}
// console.log(`El diámetro del círculo es: ${diametroCirculo} cm`);

const PI = Math.PI;
// console.log("El valor de PI es: " + PI);
console.log(`El valor de PI es: ${PI}`);

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}
// console.log(`El perímetro o circunferencia del círculo es: ${perimetroCirculo} cm`);

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log(`El área del círculo es: ${areaCirculo} cm^2`);

console.groupEnd();

//Interacción con HTML
function calcularPerimetroCuadrado() {
    const value = document.getElementById("InputCuadrado").value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const value = document.getElementById("InputCuadrado").value;

    const area = areaCuadrado(value);
    alert(area);
}

const calcularPerimetroTriangulo = () => {
    const ladoA = document.getElementById("InputTrianguloLadoA").value;
    const ladoB = document.getElementById("InputTrianguloLadoB").value;
    const base = document.getElementById("InputTrianguloBase").value;

    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    alert(perimetro);
}

//Triágulo Isóceles
const alturaIsoceles = (lado1, lado2, base) => {
    if ( (lado1 === lado2) || (lado1 === base) || (lado2 === base) ) {
        const altura = Math.sqrt((lado1 * lado1) - ( (base * base) / 4 ));
        alert(altura);
    }
    else {
        alert("El triángulo ingresado no es isóceles")
    }
}

const calcularAlturaIsoceles = () => {
    const ladoA = document.getElementById("InputIsocelesLadoA").value;
    const ladoB = document.getElementById("InputIsocelesLadoB").value;
    const base = document.getElementById("InputIsocelesBase").value;

    const altura = alturaIsoceles(ladoA, ladoB, base);
}