// ============================================
// SOUNDBOARD CONFIGURATION
// ============================================
// Edit the sounds array below to add/modify sounds
// Format: { name: "Sound Name", emoji: "🎵", url: "GOOGLE_DRIVE_LINK" }

const sounds = [
    {
        name: "Kangen",
        emoji: "👋",
        url: "https://drive.google.com/file/d/1oK38Bsh-aB-YsvtgHDkkUpm9b14EiDf3/view?usp=drivesdk"
    },
    {
        name: "from the start",
        emoji: "😲",
        url: "https://drive.google.com/file/d/150TbVofR4jazPpeGApe967_Qg1By5k1A/view?usp=drivesdk"
    },
    {
        name: "Columbula",
        emoji: "😔",
        url: "https://drive.google.com/file/d/1u4QDtzUkLu8fXNC8BJPSf-GNBBC7XYuX/view?usp=drivesdk"
    },
    {
        name: "Applause",
        emoji: "👏",
        url: "https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID"
    },
    {
        name: "Ding!",
        emoji: "🔔",
        url: "https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID"
    },
    {
        name: "Whistle",
        emoji: "🎶",
        url: "https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID"
    }
];

// ============================================
// SOUNDBOARD FUNCTIONALITY
// ============================================

const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const soundboard = document.getElementById('soundboard');
const nowPlayingName = document.getElementById('nowPlayingName');
const stopBtn = document.getElementById('stopBtn');
const volumeSlider = document.getElementById('volumeSlider');
const volumeUpBtn = document.getElementById('volumeUpBtn');
const volumeDownBtn = document.getElementById('volumeDownBtn');

let currentPlayingButton = null;

// Initialize soundboard
function initSoundboard() {
    soundboard.innerHTML = '';
    sounds.forEach((sound, index) => {
        const button = document.createElement('button');
        button.className = 'sound-button';
        button.innerHTML = `
            <span class="sound-emoji">${sound.emoji}</span>
            <span class="sound-name">${sound.name}</span>
        `;
        button.addEventListener('click', () => playSound(sound, button));
        soundboard.appendChild(button);
    });
}

// Play sound function
function playSound(sound, button) {
    // Remove playing class from previous button
    if (currentPlayingButton) {
        currentPlayingButton.classList.remove('playing');
    }

    // Set audio source and play
    audioSource.src = sound.url;
    audioPlayer.load();
    audioPlayer.play();

    // Update UI
    currentPlayingButton = button;
    button.classList.add('playing');
    nowPlayingName.textContent = sound.name;

    // Remove playing class when audio ends
    audioPlayer.addEventListener('ended', () => {
        if (button === currentPlayingButton) {
            button.classList.remove('playing');
            currentPlayingButton = null;
            nowPlayingName.textContent = '-';
        }
    }, { once: true });
}

// Stop button functionality
stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    if (currentPlayingButton) {
        currentPlayingButton.classList.remove('playing');
        currentPlayingButton = null;
    }
    nowPlayingName.textContent = '-';
});

// Volume control
volumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value / 100;
});

volumeUpBtn.addEventListener('click', () => {
    volumeSlider.value = Math.min(100, parseInt(volumeSlider.value) + 10);
    audioPlayer.volume = volumeSlider.value / 100;
});

volumeDownBtn.addEventListener('click', () => {
    volumeSlider.value = Math.max(0, parseInt(volumeSlider.value) - 10);
    audioPlayer.volume = volumeSlider.value / 100;
});

// Set initial volume
audioPlayer.volume = volumeSlider.value / 100;

// Initialize on page load
document.addEventListener('DOMContentLoaded', initSoundboard);
