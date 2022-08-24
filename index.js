"use strict";
const rate = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submit");
let selected;

// const rateClick = rate.forEach(function (ele, i, arr) {
//   ele.addEventListener("click", function () {
//     ele.style.backgroundColor = "hsl(216, 12%, 54%)";
//     ele.style.color = " hsl(0, 0%, 100%)";

// submitBtn.addEventListener("click", function () {
//   document.querySelector(".container__rating").style.display = "none";
//   document.querySelector(".container__thank-you").style.display = "block";
//   document.querySelector(".selected").textContent = ele.textContent;
//   document.querySelector(".total").textContent = arr.length;
// });
//   });
// });

document.querySelector(".rates").addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("rate")) {
    console.log("Yes");
    highlight(target);

    submitBtn.addEventListener("click", function () {
      document.querySelector(".container__rating").style.display = "none";
      document.querySelector(".container__thank-you").style.display = "block";
      document.querySelector(".selected").textContent = target.textContent;
    });
  }
});

function highlight(ele) {
  if (selected) {
    selected.classList.remove("rate-click");
  }
  selected = ele;
  selected.classList.add("rate-click");
}
