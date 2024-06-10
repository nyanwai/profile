document.addEventListener("DOMContentLoaded", function() {
    const subtitleElement = document.querySelector('.subtitle');
    const textArray = ["Femboy-", "Catboy-", "Developer-","Boykisser-"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 300;
    const eraseSpeed = 150;

    function animateText() {
        const currentWord = textArray[index];
        if (charIndex === currentWord.length) {
            setTimeout(eraseText, eraseSpeed);
            return;
        }
        const currentText = currentWord.slice(0, charIndex) + '|';
        if (currentText !== subtitleElement.innerText) {
            subtitleElement.innerText = currentText;
        }
        charIndex++;
        setTimeout(animateText, typingSpeed);
    }

    function eraseText() {
        if (charIndex === 0) {
            index = (index + 1) % textArray.length;
            setTimeout(animateText, typingSpeed);
            return;
        }
        const currentWord = textArray[index];
        const currentText = currentWord.slice(0, charIndex - 1) + '|';
        if (currentText !== subtitleElement.innerText) {
            subtitleElement.innerText = currentText;
        }
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    }

    animateText();
});

// This function updates the view counter by getting the count from a specific element added by the Counter.dev script
function updateViewCounter() {
    const counterElement = document.querySelector('[data-id="fd011bcf-b669-4d42-9fd9-b82353653704"]');
    if (counterElement) {
        document.getElementById('view-counter').innerText = counterElement.innerText;
    }
}

document.addEventListener('DOMContentLoaded', updateViewCounter);





