$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    navText: [
      "<img src='/assets/img/icon/left-btn.svg'>",
      "<img src='/assets/img/icon/right-btn.svg'>",
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 30,
    center: true,
    loop: true,
    margin: 16,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
