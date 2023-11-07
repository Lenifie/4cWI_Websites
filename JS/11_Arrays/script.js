let a = 4;
let b = 9;
let c = 8;

let arr = [4,9,8];

arr.push(10);
arr.push(3);


for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);

}

console.log("Aufgabe 1");
let arr1 = [4,1,2,3];
arr1.push(17);
arr1.push(199);

for (let index = 0; index < arr1.length; index++) {
    console.log(arr1[index]);

}

let sum=0;
for (let index = 0; index < arr1.length; index++) {

    sum += arr1[index];
}
console.log("Summe "+sum);

sum=0;
for (let index = 0; index < arr1.length; index++) {
    sum += arr1[index]
}
let mittelwert = sum /arr1.length;
console.log("Mittelwert "+mittelwert);


console.log("Aufgabe 2");
let arr2 = ["Susi","Paula","Hans"];
console.log("Meine Freunde sind "+ arr2);

arr2.push("Sepp");
console.log("Meine Freunde sind "+ arr2);