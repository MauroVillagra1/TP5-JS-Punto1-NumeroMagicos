document.addEventListener("DOMContentLoaded", function () {
    let randomNumber;
    let attempts = 0;

    const startBtn = document.getElementById("startBtn");
    const gameSection = document.getElementById("gameSection");
    const userGuessInput = document.getElementById("userGuess");
    const submitBtn = document.getElementById("submitBtn");
    const logContainer = document.getElementById("logContainer");

    startBtn.addEventListener("click", function () {
        randomNumber = generateRandomNumber();
        logContainer.innerHTML = ""; // Limpiar el registro al reiniciar el juego

        console.log(randomNumber)
        attempts = 0;
        gameSection.style.display = "block";
        startBtn.disabled = true;
    });

    userGuessInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            submitBtn.click(); 
        }
    });

    submitBtn.addEventListener("click", function () {
        const userGuess = parseInt(userGuessInput.value);
        
        if (isNaN(userGuess)) {
            alert("Por favor, ingresa un número válido.");
            return;
        }

        attempts++;

        let message = `Intento ${attempts}: Ingresaste ${userGuess}. `;
        if (userGuess === randomNumber) {
            message += `¡Felicidades! Adivinaste el número ${randomNumber} en ${attempts} intentos.`;
            resetGame();
            console.log(randomNumber)
        } else if (userGuess < randomNumber) {
            message += `El número que ingresaste es menor que el número mágico.`;
            console.log(randomNumber)

        } else {
            message += `El número que ingresaste es mayor que el número mágico.`;
            console.log(randomNumber)

        }

        const newLogEntry = document.createElement("p");
        newLogEntry.textContent = message;
        logContainer.appendChild(newLogEntry);
        userGuessInput.value = "";
    });

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
        
    }

    function resetGame() {
        gameSection.style.display = "none";
        startBtn.disabled = false;
        userGuessInput.value = "";
        logContainer.innerHTML = ""; // Limpiar el registro al reiniciar el juego
    }
});
