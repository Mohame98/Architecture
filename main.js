$(document).ready(function () {
    $('.slider').slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    // speed: 500,
    // autoplaySpeed: 5000,
    // Infinite: true,
    // autoplay: true,
    arrows: true,
    // pauseonhover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
    $('.slick-prev').addClass('fa-solid fa-arrow-left').empty(); 
    $('.slick-next').addClass('fa-solid fa-arrow-right').empty();
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

AOS.init({
    once: true,
  });