function generate(){
  let num1 = document.getElementById("field1").value;
  let num2 = document.getElementById("field2").value;

  let amountOfRandomNumbers = parseFloat(num2)-parseFloat(num1)+1;

  console.log(num1 + " : "+ num2);

  let randomNumber = Math.floor(Math.random()*amountOfRandomNumbers)+parseFloat(num1);
 document.getElementById("randomNumber").innerHTML = randomNumber;
}