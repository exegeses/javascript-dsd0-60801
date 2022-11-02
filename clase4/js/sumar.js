let sueldo = prompt('ingrese el monto');
let bonus = prompt('ingrese bonus');


/**
 * parseInt()   convierte un dato como entero
 * parseFloat() convierte un dato a numero con decimales 
 */

let resultado = parseInt(sueldo) + parseInt(bonus);

document.write(resultado);