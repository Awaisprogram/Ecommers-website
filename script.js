// const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })



// special countdown//
let dayItem = document.querySelector("#days")
let hoursItem = document.querySelector("#hours")
let minItem = document.querySelector("#min")
let secItem = document.querySelector("#sec")

let countdownDate = () => {
  let FutureDate = new Date("14 August 2024")
  let currentDate = new Date()
  let myDate = FutureDate - currentDate;

  let days = Math.floor(myDate /1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate /1000 / 60 / 60 )% 24;
  let min = Math.floor(myDate /1000 / 60 ) % 60;
  let sec = Math.floor(myDate /1000) % 60;
  dayItem.innerHTML = days
  hoursItem.innerHTML = hours
  minItem.innerHTML = min
  secItem.innerHTML = sec





}
countdownDate()
setInterval(countdownDate, 1000)

