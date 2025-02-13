// 💖 Reveal the hidden message smoothly
function revealSecret() {
    const secretMessage = document.getElementById('secret-message');
    secretMessage.style.display = 'block';
    secretMessage.style.animation = 'fadeIn 1s ease-in-out';
}

// 🎵 Background Music Setup
document.addEventListener("DOMContentLoaded", function() {
    let music = document.getElementById("bg-music");
    music.volume = 0.2; // Low volume
});
