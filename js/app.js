// init Isotope ===============================================

var $grid = $(".portfolio-items").isotope({
  // options
});

// filter items on button click

$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({filter: filterValue});
});

// Rest Form =================================================

const inputs = document.querySelectorAll(".input");
const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
});

// Back To Top ================================================

window.onscroll = function () {
  scrollFunction();
};

const backToTop = document.querySelector(".back-to-top");
backToTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: "smooth"});
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}
