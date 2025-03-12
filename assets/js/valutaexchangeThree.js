// Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById('calculateButt');

calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    gatherInputData();
});

// Indsamling af data fra DOM (model code fra MVC)
function gatherInputData() {
    const myEuroRate = parseFloat(document.getElementById('euroRate').value);
    const myDollarRate = parseFloat(document.getElementById('dollarRate').value);
    const myDanishAmount = parseFloat(document.getElementById('danishAmount').value);

    if (isNaN(myEuroRate) || isNaN(myDollarRate) || isNaN(myDanishAmount)) {
        alert("Indtast venligst gyldige tal for alle felter.");
        return;
    }

    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}

// Håndterer data behandling (controller code fra MVC)
function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {
    const myDollars = calculateExchange(myDanishAmount, myDollarRate);
    const myEuros = calculateExchange(myDanishAmount, myEuroRate);

    showResult(myEuros, myDollars, myDanishAmount);
}

// Funktion der returnerer en veksel udregning
function calculateExchange(amount, rate) {
    return amount * rate; // Format to 2 decimal places
}

// Viser resultatet (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `${myDanishAmount} danske kroner bliver til: ${myEuroResult} euro og ${myDollarResult} dollars.`;
}
