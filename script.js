
function startVoiceRecognition() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    document.getElementById("listening").style.display = "block";
    recognition.start();
    
    recognition.onresult = function(event) {
        let voiceText = event.results[0][0].transcript;
        document.getElementById("listening").style.display = "none";
        sessionStorage.setItem('returnToChat', window.location.href);
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(voiceText)}`;
    };
    
    recognition.onend = function() {
        document.getElementById("listening").style.display = "none";
    };
}

function searchOnGoogle() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        sessionStorage.setItem('returnToChat', window.location.href);
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(userInput)}`;
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        searchOnGoogle();
    }
}

window.onload = function() {
    if (sessionStorage.getItem('returnToChat')) {
        sessionStorage.removeItem('returnToChat');
    }
};
