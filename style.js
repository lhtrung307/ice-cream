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
