const timeDisplay = document.querySelector("#digital-clock");
const audio = new Audio("mixkit-digital-clock-digital-alarm-buzzer-992.wav");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function timeUpdate() {
  const date = new Date();
  const hour = addingZero(date.getHours());
  const minutes = addingZero(date.getMinutes());
  const seconds = addingZero(date.getSeconds());
  timeDisplay.innerText = hour + " : " + minutes + " : " + seconds;
}

function addingZero(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}

setInterval(timeUpdate, 1000);
function setAlarmTime(value) {
  alarmTime = value;
  alert(alarmTime);
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(function () {
        audio.play();
      }, timeout);
      alert("Alarm set");
    }
  }
}

function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("Alarm cleared");
  }
}
