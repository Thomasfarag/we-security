const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Optionally, you can set an interval to automatically transition slides
// setInterval(nextSlide, 5000); // Transition every 5 seconds

// Initially show the first slide
showSlide(currentSlide);


document.getElementById('myForm').addEventListener('submit', function(event) {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var alertDiv = document.getElementById('alert');

  if (name === '' || email === '' || message === '') {
    showAlert('Please fill out all required fields.', 'alert-danger');
    event.preventDefault(); // Prevent form submission
  } else if (!emailPattern.test(email)) {
    showAlert('Please enter a valid email address.', 'alert-danger');
    event.preventDefault(); // Prevent form submission
  }
});

function showAlert(message, alertClass) {
  var alertDiv = document.getElementById('alert');
  if (!alertDiv) {
    alertDiv = document.createElement('div');
    alertDiv.id = 'alert';
    document.body.prepend(alertDiv);
  }
  alertDiv.innerHTML = `<div class="alert ${alertClass} alert-dismissible fade show" role="alert">${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
}
