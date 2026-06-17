# 🎵 Drama Pak Galuh Soundboard

A beautiful, responsive soundboard web application that allows you to play custom sounds from Google Drive. Perfect for sound effects, music clips, and audio playback during live streams or presentations.

## ✨ Features

- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile devices
- 🔊 **Complete Audio Controls** - Play, pause, stop, and volume adjustment
- 🔗 **Google Drive Integration** - Use direct Google Drive links as sound sources
- ⚡ **Long Duration Support** - No time limits on audio playback
- 🎯 **Easy Customization** - Simple configuration in JavaScript
- ✨ **Visual Feedback** - Playing state animations and now-playing display

## 🚀 Quick Start

### 1. **Open the Website**
Simply open `index.html` in your web browser. No server required!

### 2. **Add Your Sounds**

Edit the `sounds` array in `script.js` to add your custom sounds:

```javascript
const sounds = [
    {
        name: "Sound Name Here",
        emoji: "🎵",
        url: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
    },
    {
        name: "Another Sound",
        emoji: "👏",
        url: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
    }
];
```

## 📝 How to Get Google Drive Link for Your Sound

### Step 1: Upload Audio File to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Upload your audio file (MP3, WAV, OGG, etc.)
3. Right-click the file and select "Share"

### Step 2: Get the Shareable Link
1. Click "Share" button in the top right
2. Make sure "Anyone with the link" can view it (change permission if needed)
3. Copy the sharing link

### Step 3: Extract the File ID
The link will look like:
```
https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing
```

The **file ID** is the long string between `/d/` and `/view`:
```
1a2b3c4d5e6f7g8h9i0j
```

### Step 4: Format the URL
Replace `YOUR_FILE_ID` in your configuration with the actual file ID:
```javascript
url: "https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0j"
```

## 📖 Configuration Guide

### Adding a New Sound

Open `script.js` and add a new object to the `sounds` array:

```javascript
const sounds = [
    // ... existing sounds ...
    {
        name: "Dragon Roar",           // Display name on button
        emoji: "🐉",                   // Emoji shown on button
        url: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
    }
];
```

### Customizing Sound Properties

- **`name`**: The text displayed on the button
- **`emoji`**: A single emoji to represent the sound (optional, can be left empty "")
- **`url`**: The Google Drive download link (must follow the format above)

### Example Configuration

```javascript
const sounds = [
    {
        name: "Hello",
        emoji: "👋",
        url: "https://drive.google.com/uc?export=download&id=1abc123xyz789"
    },
    {
        name: "Laugh",
        emoji: "😂",
        url: "https://drive.google.com/uc?export=download&id=2def456uvw456"
    },
    {
        name: "Applause",
        emoji: "👏",
        url: "https://drive.google.com/uc?export=download&id=3ghi789rst123"
    }
];
```

## 🎮 How to Use

### Playing Sounds
- **Click any button** to play that sound
- The "Now Playing" display shows which sound is currently playing
- The button will pulse with animation while playing

### Audio Controls
- **Play/Pause**: Use the audio player controls
- **Stop**: Click the stop button to stop playback immediately
- **Volume**: 
  - Use the volume slider for precise control
  - Click 🔉 to decrease volume
  - Click 🔊 to increase volume

### Supported Audio Formats
- MP3 (.mp3)
- WAV (.wav)
- OGG (.ogg)
- M4A (.m4a)
- FLAC (.flac)

## 📱 Responsive Design

The soundboard automatically adapts to different screen sizes:
- **Desktop**: Grid layout with multiple columns
- **Tablet**: Adjusted grid with medium buttons
- **Mobile**: 2-column grid with optimized touch targets

## 🔧 Troubleshooting

### Sound Won't Play
1. **Check the Google Drive Link**
   - Make sure the file ID is correct
   - Verify the file is shared with "Anyone with the link" permission
   - The link should be accessible without login

2. **Check File Format**
   - Ensure the file is a supported audio format
   - Try converting the file to MP3 if having issues

3. **Browser Compatibility**
   - Use modern browsers (Chrome, Firefox, Safari, Edge)
   - Make sure audio autoplay is not blocked by browser settings

### Sound Takes Long to Load
- This is normal for large audio files or slow connections
- The audio player will buffer before playing

### Volume Control Not Working
- Check browser volume settings
- Ensure the browser isn't muting the tab
- Try refreshing the page

## 🌐 Sharing Your Soundboard

1. Upload all three files (`index.html`, `styles.css`, `script.js`) to your web server or GitHub Pages
2. Share the URL with others
3. They can open it directly in their browser!

### Using GitHub Pages
1. Push these files to your GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch" and choose your branch
4. Your soundboard will be live at `https://username.github.io/repository-name/`

## 💡 Tips & Tricks

- **Custom Emojis**: Use any emoji from the emoji keyboard as a button identifier
- **Long Sounds**: No duration limits - works with sounds from seconds to hours
- **Multiple Playback**: Click stop and play again to restart a sound
- **Mobile Friendly**: Test on mobile devices - the layout adapts automatically

## 📄 File Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Soundboard logic and configuration
└── README.md       # This file
```

## 🛠️ Advanced Customization

### Changing Colors

Edit the gradient colors in `styles.css`. Find this section:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Replace with your desired hex colors:
- `#667eea` - Primary color (blue)
- `#764ba2` - Secondary color (purple)

### Adjusting Grid Layout

In `styles.css`, modify the grid configuration:

```css
.soundboard-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    /* Change 150px to make buttons bigger or smaller */
}
```

### Changing Button Size

Modify the button padding and min-height:

```css
.sound-button {
    padding: 30px 20px;      /* Adjust padding */
    min-height: 120px;       /* Adjust height */
}
```

## 📝 Notes

- This soundboard works completely in the browser - no backend server needed
- Sounds are streamed directly from Google Drive
- All customization is done in the code - no special tools required
- Works offline after the first load (except for loading new sounds)

## 🎯 Future Ideas

- Add sound categories/tabs
- Implement keyboard shortcuts
- Add recording functionality
- Create preset button layouts
- Add sound visualization

## 📞 Support

If you encounter issues:
1. Check that all files (`index.html`, `styles.css`, `script.js`) are in the same directory
2. Verify Google Drive links are correctly formatted
3. Test with modern browsers (Chrome, Firefox, Safari, Edge)
4. Check your internet connection

---

**Enjoy your custom soundboard! 🎵**
