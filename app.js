const form = document.querySelector(".form");
// Input
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
// Output
const dayOutput = document.querySelector(".days");
const monthOutput = document.querySelector(".months");
const yearOutput = document.querySelector(".years");

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
    return;
  } else {
    dayError.classList.remove("visible");
  }

  const monthError = document.querySelector(".month-input span");
  if (monthInput.value > 12 || monthInput.value <= 0) {
    monthError.innerText = "Must be a valid month";
    monthError.classList.add("visible");
    return;
  } else {
    monthError.classList.remove("visible");
  }

  const yearError = document.querySelector(".year-input span");
  if (yearInput.value > currDate.years() || yearInput.value <= 0) {
    yearError.innerText = "Must be in the past";
    yearError.classList.add("visible");
    return;
  } else {
    yearError.classList.remove("visible");
  }

  // Calculate the difference in years, months, and days
  const years = currDate.diff(birthdate, "years");
  birthdate.add(years, "years");

  const months = currDate.diff(birthdate, "months");
  birthdate.add(months, "months");

  const days = currDate.diff(birthdate, "days");

  dayOutput.innerHTML = days;
  monthOutput.innerHTML = months;
  yearOutput.innerHTML = years;
});

function checkDate() {}
