alert("This is your class test paper! 👺 No cheating");

if (!confirm("Are you sure you want to start the paper now?")) {
    alert("You canceled the paper. Please reload to start again.");
    document.body.innerHTML = "<h2>Test cancelled. Reload the page to start.</h2>";
    throw new Error("Paper cancelled by the user.");
}

let username = prompt("Please enter your roll number, 👺YOUR ROLL NUMBER ONLY:");
if (!username || username.trim() === "") {
    alert("Roll number is required to start the paper.");
    document.body.innerHTML = "<h2>Roll number required. Reload the page to start again.</h2>";
    throw new Error("Roll number not provided.");
}

alert("Hello, " + username + "! Let's start the paper.");
console.log("Starting test for user: " + username);
console.log("Paper started. 1 hour left ⏱️");

let startTime = new Date().getTime();
document.getElementById('questionForm').addEventListener('submit', submitForm);
const totalTime = 3600;
let timeRemaining = totalTime;
const timerDisplay = document.createElement("div");
timerDisplay.id = "timer";
document.body.insertBefore(timerDisplay, document.body.firstChild);

const countdown = setInterval(() => {
    if (timeRemaining > 0) {
        timeRemaining--;
        timerDisplay.innerHTML = `Time Remaining: ${formatTime(timeRemaining)}`;
    } else {
        clearInterval(countdown);
        alert("Time is up! Submitting your paper...");
        submitForm();
    }
}, 1000);

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}

function submitForm(event) {
    if (event) event.preventDefault();

    let correctAnswers = {
        q1: "D",
        q2: "A",
        q3: "D",
        q4: "B",
        q5: "A",
        q6: "A",
        q7: "B",
        q8: "A",
        q9: "A",
        q10: "B",
    };

    let score = 0;
    let form = document.getElementById('questionForm');

    for (let q in correctAnswers) {
        let userAnswer = form.elements[q]?.value;
        if (userAnswer && userAnswer === correctAnswers[q]) {
            score += 10;
        }
    }

    let endTime = new Date().getTime();
    let timeSpent = Math.floor((endTime - startTime) / 1000);

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Your Score: ${score}/100</h2>
        <p>Roll Number: ${username}</p>
        <p>Time Spent: ${timeSpent} seconds</p>
    `;

    timerDisplay.style.display = "none";

    form.style.display = "none";
    let submitButton = document.querySelector('.submit-btn');
    submitButton.style.display = "none";
}
