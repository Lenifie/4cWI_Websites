// Erstelle eine Zufallszahl zwischen 5 und 10
let random = Math.floor(Math.random() * 5 +5);
console.log(random);

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// ...

switch(random){
    case 10: 
        console.log("TEN");
        break;
    case 9: 
        console.log("NINE");
        break;
    case 8: 
        console.log("EIGHT");
        break;
        
    case 7: 
        console.log("SEVEN");
        break;
    case 6: 
        console.log("SIX");
        break;
    case 5: 
        console.log("FIVE");
        break;

}