console.log("Aufgabe 1");
for(let i = 0; i < 4;i++){
    let row = "";
    for(let j = 0; j < 4;j++){
        if((i)%2==0){
            row += "X "
        }else{
            row += "O "
        }
    }
    console.log(row)
}


console.log("Aufgabe 2");
let evenNumbers = 0;
for(let i = 1; i <= 100; i++){
    if(i % 2 ==0){
        evenNumbers= evenNumbers + i;
    }
}
console.log(evenNumbers)

console.log("Aufgabe 3");
for(let i = 0; i < 4;i++){
    let row = "";
    for(let j = 0; j < 4;j++){
        if((i+j)%2==0){
            row += "L "
        }else if(i%2==0){
            row += " "
        }
        else if(j%2==0){
            row += "  "
        }
    }
    console.log(row)
}