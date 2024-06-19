
    let Bienvenida = "Bienvenido a BEBIDAS GONZALEZ";
    alert (Bienvenida)
    let IngresoDatosClientes = parseFloat(prompt("Por favor ingrese su nombre y apellido"));
    let IngresoEdad = prompt("Por favor ingrese su edad");
    if (IngresoEdad >= 18) {
        alert("Puedes comprar bebidas alcoholicas");
    } else if (IngresoEdad < 18) {
        alert("No puedes comprar bebidas alcoholicas");
    }

    let BebidasGin = "Ingrese marca del Gin que desea";
    let BebidasVodka = "Ingrese marca del Vodka que desea";
    let BebidasCerveza = "Ingrese marca de la Cerveza que desea";
    let BebidasVino = "Ingrese marca del Vino que desea";
    let BebidasRon = "Ingrese marca del Ron que desea";
    let BebidasWhisky = "Ingrese marca del Whisky que desea";
    
    let IngresoBebidas = prompt("Ingrese bebida que desee:\ngin\nvodka\ncerveza\nvino\nron\nwhisky");
    let TiposDeGin = "1- Heredero \n2-Brighton \n3-Tanqueray";

    if (IngresoBebidas == "gin") {
        prompt(TiposDeGin);

    } else if (IngresoBebidas == "vodka") {
        BebidasVodka = prompt(BebidasVodka);
    } else if (IngresoBebidas == "cerveza") {
        BebidasCerveza = prompt(BebidasCerveza);
    } else if (IngresoBebidas == "vino") {
        BebidasVino = prompt(BebidasVino);
    } else if (IngresoBebidas == "ron") {
        BebidasRon = prompt(BebidasRon);
    } else if (IngresoBebidas == "whisky") {
        BebidasWhisky = prompt(BebidasWhisky);
    }

    

console.log(IngresoDatosClientes);
console.log(IngresoEdad);
console.log(IngresoBebidas);
console.log(BebidasGin);