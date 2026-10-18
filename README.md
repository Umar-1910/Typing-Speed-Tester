# Typing Speed Tester
A simple typing speed test built with HTML, CSS and JavaScript. Type the given text in 60 seconds and see your speed, accuracy and level.

## Features
- Random text fetched from the [DummyJSON](https://dummyjson.com/posts) posts API
- 60 second countdown timer
- Live word feedback: the current word is highlighted, correct words turn green, wrong words turn red and underlined
- Start and Restart buttons
- Result panel with:
  - Words per minute (WPM)
  - Level (Beginner, Average or Excellent)
  - Accuracy percentage with a progress bar
  - Correct words
  - Mistakes
  - Characters typed
  - Time taken

## Levels
| WPM        | Level     |
|------------|-----------|
| Below 40   | Beginner  |
| 40 to 59   | Average   |
| 60 or more | Excellent |

## How to use
1. Wait for the text to load.
2. Click Start.
3. Type the text shown. Press the space bar after each word.
4. When the timer reaches 00:00, your result appears.
5. Click Restart to load new text and try again.

## Run locally
No installation is needed.
1. Download or clone this repository.
2. Open `index.html` in your browser.
An internet connection is required to load the text.

## Project structure
```
.
├── index.html   # page structure
├── style.css    # styling
└── script.js    # timer, typing logic and results
```

## Built with
- HTML
- CSS
- JavaScript (no libraries)