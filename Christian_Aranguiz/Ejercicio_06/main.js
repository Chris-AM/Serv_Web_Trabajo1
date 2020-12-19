let converirDolar = (pesoChileno, dolar) => {
    pesoChileno = parseInt(prompt("Cuantos pesos desea cambiar a dolar"));
    dolar = 800;
    conversion = (pesoChileno / dolar).toFixed(2);
    return conversion;
}




document.write('Usted resibirá a cambio USD$' + converirDolar())