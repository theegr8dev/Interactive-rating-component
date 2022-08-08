"use strict";
const rate = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submit");

const rateClick = rate.forEach(function (ele, i, arr) {
  ele.addEventListener("click", function () {
    ele.style.backgroundColor = "hsl(216, 12%, 54%)";
    ele.style.color = " hsl(0, 0%, 100%)";

    submitBtn.addEventListener("click", function () {
      document.querySelector(".container__rating").style.display = "none";
      document.querySelector(".container__thank-you").style.display = "block";
      document.querySelector(".selected").textContent = ele.textContent;
      document.querySelector(".total").textContent = arr.length;
    });
  });
});
