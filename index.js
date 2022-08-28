const getDom = (el) => document.querySelector(el)
//DOMS
const digMin = getDom(".digital-minute")
const digSec = getDom(".digital-second")
const digMili = getDom(".digital-milisecond")
const startBtn = getDom(".startBtn")
const pauseBtn = getDom(".pauseBtn")
const resumeBtn = getDom(".resumeBtn")
const stopBtn = getDom(".stopBtn")
const actionsContainer = getDom(".actionsBtn-container")
//VARIABLES
let time = 0
let interval
let minute, second, milisecond

//FUNCTIONS
const timeGenerator = (time) => {
    minute = ("0" + Math.floor((time / (1000 * 60) % 60))).slice(-2)
    second = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    milisecond = ("0" + Math.floor((time / 10) % 100)).slice(-2)
    digMin.innerHTML = minute
    digSec.innerHTML = second
    digMili.innerHTML = milisecond
}
const startInterval = () => {
    interval = setInterval(() => {
        time += 10
        timeGenerator(time)
    }, 10)
}

//EVENTS
startBtn.addEventListener("click", () => {
    startInterval()
    startBtn.style.display = "none"
    actionsContainer.style.display = "flex"
})
pauseBtn.addEventListener("click", () => {
    clearInterval(interval)
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"
})
resumeBtn.addEventListener("click", () => {
    startInterval()
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
})
stopBtn.addEventListener("click", () => {
    startBtn.style.display = "block"
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
    actionsContainer.style.display = "none"
    clearInterval(interval)
    timeGenerator(0)
    time = 0
})