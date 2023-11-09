let dauer =true;
   while(dauer){
    console.log("Bankomat Menü");
    console.log("Drücke ");
    console.log("1 für Einzahlen");
    console.log("2 für Abheben");
    console.log("3 für Kontostand");
    console.log("4 für Beenden");

    let Kontostand=0;
    //let input =prompt("Wählen Sie einen Punkt");

   
    switch(input){
        case "1":
        input = prompt("Geben Sie den Betrag ein den Sie einzahlen möchten: ");
       
        Kontostand += parseFloat(input);
        console.log("Der Kontostand beträgt: " + Kontostand);
        break;

        case "2":
            input = prompt("Geben Sie den Betrag ein den Sie abheben möchten: ");
       
            Kontostand -= parseFloat(input);
            console.log("Der Kontostand beträgt: " + Kontostand);
        break;

        case "3":
        alert("Der Kontostand beträgt: " + Kontostand);
        break;

        case "4":
        console.log("Wird beendet");
        dauer = false;
        break;

        default:
            console.log("Ungültige Eingabe. Bitte wählen Sie 1, 2, 3 oder 4.");
            break;

    }
    
    console.log("Ende der Schleife");
}