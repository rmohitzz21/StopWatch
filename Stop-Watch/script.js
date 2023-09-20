const timeDisplay = document.querySelector("#TimeDisplay");
const StartBtn = document.querySelector("#StartBtn");
const PauseBtn = document.querySelector("#PauseBtn");
const ResetBtn = document.querySelector("#ResetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let interValid;
let hrs = 0;
let mins = 0;
let secs = 0;

StartBtn.addEventListener("click", () => {
  if (paused) paused = false;
  startTime = Date.now() - elapsedTime;
  interValid = setInterval(updateTime, 75);
});

PauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(interValid);
  }
});
ResetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(interValid);
   startTime = 0;
   elapsedTime = 0;
   currentTime = 0;
   hrs = 0;
   mins = 0;
   secs = 0;
  timeDisplay.textContent = "00:00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
