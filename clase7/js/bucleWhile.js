let n = 1;

while (  n < 15  )
{
    document.write( n + '<br>' );
    n++; // n = n + 1;
}

document.write('<hr>');

let italianos = [
    'Maseratti', 'Pagani',
    'Larmborghini', 'Ferrari',
    'Alfa Romeo', 'Bertone',
    'Bugatti', 'Lancia',
    'Fiat', 'Mazzanti',
    'Fornassari', 'Abarth'
];

let i = 0;
//contar la cantidad de elementos del array
console.log( italianos );
let cantidad = italianos.length;
while ( i < cantidad ){
    document.write( italianos[i] + '<br>' );
    i++;
} 