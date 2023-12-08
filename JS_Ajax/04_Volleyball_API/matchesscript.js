    // API-URL für die gewünschten Daten
    const apiUrl = 'https://api.openligadb.de/getmatchdata/VBL1/2022';

    // Funktion zum Abrufen der Daten von der API
    async function fetchMatchData() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    }

    // Funktion zum Anzeigen der Daten im HTML
    async function displayMatchData1() {
        const matchDataContainer = document.getElementById('load1');
        
        // Daten von der API abrufen
        const matchData = await fetchMatchData();
        
  // Nur die ersten vier Ergebnisse verarbeiten
  for (let i = 0; i < Math.min(matchData.length, 4); i++) {
    const match = matchData[i];
    const matchResult = `${match.matchResults[0].pointsTeam1} : ${match.matchResults[0].pointsTeam2}`;
    
  // Nur das erste Ergebnis verarbeiten
  const firstMatch = matchData[0];
  if (firstMatch) {
      const matchResult = `${firstMatch.matchResults[0].pointsTeam1} : ${firstMatch.matchResults[0].pointsTeam2}`;
      
      // Ein separates div für das erste Ergebnis erstellen
      const matchDiv = document.createElement('div');
      matchDiv.innerHTML = `${matchResult}`;
      ;
    
    // Das erstellte div dem Container hinzufügen
    matchDataContainer.appendChild(matchDiv);
}
    }
}
    // Funktion aufrufen, um die Daten im HTML anzuzeigen
    displayMatchData1();

    
    // Funktion zum Anzeigen der Daten im HTML
    async function displayMatchData2() {
    const matchDataContainer = document.getElementById('load2');
            
    // Daten von der API abrufen
    const matchData = await fetchMatchData();
            
  // Nur die ersten vier Ergebnisse verarbeiten
  for (let i = 0; i < Math.min(matchData.length, 1); i++) {
    const match = matchData[i];
    const matchResult = `${match.matchResults[0].pointsTeam1} : ${match.matchResults[0].pointsTeam2}`;
    
  // Nur das erste Ergebnis verarbeiten
  const firstMatch = matchData[0];
  if (firstMatch) {
      const matchResult = `${firstMatch.matchResults[0].pointsTeam1} : ${firstMatch.matchResults[0].pointsTeam2}`;
      
      // Ein separates div für das erste Ergebnis erstellen
      const matchDiv = document.createElement('div');
      matchDiv.innerHTML = `${matchResult}`;
      ;
    
    // Das erstellte div dem Container hinzufügen
    matchDataContainer.appendChild(matchDiv);
}
    }
}
        
    
    
    
        // Funktion aufrufen, um die Daten im HTML anzuzeigen
        displayMatchData2();

            // Funktion zum Anzeigen der Daten im HTML
    async function displayMatchData3() {
        const matchDataContainer = document.getElementById('load3');
        
        // Daten von der API abrufen
        const matchData = await fetchMatchData();
        
  // Nur die ersten vier Ergebnisse verarbeiten
  for (let i = 0; i < Math.min(matchData.length, 1); i++) {
    const match = matchData[i];
    const matchResult = `${match.matchResults[0].pointsTeam1} : ${match.matchResults[0].pointsTeam2}`;
    
  // Nur das erste Ergebnis verarbeiten
  const firstMatch = matchData[0];
  if (firstMatch) {
      const matchResult = `${firstMatch.matchResults[0].pointsTeam1} : ${firstMatch.matchResults[0].pointsTeam2}`;
      
      // Ein separates div für das erste Ergebnis erstellen
      const matchDiv = document.createElement('div');
      matchDiv.innerHTML = `${matchResult}`;
      ;
    
    // Das erstellte div dem Container hinzufügen
    matchDataContainer.appendChild(matchDiv);
}
    }
}

    // Funktion aufrufen, um die Daten im HTML anzuzeigen
    displayMatchData3();

        // Funktion zum Anzeigen der Daten im HTML
        async function displayMatchData4() {
            const matchDataContainer = document.getElementById('load4');
            
            // Daten von der API abrufen
            const matchData = await fetchMatchData();
            
      // Nur die ersten vier Ergebnisse verarbeiten
      for (let i = 0; i < Math.min(matchData.length, 1); i++) {
        const match = matchData[i];
        const matchResult = `${match.matchResults[0].pointsTeam1} : ${match.matchResults[0].pointsTeam2}`;
        
      // Nur das erste Ergebnis verarbeiten
      const firstMatch = matchData[0];
      if (firstMatch) {
          const matchResult = `${firstMatch.matchResults[0].pointsTeam1} : ${firstMatch.matchResults[0].pointsTeam2}`;
          
          // Ein separates div für das erste Ergebnis erstellen
          const matchDiv = document.createElement('div');
          matchDiv.innerHTML = `${matchResult}`;
          ;
        
        // Das erstellte div dem Container hinzufügen
        matchDataContainer.appendChild(matchDiv);
    }
        }
    }
        // Funktion aufrufen, um die Daten im HTML anzuzeigen
        displayMatchData4();