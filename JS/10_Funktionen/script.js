//Funktionen
//DRY - Dont repeat yourself
function printMenu(name, age, place){
    console.log("Willkommen "+name + "! You are "+age+" years old and you come from "+place);
    console.log("Drücke ");
    console.log("1 für Start");
    console.log("2 für Statistik");
    console.log("3 für Ende");
}
printMenu("Peter", 17, "Lustenau");
printMenu("Hans", 54, "Dornbirn");

//Rechnen
function add(a,b){
    return a+b;
}
let result = add(4,7);
console.log(result);


function subtract(a,b){
    return a-b;
}
result = subtract(4,7);
console.log(result);


function multiply(a,b){
    return a*b;
}
result = multiply(4,7);
console.log(result);


function supercalculation(a,b){
    return (a+b)/2*a;
}
result = supercalculation(4,7);
console.log(result);

//Funktion Ostern
function printEasterDate(year){
    let N = year - 1900;
    let A = N % 19;
    let B = ((7*A+1)/19);
    let M = (11*A+4-B)%29;
    let Q =(N/4);
    let W = (N+Q+31-M)%7;
    let P = Math.ceil(25-M-W);

    if(P>0){
        console.log("Ostersonntag ist der "+P+". April")
    }
    else{
        console.log("Ostersonntag ist der "+(P+31)+". März")
    }
}

printEasterDate(2024);