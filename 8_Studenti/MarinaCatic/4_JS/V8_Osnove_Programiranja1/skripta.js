// 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena. 

var firstName = 'Ime';
var lastName = 'Prezime';
var fullName = firstName + ' ' + lastName;

console.log(fullName);

// 2. Razlomite ovu ternarnu operaciju na 3 različite operacije!

var x = z === 2? y : 5;

var x;
var y = 1;
var z = 2;

if (z === 2) {
    x = y;
} else {
    x = 5;
}

console.log(x);

// 3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").

for (var num = 1; num <= 20; num++) {
    if (num % 2 == 0) {
        console.log('Broj ' + num + ' je paran.');
    } else {
        console.log('Broj ' + num + ' je neparan.');
    }
}
