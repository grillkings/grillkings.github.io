let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec => {

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;


// const form = document.querySelector('.email_form');


const form = document.querySelector('.email_form');


function sendMsg(e) {
  e.preventDefault();

  
  
  window.location.replace("congratulations.html")



  // alert(`Hi ${name.value}, your order has been received, We will get back to you as soon as possible. Thank you...`)


  // Email.send({
  //   SecureToken: "83cca1a0-dc66-4c31-92db-0561412b918c",
  //   To: 'anyomiprince27@gmail.com',
  //   From: 'anyomiprince27@gmail.com',
  //   Subject: 'Grill Kings Orders',
  //   Body: `Name: ${name.value} <br> Email: ${number.value}  <br>  Message: ${msg.value}`
  // }).then(
  //   message => alert(`Hi ${name.value}, your order has been received, I will get back to you as soon as possible. Thank you... <br> --Grill Kings--`)
  // );

}

form.addEventListener('submit', sendMsg);



// Get Data
// function sendOrders(e) {
//   e.preventDefault();

//   const firebaseConfig = {
//     apiKey: "AIzaSyAxgzU69UeVlass3pTeFT4PxM7Y5jMs6zE",
//     authDomain: "persbemarket.firebaseapp.com",
//     projectId: "persbemarket",
//     storageBucket: "persbemarket.appspot.com",
//     messagingSenderId: "604219818196",
//     appId: "1:604219818196:web:ce6c68675b97210eebfb41",
//     measurementId: "G-W2T2PRLTLS"
//   };

//   firebase.initializeApp(firebaseConfig);
//   let db = firebase.firestore();

//   const name = document.querySelector('.name'),
//     number = document.querySelector('.number'),
//     msg = document.querySelector('.msg');



//   // db.collection("Orders").doc().set({
//   //   name: name.value,
//   //   phone: number.value,
//   //   order: msg.value
//   // }).the

//   alert(`Hi ${name.value}, your order has been received, We will get back to you as soon as possible. Thank you...`)


// }
