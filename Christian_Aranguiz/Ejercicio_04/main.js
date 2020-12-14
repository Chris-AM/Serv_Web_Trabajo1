let carArray = [' Toyota', ' Nissan', ' Chevrolet', ' Subaru'];

document.write('Arreglo desordenado <br/><hr/>' + carArray + '<br/>');
let orderedArray = carArray.sort();
document.write('Arreglo ordenado <br/><hr/>' + orderedArray + '<br/>');
let newCar = prompt('Ingres un nuevo auto (ingrese la primera en mayúscula)');
carArray.push(' ' + newCar);
document.write('Array de autos más nuevo: <br/><hr/>' + carArray + '</br>');
let newOrderedArray = carArray.sort();
document.write('Array de autos más nuevo ordenado: <br/><hr/>' + newOrderedArray + '</br>');