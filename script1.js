
 function redirectToPage()
 {
    // Replace 'newpage.html' with the URL of the page you want to redirect to
    window.location.href = 'html2.html';
}
let a=document.getElementById("kk");
var message = document.querySelector("#message");
let a1=document.getElementById("kk");
const transcription = document.getElementById("transcription");
 
function myFunction()
{
    document.getElementById("demo").innerHTML ="recording is on";

}
//var languageSelect = document.querySelector("#languageSelect");
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = "#JSGF V1.0;";
 
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recongnition.lang="en-US";
const languageSelector = document.getElementById("languageSelector")
.addEventListener("change", () => {
    recognition.lang = languageSelector.value;
  recognition.lang = languageSelector.value;
});
recognition.interimResults = false;
recognition.onresult = function (event) 
{
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    a.textContent = "Recognised speech: " + command;
    let box = document.querySelector(".box");
    var top = parseInt(window.getComputedStyle(box).getPropertyValue("top"));
    var left = parseInt(window.getComputedStyle(box).getPropertyValue("left"));
    if (command.toLowerCase() === "move up") {
        box.style.top = top - 40 + "px";
    } else if (command.toLowerCase() === "move down") {
        box.style.top = top + 40 + "px";
    } else if (command.toLowerCase() === "move right") {
        box.style.left = left + 40 + "px";
    } else if (command.toLowerCase() === "move left") {
        box.style.left = left - 40 + "px";
    }
};
recognition.onspeechend = function () 
{
    recognition.stop();
};
recognition.onerror = function (event)
 {
    message.textContent = "Error occurred in recognition: " + event.error;
};
document
    .querySelector("#command-button")
    .addEventListener("click", function () {
        recognition.start();
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
    
    
    function texttovoice()
 {
    // Replace 'newpage.html' with the URL of the page you want to redirect to
    window.location.href = 'html3.html';
}
    const textToConvert = document.getElementById('text-to-convert');
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

downloadLink.addEventListener('click', () => {
    const text = textToConvert.value;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    downloadLink.href = url;
});
