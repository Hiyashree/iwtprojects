function performOperation(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(num1) && isNaN(num2)) {
        resultDiv.textContent = "Please enter valid numbers";
        resultDiv.className = "result error";
        displayResult(resultDiv.textContent);
        return;
    } else if (isNaN(num1)) {
        resultDiv.textContent = "Please enter a valid first number";
        resultDiv.className = "result error"; 
        displayResult(resultDiv.textContent);
        return;
    } else if (isNaN(num2)) {
        resultDiv.textContent = "Please enter a valid second number";
        resultDiv.className = "result error";
        displayResult(resultDiv.textContent);
        return;
    }

    const result = operation === 'add' ? num1 + num2 :
                   operation === 'subtract' ? num1 - num2 :
                   operation === 'multiply' ? num1 * num2 :
                   operation === 'divide' ? (num2 !== 0 ? num1 / num2 : "Cannot divide by zero") :
                   "Invalid operation";

    displayResult(result);
}

function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Result: " + result;

    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) clearInterval(fadeIn);
        resultDiv.style.opacity = opacity;
        opacity += 0.05;
    }, 100); 
}

let slideIndex = 0;
const showSlides = (n) => {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    Array.from(slides).forEach(slide => {
        slide.style.display = "none";
        slide.style.opacity = 0;
    });
    Array.from(dots).forEach(dot => dot.className = dot.className.replace(" active", ""));

    const currentSlide = slides[slideIndex];
    currentSlide.style.display = "block";
    dots[slideIndex].className += " active";

    let opacity = 0;
    let greyOpacity = 1;
    const fadeEffect = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeEffect);
            currentSlide.style.backgroundColor = "";
        }
        currentSlide.style.opacity = opacity;
        currentSlide.style.backgroundColor = `rgba(117, 117, 117, ${greyOpacity})`; 
        opacity += 0.03; 
        greyOpacity -= 0.03;
    }, 60);

    let bounceDistance = -100;
    const bounce = setInterval(() => {
        if (bounceDistance >= 0) {
            clearInterval(bounce);
        }
        currentSlide.style.transform = `translateY(${bounceDistance}px)`;
        bounceDistance += 10;
    }, 50); 
};

const plusSlides = (n) => showSlides(slideIndex += n);
const currentSlide = (n) => showSlides(slideIndex = n - 1);

setInterval(() => plusSlides(1), 5000);

function shakeButton(button) {
    let position = 0;
    let direction = 1;
    const shake = setInterval(() => {
        if (position > 10 || position < -10) direction *= -1;
        if (position === 0) clearInterval(shake);
        button.style.transform = `translateX(${position}px)`;
        position += 2 * direction;
    }, 50);
}

function colorChange(button) {
    button.style.backgroundColor = "#ff86eb";
    setTimeout(() => button.style.backgroundColor = "", 500);
}

function rippleEffect(event, button) {
    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(0, 0, 0, 0.3)";
    ripple.style.width = ripple.style.height = "100px";
    ripple.style.left = `${event.clientX - button.offsetLeft - 50}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - 50}px`;
    ripple.style.transform = "scale(0)";
    ripple.style.transition = "transform 0.6s, opacity 0.6s";
    button.appendChild(ripple);

    setTimeout(() => {
        ripple.style.transform = "scale(3)";
        ripple.style.opacity = "0";
    }, 10);

    setTimeout(() => ripple.remove(), 600);
}

function handleButtonClick(event, operation) {
    const button = event.currentTarget;
    performOperation(operation); 
    shakeButton(button);
    colorChange(button);
    rippleEffect(event, button);
}

document.addEventListener("DOMContentLoaded", () => {
    const sparkleCount = 100;
    const body = document.body;

    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');

      // Random position for sparkles
      sparkle.style.left = `${Math.random() * 100}vw`; 
      sparkle.style.top = `${Math.random() * 100}vh`; 
      sparkle.style.animationDelay = `${Math.random() * 5}s`;
      body.appendChild(sparkle);
    }
  });

