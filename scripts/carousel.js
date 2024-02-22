// todo: Carousel
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  let counter = 0;

  setInterval(() => {
    counter++;
    if (counter >= 7) {
      counter = 0;
    }
    carousel.style.transform = "translateX(" + -counter * 100 + "%)";
  }, 5000);
});

//todo: Input Icon animation
$("input").on("focusout", function () {
  $(this).each(function (i, e) {
    if ($(e).val() != "") {
      $(e).addClass("not-empty");
    } else {
      $(e).removeClass("not-empty");
    }
  });
});

$(".login").on("click", function () {
  $(this).animate(
    {
      fontSize: 0,
    },
    300,
    function () {
      $(".check").addClass("in");
    }
  );
});
