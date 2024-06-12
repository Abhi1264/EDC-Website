const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // 100% opaque
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // 50% opaque
  }
});

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// information container
ScrollReveal().reveal(".information__card", {
  ...scrollRevealOption,
  interval: 500,
});

// testimonial container
ScrollReveal().reveal(".testimonial__card", {
  ...scrollRevealOption,
  interval: 500,
});

// instructor container
ScrollReveal().reveal(".instructor__card", {
  ...scrollRevealOption,
  interval: 500,
});
// experience container
ScrollReveal().reveal(".experience__grid", {
  ...scrollRevealOption,
  interval: 500,
});
