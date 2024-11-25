// const texts = ["Madhur Bhutada", "Portfolio Website"];
// let count = 0;
// let index = 0;
// let currentText = "";
// let letter = "";
// const typingElement = document.querySelector('.typing-animation');

// (function type() {
//     if (count === texts.length) {
//         count = 0; // Reset count if we've gone through all texts
//     }
//     currentText = texts[count]; // Get the current text
//     letter = currentText.slice(0, index++); // Get the next letter

//     typingElement.textContent = letter; // Update the typing element with the current letter
//     if (index > currentText.length) { // If typing is complete for current text
//         setTimeout(() => {
//             count++; // Move to the next text
//             index = 0; // Reset index for the next text
//             type(); // Restart typing immediately for a seamless transition
//         }, 2500); // Pause before switching texts
//     } else {
//         setTimeout(type, 150); // Speed up the typing interval
//     }
// })();


document.addEventListener('DOMContentLoaded', () => {
    const texts = ["Madhur Bhutada", "Software Developer", "Data Science Enthusiast", "Problem Solver"];
    const typingElement = document.querySelector('.typing-animation');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex <= currentText.length) {
            typingElement.textContent = currentText.slice(0, charIndex);
            charIndex++;
        } 
        else if (isDeleting && charIndex > 0) {
            typingElement.textContent = currentText.slice(0, charIndex);
            charIndex--;
        } 
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % texts.length;
            }
        }

        setTimeout(type, typingSpeed);
    }

    type();
});