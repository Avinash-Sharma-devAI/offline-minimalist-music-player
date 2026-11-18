# Offline Minimalist Music Player

A lightweight, elegant, and fully offline-capable music player built using vanilla HTML, CSS, and JavaScript. Designed with minimalism in mind, this application allows users to enjoy downloaded local tracks, manage playlists, and navigate their music library seamlessly without requiring any backend servers or external databases.

## Features

- **100% Offline Capability:** Play your downloaded local music files directly in the browser.
- **Minimalist UI:** A clean, distraction-free interface focused entirely on the listening experience.
- **Playlist Management:** Create, organize, and manage custom playlists.
- **Audio Controls:** Standard playback controls including play, pause, track skipping, volume control, and progress scrubbing.
- **Album Art Support:** Displays cover art for loaded tracks.
- **Easily Expandable:** Built with modular vanilla web technologies, making it simple to add more songs or extend functionality.
- **Zero Backend Dependencies:** Runs completely on the client side with no server setup required.

## Project Structure

```text
music player app/
├── index.html                 # Main application markup
├── styles.css                 # Styling and responsive layout
├── script.js                  # Application logic and audio handling
└── media/
    ├── album covers/          # Artwork images for tracks
    │   ├── chops image.png
    │   ├── lucky beat image.jpg
    │   ├── magma image.png
    │   ├── ocean breeze image.jpg
    │   └── woah image.png
    └── songs/                 # Local audio tracks (.mp3)
        ├── chops song.mp3
        ├── lucky beat.mp3
        ├── magma.mp3
        ├── ocean breeze song.mp3
        └── woah.mp3
```

## Getting Started

To run the music player locally on your machine, follow these simple steps:

1. Clone or download this repository to your local device.
2. Navigate to the `music player app` directory.
3. Open `index.html` in any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge).

*Note: Due to browser security policies regarding local file access for audio elements, running the app through a local development server (such as Live Server in VS Code) is recommended if you encounter loading issues.*

## Technologies Used

- **HTML5** (`<audio>` API and semantic markup)
- **CSS3** (Modern layout, custom variables, and responsive design)
- **JavaScript (ES6+)** (DOM manipulation, state management, and event handling)

## Future Enhancements

- LocalStorage persistence for user playlists and preferences.
- Drag-and-drop support for adding custom user audio files.
- Search and filter functionality for larger music libraries.
- Equalizer and audio visualizer effects.

## License

This project is open-source and available for personal and educational use.
