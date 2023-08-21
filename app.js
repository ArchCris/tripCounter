const displayDays = document.querySelector('.displayDays')
const displayHours = document.querySelector('.displayHours')
const displayMinutes = document.querySelector('.displayMinutes')
const displaySeconds = document.querySelector('.displaySeconds')

let counter = 0

const getTimeLeft = () =>{

const actualDate = new Date().getTime()
const futureDate = new Date('October 12,2023 10:20:00').getTime()

const timeLeft = futureDate - actualDate

const dayInMil = 1000 * 60 * 60 * 24
const hourInMil = 1000 * 60 * 60 
const minuteInMil = 1000 * 60 
const secondInMil = 1000

const leftDays = Math.floor(timeLeft / dayInMil)
const leftHours = Math.floor((timeLeft % dayInMil / hourInMil))
const leftMinutes = Math.floor(timeLeft % hourInMil / minuteInMil)
const leftSeconds = Math.floor(timeLeft % minuteInMil / secondInMil)

displayDays.innerHTML = leftDays
displayHours.innerHTML = leftHours
displayMinutes.innerHTML = leftMinutes
displaySeconds.innerHTML = leftSeconds

}

setInterval(() => {
  getTimeLeft()
}, 1000);

getTimeLeft()




