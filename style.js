function activeMenu() {
  let element = document.querySelector(".menu-mobile .menu");
  element.classList.toggle("active");
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $("#scroll-top").show();
  } else {
    $("#scroll-top").hide();
  }
});

$(".scroll-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(function () {
  setNavigation();
});

function setNavigation() {
  let path = window.location.pathname;
  path = path.replace(/\/$/, "");
  path = decodeURIComponent(path);

  $(".main-menu a").each(function () {
    const href = $(this).attr("href");
    if (href && path.substring(0, href.length) === href) {
      $(this).closest("li").addClass("active");
    }
  });
}
// .carousel-indicators
$(document).ready(function () {
  const listCarousel = [
    "#multi-item-all",
    "#multi-item-profile",
    "#multi-item-drink",
    "#multi-item-other"
  ];
  listCarousel.forEach((item) => {
    $(item)
      .find("li")
      .click(function () {
        if ($(item + " li.active") && $(item + " li.active").length > 0) {
          $(item + " li.active")[0].classList.toggle("active");
          $(item + " .carousel-item.d-block")[0].classList.toggle("d-block");
        }
        $(this)[0].classList.toggle("active");
        $(item + " .carousel-item")[$(this).data("slide-to")].classList.toggle(
          "d-block"
        );
      });
  });
});
