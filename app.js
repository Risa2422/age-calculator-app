const form = document.querySelector('.form')
// Input
const dayInput = document.querySelector('#day')
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')
// Output
const dayOutput = document.querySelector('.days')
const monthOutput = document.querySelector('.months')
const yearOutput = document.querySelector('.years')

let birthdate = ""

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const birthdate = moment(`${yearInput.value}-${monthInput.value}-${dayInput.value}`)
  const currDate = moment()

  // Calculate the difference in years, months, and days
  const years = currDate.diff(birthdate, 'years');
  birthdate.add(years, 'years');

  const months = currDate.diff(birthdate, 'months');
  birthdate.add(months, 'months');

  const days = currDate.diff(birthdate, 'days');

  dayOutput.innerHTML = days
  monthOutput.innerHTML = months
  yearOutput.innerHTML = years
})