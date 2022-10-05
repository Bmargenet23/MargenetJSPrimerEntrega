//Bienvenida

let nombre =prompt("Ingrese su nombre.");
let edad = parseInt(prompt("Indique su edad para continuar."));

if(edad>=18){
    alert("Bienvenido "+nombre+" es mayor de edad, puede continuar.");
}else{
    alert("Lo lamentamos "+nombre+" para ingresar al sitio debes ser mayor de edad.");
}

//Calculo de plazo fijo

let tiempo=parseInt(prompt("Ingrese cantidad de dias:"));
let monto=parseInt(prompt("Ingrese el monto:"));
let tasa;

if (monto<=10000){
    tasa=30;
}
else{
    tasa=35;
}

function plazoFijo (tiempo, monto, tasa){
    return monto*(tasa/100)*(tiempo/365);
}

let interes=plazoFijo (tiempo, monto, tasa);
alert("Su plazo fijo le dará un interes de "+interes);

let inversionTotal= function (monto, interes) {return monto + interes};

console.log("Usted invertirá $"+monto+" y en "+tiempo+" dias logrará una suma total de "+(inversionTotal(monto,interes))+".")