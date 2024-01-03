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

//musicplayer
 var player = document.getElementById("player");
      let progress = document.getElementById("progress");
      let playbtn = document.getElementById("playbtn");
      
      var playpause = function () {
        if (player.paused) {
          player.play();
        } else {
          player.pause();
        }
      }
      
      playbtn.addEventListener("click", playpause);
      
      player.onplay = function () {
        playbtn.classList.remove("fa-play");
        playbtn.classList.add("fa-pause");
      }
      
      player.onpause = function () {
        playbtn.classList.add("fa-play");
        playbtn.classList.remove("fa-pause");
      }
      
      player.ontimeupdate = function () {
        let ct = player.currentTime;
        current.innerHTML = timeFormat(ct);
        
        //progress
        
        let duration = player.duration;
        prog = Math.floor((ct * 100) / duration);
        progress.style.setProperty("--progress", prog + "%");
      }
      
      function timeFormat(ct) {
        minutes = Math.floor(ct / 60);
        seconds = Math.floor(ct % 60);
      
        if (seconds < 10) {
          seconds = "0"+seconds;
        }
      
        return minutes + ":" + seconds;
      }






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
