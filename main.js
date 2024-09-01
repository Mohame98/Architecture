$(document).ready(function () {
    $('.slider').slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
});

document.querySelectorAll('.service').forEach(function(service) {
    const serviceBar = service.querySelector('.wrapper');
    const serviceDesc = service.querySelector('.service-description');
    const closed = service.querySelector('.wrapper span')
    const h3 = service.querySelector('.serve')

    serviceBar.addEventListener('click', function() {
        h3.classList.toggle("open")
        serviceDesc.classList.toggle("open");
        closed.classList.toggle("open");
    });
});

// Header Responsive burger
let menuList = document.getElementById("menuList")
let icon = document.querySelector('menu-icon i')
menuList.style.height = "0px";

function toggleMenu() {
    if (menuList.style.height === "0px" || menuList.style.height === "") {
        menuList.style.height = "70vh";
    } else {
        menuList.style.height = "0px";
    }
}

AOS.init({
    once: true,
});