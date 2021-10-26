// init Isotope ===============================================

var $grid = $(".portfolio-items").isotope({
  // options
});

// filter items on button click

$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({filter: filterValue});
});

// Rest Form ===============================================

const inputs = document.querySelectorAll(".input");
const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
});
