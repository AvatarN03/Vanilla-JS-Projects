let menu = document.querySelector('#menu');
let nav = document.getElementsByTagName('nav')[0];
let loader = document.getElementById('loading');
let root = document.getElementById('root');



function showLoader(){
  loader.style.display = 'flex';

  window.addEventListener('load', () => {
    loader.style.display = 'none';
    loader.style.zIndex = '-1';
    root.style.opacity = '1';
    
    anime1();
    
  });
}

showLoader();



menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}


var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
    
    breakpoints: {
        540: {
          slidesPerView: 1,
          },
        768: {
          slidesPerView: 2,
          },
        1024: {
          slidesPerView: 3,
          },
      },
  });


var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  },
  
  breakpoints: {
      540: {
        slidesPerView: 1,
        },
      768: {
        slidesPerView: 2,
        },
      1024: {
        slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  },
  
  breakpoints: {
      540: {
        slidesPerView: 1,
        },
      768: {
        slidesPerView: 2,
        },
      1024: {
        slidesPerView: 3,
        },
    },
});


function anime1(){

  gsap.from('.teachers', {
    y:-100,
    duration:1,
    opacity:0,
    delay:1,
    scrollTrigger:{
      trigger:'.teachers .heading',
      start: 'top 60%',
      end: 'top 30%',
      
      scrub: true
    }
  }
  )
}


const form = document.getElementsByTagName('form')[0];

function data() {
  const inputs = [...document.getElementsByTagName('input')];
  
}

form.addEventListener('submit', (e) => {
  
  data();

  // To log all form values
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  
  const obj = {};
  formData.forEach((value, key) => {
    obj[key] = value;
  });
  const jsonString = JSON.stringify(obj);
  localStorage.setItem('formData', jsonString);

  
});




















