let converirDolar = (pesoChileno, dolar) => {
    pesoChileno = parseInt(prompt("Cuantos dolares desea cambiar a peso Chileno"));
    dolar = 800;
    return pesoChileno * dolar
}




document.write('Usted resibirá a cambio CLP' + converirDolar())