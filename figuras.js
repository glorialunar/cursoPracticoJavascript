/* Código del cuadrado */
console.group('Cuadrados');

function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();

/* Código del triángulo */
console.group('Triangulos');

function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

console.groupEnd();

/* Código del circulo */
console.group('Circulos');

const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    var diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//Aqui interactuamos con el HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("cuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("cuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("lado1Triangulo");
    const valueLado1 = inputLado1.value;

    const inputLado2 = document.getElementById("lado2Triangulo");
    const valueLado2 = inputLado2.value;

    const inputbase = document.getElementById("baseTriangulo");
    const valuebase = inputbase.value;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valuebase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputbase = document.getElementById("baseTriangulo");
    const valuebase = inputbase.value;

    const inputaltura = document.getElementById("alturaTriangulo");
    const valuealtura = inputaltura.value;

    const area = areaTriangulo(valuebase, valuealtura);
    alert(area);
}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}