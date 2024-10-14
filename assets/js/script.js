'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


//sound effects

 const audio = new Audio ;
            audio.src ="./assets/Sounds/Message Sent.mp3" ; 

 const teams = new Audio ;
            teams.src ="./assets/Sounds/Teams.mp3" ; 

 const logo = new Audio ;  
            logo.src ="./assets/Sounds/Logo.wav" ; 

            const doing = new Audio ;  
            doing.src ="./assets/Sounds/what i doing.mp3" ; 
            
           
            const fb = new Audio ;  
            fb.src ="./assets/Sounds/Facebook Sound.mp3" ; 
            
            const Insta = new Audio ;  
          Insta.src ="./assets/Sounds/instagram.mp3" ; 
            

 window.onload=function(){
      document.getElementById("my_audio").play();
    }

    var player = document.getElementById("player");
    let progress = document.getElementById("progress");
    let playbtn = document.getElementById("playbtn");
    let prevbtn = document.getElementById("prevbtn");
    let nextbtn = document.getElementById("nextbtn");
    let current = document.getElementById("current");
    let songTitle = document.getElementById("songTitle");
    
    // Array of songs
    let songs = [
      { title: "", src: "./assets/Sounds/Renegades.mp3" },
      { title: "", src: "./assets/Sounds/Hanumankind.mp3" },
      { title: "", src: "./assets/Sounds/andonandon.mp3"},
      {title: "", src: "./assets/Sounds/Alan Walker - Alone.mp3"}
    ];
    
    let currentSongIndex = 0;
    
    // Function to load the song
    function loadSong(songIndex) {
      player.src = songs[songIndex].src;
      songTitle.innerHTML = songs[songIndex].title;
      player.load(); // Reload the audio element
    }
    
    // Play/Pause functionality
    var playpause = function () {
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    }
    
    playbtn.addEventListener("click", playpause);
    
    // Previous song functionality
    prevbtn.addEventListener("click", function() {
      currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
      loadSong(currentSongIndex);
      player.play();
    });
    
    // Next song functionality
    nextbtn.addEventListener("click", function() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      loadSong(currentSongIndex);
      player.play();
    });
    
    // Update button on play
    player.onplay = function () {
      playbtn.classList.remove("fa-play");
      playbtn.classList.add("fa-pause");
    }
    
    // Update button on pause
    player.onpause = function () {
      playbtn.classList.add("fa-play");
      playbtn.classList.remove("fa-pause");
    }
    
    // Time update and progress bar functionality
    player.ontimeupdate = function () {
      let ct = player.currentTime;
      current.innerHTML = timeFormat(ct);
    
      // Calculate progress
      let duration = player.duration;
      let prog = Math.floor((ct * 100) / duration);
    
      // Update the --progress CSS variable
      progress.style.setProperty('--progress', prog + "%");
    }
    
    // Format the time to show in minutes:seconds
    function timeFormat(ct) {
      let minutes = Math.floor(ct / 60);
      let seconds = Math.floor(ct % 60);
    
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
    
      return minutes + ":" + seconds;
    }
    
    // Load the initial song
    loadSong(currentSongIndex);
    

document.addEventListener('DOMContentLoaded', () => {
    // Function to check if an element is in the viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to add animations when elements come into view
    const handleScrollAnimation = () => {
        const animatedElements = document.querySelectorAll('.about-text, .service-item, .testimonials-item');
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate'); // Add the animate class
            }
        });
    };

    // Scroll Animation Observer
function scrollObserverAnimation(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); // Add animation when visible
    }
  });
}

// Create an intersection observer for the scroll animations
const scrollObserver = new IntersectionObserver(scrollObserverAnimation, {
  threshold: 0.2, // 20% of the element should be visible to trigger
});

// Observe elements for scroll-triggered animation
document.querySelectorAll('.timeline-item, .skills-item').forEach((item) => {
  scrollObserver.observe(item);
});

// Skill Bar Animation Observer
function skillBarObserver(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-progress-fill');
      skillBars.forEach(skillBar => {
        const width = skillBar.getAttribute('data-progress'); // Get the progress value
        skillBar.style.width = width + '%'; // Animate the width of the skill bar
      });
    }
  });
}

// Create an intersection observer for skill bar animations
const skillObserver = new IntersectionObserver(skillBarObserver, {
  threshold: 0.3, // 30% of the section visible before triggering skill bar animation
});

// Observe the skill section for bar animations
skillObserver.observe(document.querySelector('.resume'));


    // Initial call to handle scroll animations
    handleScrollAnimation();

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
});

/* When the page loads, fade out the loader */
window.onload = function() {
  document.querySelector('.center').classList.add('fade-out');
  setTimeout(() => {
      document.querySelector('.center').style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling
  }, 500);
};



            //CLOCK
            // glabal variables
            const weekdays = ['   Sun', '   Mon', '   Tue', '   Wed', '   Thu', '   Fri', '   Sat'];
            
            /*clock settings*/
            let clock = setTimeout(function clockSet() {
              const today = new Date(); //fetching date
            
              // date options
              let y = today.getFullYear();
              let mo = (today.getMonth() + 1);
              let d = today.getDate();
              let h = today.getHours();
              let m = today.getMinutes();
              let s = today.getSeconds();
              let am = ''; // am:pm empty string
            
              let day = weekdays[today.getDay()]; // turning number to weekdays. 
            
              // format 12 hours && decide am/pm
              if (h > 12) {
                h = (checkTime(h) - 12);
                am = '    PM';
              } else {
                am = '    AM';
              }
            
              //make douple digits
              mo = checkTime(mo);
              d = checkTime(d);
              h = checkTime(h);
              m = checkTime(m);
              s = checkTime(s);
            
              function checkTime(i) {
                if (i < 10) {
                  i = '0' + i;
                }
                return i;
              }
            
              const time = h + ':' + m + ':' + s; //full time
              document.getElementById('time').textContent = time; //fill time
              document.getElementById('am').textContent = am;
            
              const date = y + '/' + mo + '/' + d; //full date 
                document.getElementById('date').textContent = date;// fill date
              document.getElementById('day').textContent = day; 
            
              //console.log(time , date) 
            
              clock = setTimeout(clockSet, 1000); //nest setTimeOut 
            }, 1000) //repeat every second


// Get all elements that will disintegrate
const snapButton = document.getElementById('snapButton');
const elementsToSnap = document.querySelectorAll('.profile-badge, h2, h3, img, a, time, address, .unique-status-indicator, h1, p, h4, h5, span, svg, .fa, .div, .clock, .icon-box, .count, .fa-users, button, .count, .section-effect');

// Get audio elements
const disintegrateSound = document.getElementById('disintegrateSound');
const recoverSound = document.getElementById('recoverSound');

// Add event listener for the snap button
snapButton.addEventListener('click', function () {
    // Add snap animation to the button
    snapButton.classList.add('snap-click-effect');

    // Loop through each element and apply specific animations based on tag or class
    elementsToSnap.forEach(element => {
        setTimeout(() => {
            let classList = element.classList;

            // Play disintegration sound
            disintegrateSound.currentTime = 0; // Reset sound to start
            disintegrateSound.play(); // Play disintegration sound

            // Remove any existing animation classes first
            classList.remove('disintegrate', 'recover', 'profile-badge-effect', 'icon-box-effect', 'count-effect', 'section-effect-animation', 'h1-effect', 'h2-effect', 'h3-effect', 'h4-effect', 'p-effect', 'img-effect', 'a-effect', 'address-effect', 'time-effect', 'span-effect', 'fa-effect', 'clock-effect');

            // Add animation effects based on element type
            if (classList.contains('profile-badge')) {
                element.classList.add('profile-badge-effect');
            } else if (classList.contains('icon-box')) {
                element.classList.add('icon-box-effect');
            } else if (classList.contains('count') || classList.contains('fa-users')) {
                element.classList.add('count-effect');
            } else if (classList.contains('section-effect')) {
                element.classList.add('section-effect-animation');
            } else {
                let tag = element.tagName.toLowerCase();
                element.classList.add(tag + '-effect');
            }

            // Add disintegration effect
            element.classList.add('disintegrate');
        }, Math.random() * 1000);  // Randomize the delay for a cooler effect
    });

    // Hide the snap button after activation
    setTimeout(() => {
        snapButton.style.display = 'none';
    }, 1000);

    // Automatically restore all content after 5 seconds, with recovery effects
    setTimeout(() => {
        elementsToSnap.forEach(element => {
            // Remove disintegration effect and other animation classes
            element.classList.remove('disintegrate', 'profile-badge-effect', 'icon-box-effect', 'count-effect', 'section-effect-animation', 'h1-effect', 'h2-effect', 'h3-effect', 'h4-effect', 'p-effect', 'img-effect', 'a-effect', 'address-effect', 'time-effect', 'span-effect', 'fa-effect', 'clock-effect');

            // Apply the recovery effect
            element.classList.add('recover');
        });

        // Play recovery sound
        recoverSound.currentTime = 0; // Reset sound to start
        recoverSound.play(); // Play recovery sound

        // Remove recovery effect after animation is complete and show the snap button again
        setTimeout(() => {
            elementsToSnap.forEach(element => {
                element.classList.remove('recover');
            });
            snapButton.style.display = 'block';  // Show the snap button again
            snapButton.classList.remove('snap-click-effect');
        }, 2000);  // Recovery duration (adjust if needed)

    }, 5000); // Start recovery after 5 seconds
});
