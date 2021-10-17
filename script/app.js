const headerNav = document.querySelector(".navbar")
console.log(headerNav);
const navLinks = document.querySelectorAll(".nav__link")
window.addEventListener("scroll", function () {
  let scrollPos = window.scrollY;
  console.log(scrollPos);
  if (scrollPos > 0) {
    headerNav.classList.add('red');
  } else {
    headerNav.classList.remove('red');
  }

});

for (let navItem of navLinks) {
  navItem.addEventListener("click", function () {
    alert(navItem.text);
  });
}