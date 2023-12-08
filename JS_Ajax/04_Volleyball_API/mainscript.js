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
async function displayMatchData(containerId, index) {
    const matchDataContainer = document.getElementById(containerId);

    // Daten von der API abrufen
    const matchData = await fetchMatchData();

    // Nur das entsprechende Ergebnis verarbeiten
    const match = matchData[index];
    if (match) {
        const matchResult = `${match.matchResults[0].pointsTeam1} : ${match.matchResults[0].pointsTeam2}`;

        // Ein separates div für das Ergebnis erstellen
        const matchDiv = document.createElement('div');
        matchDiv.innerHTML = `${matchResult}`;

        // Das erstellte div dem Container hinzufügen
        matchDataContainer.appendChild(matchDiv);
    }
}

// Funktionen aufrufen, um die Daten im HTML anzuzeigen
displayMatchData('load5', 0);  // Erste resultID
displayMatchData('load6', 1);  // Zweite resultID
displayMatchData('load7', 2);  // Dritte resultID
displayMatchData('load8', 3);  // Vierte resultID
