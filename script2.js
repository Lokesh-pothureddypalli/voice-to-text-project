 

const textToConvert = document.getElementById('text-to-convert11');
const languageSelector111 = document.getElementById('language-selector111');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const downloadLink111 = document.getElementById('download-link111');

let speechSynthesis = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();

startButton.addEventListener('click', () => {
    const text = textToConvert.value;
    const selectedLanguage = languageSelector111.value;
    
    if (text.trim() === '') {
        alert('Please enter some text.');
        return;
    }

    utterance.text = text;
    utterance.lang = selectedLanguage;

    speechSynthesis.speak(utterance);
    
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    speechSynthesis.cancel();
    
    startButton.disabled = false;
    stopButton.disabled = true;
});

speechSynthesis.onend = () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    downloadLink111.style.display = 'block';
};

downloadLink111.addEventListener('click', () => {
    const text = textToConvert.value;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    downloadLink111.href = url;
}); 
    const feedbackLink = document.getElementById('feedback-link');
    const feedbackModal = document.getElementById('feedback-modal');
    const closeButton = document.getElementById('close-button');
    const feedbackForm = document.getElementById('feedback-form');
    
    feedbackLink.addEventListener('click', () => {
        feedbackModal.style.display = 'block';
    });
    
    closeButton.addEventListener('click', () => {
        feedbackModal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target == feedbackModal) {
            feedbackModal.style.display = 'none';
        }
    });
    
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        // You can add code here to handle the submission of the feedback form.
        // For this example, we'll simply close the modal.
        
        feedbackModal.style.display = 'none';
    });
    const stars = document.querySelectorAll('.star');
        const selectedRating = document.getElementById('selected-rating');
        
        let currentRating = 0;
        
        stars.forEach((star) => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                currentRating = rating;
                updateRating();
            });
            
            star.addEventListener('mouseover', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                highlightStars(rating);
            });
            
            star.addEventListener('mouseout', () => {
                highlightStars(currentRating);
            });
        });
        
        function highlightStars(rating) {
            stars.forEach((star) => {
                const starRating = parseInt(star.getAttribute('data-rating'));
                if (starRating <= rating) {
                    star.style.color = 'gold';
                } else {
                    star.style.color = 'black';
                }
            });
        }
        
        function updateRating() {
            selectedRating.textContent = currentRating;
        }
    
   