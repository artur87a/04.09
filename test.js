//Switch

let orderStatus = 1;
switch (orderStatus) {
        case 1:
            console.log('Zrealizowane');
            break;
        case 2:
            console.log('Anulowane');
            break;
        case 3:
            console.log('W trakcie realizacji');
            break;
}


let level = 'admin';
let privileges;
switch (level) {
   case 'admin':
       privileges = 'Wszystkie';
       

 break 

;
   case 'author':
       privileges = 'Tworzenie artykułów';
       break;
   

 case 

 'user':
       privileges = 'Komentowanie';
       break;

 } 


console.log(privileges);

//switch



let a = 1;
let b = 1;
if (!(a == 1 && b == 1)) {
   console.log('Prawda');
} else {
   console.log('Fałsz');
}


let user = 'Jan ';
let gameScore = 50;
let result = user + gameScore + 'pkt'; 
console.log(result);








let colors = ['red','green','blue','cyan'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

/*Ta pętla wyprowadzi kolejne wartości od 1 do 10. Różnice w porównaniu z pętlą for:

    let i = 1; to oddzielna deklaracja zmiennej, która jeszcze przed pętlą ustawia początkową wartość indeksu.
    while (i <= 10) dopóki wartość zmiennej i jest mniejsza lub równa 10 to pętla powtarza instrukcję console.log().
    i++ inkrementacja wykonywana po instrukcji console.log(i). Czyli najpierw wyprowadzamy wartość zmiennej i do konsoli i dopiero potem ją zwiększamy o 1.

UWAGA: w pętli nie zapominaj o inkrementacji! Bez niej powstanie tzw nieskończona pętla, która spowoduje “zawieszenie” programu. 
Jeśli nie będzie inkrementacji to warunek zakończenia nigdy nie zostanie osiągnięty!*/




let values = [];
for (let i = 0; i < 6; i++) {
   values[i] = i * 2;
}
console.log(values);

/*W kodzie masz pętlę for, która do tablicy values wprowadza kolejne wartości od 0 do 4. Twoje zadanie:

    zmień warunek zakończenia pętli tak aby do tablicy values wprowadzone zostały wartości od 0 do 5.
    zmień instrukcję wykonywaną wewnątrz pętli tak aby wartości wprowadzane do tablicy były podwójną wartością indeksu. (np. dla elementu value[1] wartość ma być równa 2, dla elementu values[3] wartość ma być równa 6 itd.).



    */