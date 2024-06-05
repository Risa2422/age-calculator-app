const form = document.querySelector(".form");
// Input
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
// Output
const dayOutput = document.querySelector(".days");
const monthOutput = document.querySelector(".months");
const yearOutput = document.querySelector(".years");
// Label
const dayLabel = document.querySelector(".daylabel");
const monthLabel = document.querySelector(".monthlabel");
const yearLabel = document.querySelector(".yearlabel");

let birthdate = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const birthdate = moment(
    `${yearInput.value}-${monthInput.value}-${dayInput.value}`
  );
  const currDate = moment();

  const dayError = document.querySelector(".day-input span");
  if (dayInput.value > 31 || dayInput.value <= 0) {
    dayError.innerText = "Must be a valid day";
    dayError.classList.add("visible");
    dayInput.classList.add("error");
    dayLabel.classList.add("labelError");
    return;
  } else {
    dayError.classList.remove("visible");
    dayInput.classList.remove("error");
    dayLabel.classList.remove("labelError");
  }

  const monthError = document.querySelector(".month-input span");
  if (monthInput.value > 12 || monthInput.value <= 0) {
    monthError.innerText = "Must be a valid month";
    monthError.classList.add("visible");
    monthInput.classList.add("error");
    monthLabel.classList.add("labelError");
    return;
  } else {
    monthError.classList.remove("visible");
    monthInput.classList.remove("error");
    monthLabel.classList.remove("labelError");
  }

  const yearError = document.querySelector(".year-input span");
  if (
    yearInput.value > currDate.format("YYYY").toString() ||
    yearInput.value <= 0
  ) {
    yearError.innerText = "Must be in the past";
    yearError.classList.add("visible");
    yearInput.classList.add("error");
    yearLabel.classList.add("labelError");
    return;
  } else {
    yearError.classList.remove("visible");
    yearInput.classList.remove("error");
    yearLabel.classList.remove("labelError");
  }

  // Calculate the difference in years, months, and days
  const years = currDate.diff(birthdate, "years");
  birthdate.add(years, "years");

  const months = currDate.diff(birthdate, "months");
  birthdate.add(months, "months");

  const days = currDate.diff(birthdate, "days");

  if (years < 0 || months < 0 || days < 0) {
    alert("Must be the past day");
    return;
  }

  // Function to animate the counter
  const animateCounter = (element, start, end) => {
    const duration = 750; // Animation duration in milliseconds
    const startTime = performance.now();
    const step = (currentTime) => {
      const progress = (currentTime - startTime) / duration;
      const value = Math.round(start + progress * (end - start));
      element.innerHTML = progress < 1 ? value : end;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  // Ensure initial values are numbers and set them to 0 if they are not
  const parseOrDefault = (value, defaultValue) => isNaN(parseInt(value)) ? defaultValue : parseInt(value);

  // Animate the counters
  animateCounter(dayOutput, parseOrDefault(dayOutput.innerHTML, 0), days);
  animateCounter(monthOutput, parseOrDefault(monthOutput.innerHTML, 0), months);
  animateCounter(yearOutput, parseOrDefault(yearOutput.innerHTML, 0), years);
});
