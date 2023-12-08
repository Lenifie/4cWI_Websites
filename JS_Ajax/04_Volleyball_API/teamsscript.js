// Funktion, um die Daten von der API abzurufen
function getMatchData() {
    // API-Endpunkt
    const apiEndpoint = 'https://api.openligadb.de/getmatchdata/VBL1/2022';
  
    // Fetch-Anfrage
    fetch(apiEndpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Fehler beim Abrufen der Daten. Statuscode: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Annahme: Die Daten enthalten Informationen zu den Spielen
        const groupOrderID = 1; // Beispielwert, ersetze dies durch deine Gruppenordnungs-ID
        const goalID = 123; // Beispielwert, ersetze dies durch deine Match-ID
        const resultID = 456; // Beispielwert, ersetze dies durch deine Result-ID
  
        // Das Spiel basierend auf Gruppenordnungs-ID, Match-ID und Result-ID finden
        const matchingMatch = data.find(match => match.groupOrderID === groupOrderID && match.matchID === matchID && match.resultID === resultID);
  
        if (matchingMatch) {
          const pointsTeam1 = matchingMatch.pointsTeam1;
          const pointsTeam2 = matchingMatch.pointsTeam2;
  
          const resultText = `${pointsTeam1} : ${pointsTeam2}`;
          const matchResultElement = document.getElementById('load9');
          matchResultElement.textContent = resultText;
        } else {
          console.error('Spiel nicht gefunden.');
        }
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Daten:', error);
      });
  }
  
  // Funktion aufrufen, um die Daten zu laden und anzuzeigen
  getMatchData();
  