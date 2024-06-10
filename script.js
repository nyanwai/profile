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

document.addEventListener('DOMContentLoaded', function() {
    function updateViewCount() {
        const counterElement = document.querySelector('[data-id="fd011bcf-b669-4d42-9fd9-b82353653704"]');
        const viewCountElement = document.getElementById('view-count');

        if (counterElement && viewCountElement) {
            console.log("Counter Element:", counterElement);
            console.log("View Count Element:", viewCountElement);
            console.log("Counter Element Text Content:", counterElement.innerText);

            viewCountElement.innerText = counterElement.innerText || 'views not loaded'; // should display 'views not loaded'
        } else {
            console.error('Counter element or view count element not found.');
        }
    }

    // Call the function
    updateViewCount();
});









