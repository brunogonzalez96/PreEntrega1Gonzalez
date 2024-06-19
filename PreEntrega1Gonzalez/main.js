
    let Bienvenida = "Bienvenido a BEBIDAS GONZALEZ";
    alert (Bienvenida)
    let IngresoDatosClientes = (prompt("Por favor ingrese su nombre y apellido"));
    let IngresoEdad = parseInt(prompt("Por favor ingrese su edad"));
    if (IngresoEdad >= 18) {
        alert("Puedes comprar bebidas alcoholicas");
    } else if (IngresoEdad < 18){
    alert("No puedes comprar bebidas alcoholicas");
}
    

    let BebidasGin = "Ingrese marca del Gin que desea";
    let BebidasVodka = "Ingrese marca del Vodka que desea";
    let BebidasCerveza = "Ingrese marca de la Cerveza que desea";
    let BebidasVino = "Ingrese marca del Vino que desea";
    let BebidasRon = "Ingrese marca del Ron que desea";
    let BebidasWhisky = "Ingrese marca del Whisky que desea";
    
    let IngresoBebidas = prompt("Ingrese bebida que desee:\ngin\nvodka\ncerveza\nvino\nron\nwhisky");
    let ValoresGinHeredero = "Heredero: $10.285";
    let ValoresGinBrighton = "Brighton: $5.885";
    let ValoresGinTanqueray = "Tanqueray: $27.885";
    let TiposDeGin1 = prompt(ValoresGinHeredero);
    let TiposDeGin2 = prompt(ValoresGinBrighton);
    let TiposDeGin3 = prompt(ValoresGinTanqueray);

    

    if (IngresoBebidas == "gin") {
        if (TiposDeGin1 == "1") {
            alert(ValoresGinHeredero);
        } else if (TiposDeGin2 == "2") {
            alert(ValoresGinBrighton);
        } else if (TiposDeGin3 == "3") {
            alert(ValoresGinTanqueray);
        }

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
//console.log(BebidasVodka);
//console.log(BebidasCerveza);
//console.log(BebidasVino);
//console.log(BebidasRon);
//console.log(BebidasWhisky);