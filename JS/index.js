var swiper1 = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'vertical',
  effect: "fade",
  loop: true,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-1',
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar-1',
  },
});

var swiper2 = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

// -- FAQ Logic 
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", ()=> {
    faq.classList.toggle("active");
  })
});


// -- Handling navbar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header-container");

const toggleNavbar = () => {
    nav_header.classList.toggle("active-header");
};

mobile_nav.addEventListener("click" , ()=> toggleNavbar());


const my_navbar_links = document.querySelectorAll(".navbar-links");

// On click remove active header so that it will be links will be invisible
const handleClick = () => {
    nav_header.classList.remove("active-header");
};

for (let i = 0; i < my_navbar_links.length; i++) {
    my_navbar_links[i].addEventListener("click", () => handleClick());
}



// --- Handling popularity count

let popularityCounts = document.querySelectorAll(".popularity-count");

let interval = 5000;

popularityCounts.forEach((popularityCount) => {
  let startValue = 0;
  let endValue = parseInt(popularityCount.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);

  let counter = setInterval(() => {
    startValue += 1;
    popularityCount.textContent = startValue;

    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration);
});

