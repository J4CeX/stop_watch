let isPlaying = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

let intervalId;
let time = '';

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => {
  startButton.classList.toggle('hidden');
  stopButton.classList.toggle('hidden');
  resetButton.classList.toggle('hidden');
  
  if(!isPlaying) {
    isPlaying = true;

    intervalId = setInterval(() => {
      playTime();
      displayTime();
    }, 1000);
  }
});

stopButton.addEventListener('click', () => {
  startButton.classList.toggle('hidden');
  stopButton.classList.toggle('hidden');
  resetButton.classList.toggle('hidden');

  isPlaying = false;
  clearInterval(intervalId);
});

resetButton.addEventListener('click', () => {
  startButton.classList.toggle('hidden');
  stopButton.classList.toggle('hidden');
  resetButton.classList.toggle('hidden');

  isPlaying = false;
  clearInterval(intervalId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  displayTime();
});

const playTime = () => {
  seconds++;
  if(seconds === 60) {
    minutes++;
    seconds = 0;
  } 
  if(minutes === 60) {
    minutes = 0;
    hours++;
  }
}

const displayTime = () => {
  time = ``;
  if(hours > 0) {
    time += hours;
    time += ':';
  }
  if(minutes > 0 && minutes < 10) {
    time += '0';
    time += minutes;
    time += ':';
  } else if(minutes > 0 && minutes > 9) {
    time += minutes;
    time += ':';
  } else {
    time += '00:';
  }
  if(seconds > 0 && seconds < 10) {
    time += '0';
    time += seconds;
  } else if(seconds > 0 && seconds > 9) {
    time += seconds;
  } else {
    time += '00';
  }
  const watch = document.getElementById('watch');
watch.innerHTML = time;
}