const allProjectData = {
  projects: [
    {
      id: 1,
      title: "Age Calculator",
      description: "An Age Calculator in Vanilla JavaScript calculates age from a given birthdate, handling leap years and months accurately. It uses HTML, CSS, and JavaScript for a simple, interactive interface.",
      image:"./assets/AgeCalculator.jpg",
      link: "./Age-Calculator/index.html",
    },
    {
      id: 2,
      title: "Analog Clock",
      description: "An Analog Clock in Vanilla JavaScript uses HTML and CSS for structure and styling, with JavaScript to dynamically update clock hands based on the current time. JavaScript's `setInterval` and `Date` objects calculate rotation angles for the hour, minute, and second hands.",
      image:"./assets/Analog-Clock.jpg",
      link: "./Analog-Clock/index.html",
    },
    {
      id: 3,
      title: "Animated Search Icon",
      description: "An Animated Search Icon is an interactive UI element where clicking or hovering transforms a search icon into an input field. It uses HTML for structure, CSS for animations, and JavaScript for toggling the expanded state.",
      image:"./assets/Animated-Search.png",
      link: "./Animated-Search-Icon/index.html",
    },
    {
      id: 4,
      title: "Auto Text Animation",
      description: "Auto Text Animation** displays text dynamically, where characters appear one by one with a typing effect. It uses HTML for the text, CSS for styling, and JavaScript to control typing speed and looping.",
      image:"./assets/AutoText.jpg",
      link: "./Auto-Text-Animation/index.html",
    },
    {
      id: 5,
      title: "Background-Scroll-Effect",
      description: "Background Scroll Effect creates depth by moving the background at a different speed than the foreground during scrolling.",
      image:"./assets/Scroll.jpg",
      link: "./Background-Scroll-Effect/index.html",
    },
    {
      id: 6,
      title: "Button-Ripple-Effect",
      description: "Button Ripple Effect creates a wave-like animation radiating outward when a button is clicked, using CSS and JavaScript.",
      image:"./assets/Ripple.jpg",
      link: "./Button-Ripple-Effect/index.html",
    },
    {
      id: 7,
      title: "Counter-Timer",
      description: "A Counter Timer displays numbers counting up or down, often animated, using JavaScript's `setInterval` for timing.",
      image:"./assets/Timer.jpg",
      link: "./Counter-Timer/index.html",
    },
    {
      id: 8,
      title: "Cursor Animation",
      description: "Cursor Animation adds visual effects to the cursor, like trails or transformations, using CSS and JavaScript for interactivity.",
      image:"./assets/Cursor.jpg",
      link: "./Cursor_Animation/index.html",
    },
    {
      id: 9,
      title: "Dark-Mode",
      description: "Dark Mode switches a website's theme to darker colors, enhancing readability in low-light environments using CSS and JavaScript toggles.",
      image:"./assets/DarkMode.jpg",
      link: "./Dark-Mode/index.html",
    },
    {
      id: 10,
      title: "Digital-Clock",
      description: "A Digital Clock displays the current time in hours, minutes, and seconds using JavaScript's `Date` object, updating in real-time.",
      image:"./assets/Digital-Clock.jpg",
      link: "./DigitalClock/index.html",
    },
    {
      id: 11,
      title: "Drum-Kit",
      description: "A Drum Kit lets users play drum sounds by pressing keys, implemented with HTML, CSS, and JavaScript to trigger audio files.",
      image:"./assets/Drum.jpg",
      link: "./Drum-Kit/index.html",
    },
    {
      id: 12,
      title: "Emoji-API",
      description: "An Emoji API provides access to a collection of emojis, allowing developers to fetch and display them dynamically in apps or websites.",
      image:"./assets/Emoji.jpg",
      link: "./Emoji-API/index.html",
    },
    {
      id: 13,
      title: "Expense Tracker",
      description: "An Expense Tracker saves transactions in `localStorage`, updating balances dynamically with HTML, CSS, and JavaScript.",
      image:"./assets/expense.jpg",
      link: "./Expense_Tracker/index.html",
    },
    {
      id: 14,
      title: "Filter-Gallery",
      description: "A Filter Gallery allows users to filter images based on categories or tags, using JavaScript to dynamically display the selected content.",
      image:"./assets/Filter.jpg",
      link: "./Filter-Gallery/index.html",
    },
    {
      id: 15,
      title: "RingTrail",
      description: "A RingTrail Animation Cursor Effect creates a heart-shaped trail that follows the cursor as it moves, achieved with CSS and JavaScript for animation and positioning.",
      image:"./assets/Heart.jpg",
      link: "./RingTrail/index.html",
    },
    {
      id: 16,
      title: "Image-Search",
      description: "Image Search allows users to search and display images based on keywords, often using an API to fetch results dynamically.",
      image:"./assets/ImageSearch.jpg",
      link: "./Image-Search/index.html",
    },
    {
      id: 17,
      title: "Mini-Calender",
      description: "A Mini Calendar displays a compact version of a calendar, showing the current month and date, using JavaScript to manage date navigation and display.",
      image:"./assets/Calender.png",
      link: "./Mini-Calender/index.html",
    },
    {
      id: 18,
      title: "Miranda Clone",
      description: "A Miranda Website Clone using GSAP recreates animations like smooth transitions, scroll effects, and element reveals with GSAP's timeline and scroll-trigger functionalities.",
      image:"./assets/miranda.jpg",
      link: "./Miranda-Clone/index.html",
    },
    {
      id: 19,
      title: "Pomerdo-Timer",
      description: "A Pomodoro Timer is a time management tool that breaks work into intervals, typically 25 minutes, separated by short breaks, using JavaScript to track and display time.",
      image:"./assets/Timer2.jpg",
      link: "./Pomerdo-Timer/index.html",
    },
    {
      id: 20,
      title: "Ramufy",
      description: "Ramufy, a Spotify-like music player, uses HTML, CSS, and JavaScript to play songs, display playlists, and manage playback controls dynamically.",
      image:"./assets/music-player.jpg",
      link: "./Ramufy/index.html",
    },
    {
      id: 21,
      title: "Random-Meme",
      description: "A Random Meme displays a random meme image fetched from an API using JavaScript, updating each time a button is clicked.",
      image:"./assets/Random.jpg",
      link: "./Random-Meme/index.html",
    },
    {
      id:22,
      title: "Random Color Generator",
      description: "A Random Color Generator generates and displays random colors using JavaScript, typically by generating random RGB or HEX values.",
      image:"./assets/Random-Color.jpg",
      link: "./Random-Color-Generator/index.html",
    },
    {
      id: 23,
      title: "RealTime Character Count",
      description: "Real-time Character Count dynamically updates and displays the number of characters typed in a text input or textarea using JavaScript.",
      image:"./assets/Realtime-Count.jpg",
      link: "./RealTime-Character-Count/index.html",
    },
    {
      id: 24,
      title: "Rotating-Image-Gallery",
      description: "A Rotating Image Gallery displays images in a rotating carousel, using JavaScript to cycle through images with next/previous controls or automatic transitions.",
      image:"./assets/Rotating-Image.jpg",
      link: "./Rotating-Image-Gallery/index.html",
    },
    {
      id: 25,
      title: "Shoes Wallet",
      description: "A Shoes E-commerce Website showcases products with filters, a cart system, and responsive design, using HTML, CSS, JavaScript, and optional backend integration.",
      image:"./assets/shoes.jpg",
      link: "./Shoes-Website/index.html",
    },
    {
      id: 26,
      title: "Todo-List",
      description: "A To-Do List using `localStorage` saves tasks persistently, allowing users to add, delete, and manage tasks with HTML, CSS, and JavaScript.",
      image:"./assets/todo.jpg",
      link: "./Todo-List/index.html",
    },
    {
      id: 27,
      title: "Video-Pop",
      description: "A Video Pop-up displays a video in a modal or overlay when triggered, using HTML, CSS, and JavaScript to manage visibility and play functionality.",
      image:"./assets/VideoPop.jpg",
      link: "./Video-Pop/index.html",
    },
    {
      id: 25,
      title: "Lucy Education Page",
      description: "A responsive educational landing page built using HTML, CSS, and JavaScript. It features smooth scrolling navigation, structured course sections, and a modern UI design aimed at providing students with accessible learning content. JavaScript is used for form validation and interactive UI elements.",
      image: "./assets/lucy.png",
      link: "./Lucy-Education/index.html",
    }
    
  ],
};

export default allProjectData;
