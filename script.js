let submitCount = 0;

function handleSubmit(event) {
    event.preventDefault();
    
    submitCount++;
    const resultDiv = document.getElementById('result');
    const countdownDiv = document.getElementById('countdown');
    const timePeriod = document.getElementById('timePeriod').value;
    const submitButton = document.getElementById('submitButton');

    if (timePeriod.length === 3 && /^\d{3}$/.test(timePeriod)) {
        if (submitCount === 1) {
            // Clear previous result
            resultDiv.textContent = '';

            // Randomly choose "BIG" or "SMALL"
            const randomChoice = Math.random() < 0.5 ? "BIG" : "SMALL";
            resultDiv.textContent = randomChoice;

            // Refresh page after 10 seconds
            setTimeout(() => {
                location.reload();
            }, 10000);
        } else {
            // Disable the button to prevent further clicks
            submitButton.disabled = true;

            // Start a 60-second countdown
            let countdown = 60;
            countdownDiv.textContent = `Refreshing in ${countdown} seconds...`;

            const countdownInterval = setInterval(() => {
                countdown--;
                countdownDiv.textContent = `Refreshing in ${countdown} seconds...`;

                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    location.reload();
                }
            }, 1000);
        }
    } else {
        alert("Please enter a valid three-digit number.");
    }
}
