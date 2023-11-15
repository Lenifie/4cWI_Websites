let data =[{firstname: "Hans", lastname:"Huber", pointe:30},
        {firstname: "Paul", lastname:"Müller", pointe:34},
        {firstname: "Franz", lastname:"Maier", pointe:35}];

//Variante 1
/*
for (let index = 0; index < array.length; index++) {
  const element = data[index];
  console.log(element.firstname);

}

//Variante 2
data.forEach(element => {
  console.log(element.lastname);
});
*/

function loadPeople(){
  let html = "";
  data.forEach(element => {
    html +=  "<div>" + element.firstname + " " +element.lastname + "</div>"
    });
    
    document.getElementById("content").innerHTML = html;
    
}
loadPeople();