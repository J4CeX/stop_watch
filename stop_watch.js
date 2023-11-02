let isPlaying = false;
let seconds = JSON.parse(localStorage.getItem('seconds'));
let minutes = JSON.parse(localStorage.getItem('minutes'));;
let hours = JSON.parse(localStorage.getItem('hours'));;

let intervalId;
let time = ``;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => {
  startButton.classList.toggle('hidden');
  stopButton.classList.remove('hidden');
  resetButton.classList.remove('hidden');
  
  if(!isPlaying) {
    isPlaying = true;

    intervalId = setInterval(() => {
      playTime();
      displayTime();
    }, 1000);
  }
});

stopButton.addEventListener('click', () => {
  if(seconds == 0 && minutes == 0 && hours == 0) {
    resetButton.classList.toggle('hidden');
  }
  startButton.classList.toggle('hidden');
  stopButton.classList.toggle('hidden');
  

  isPlaying = false;
  clearInterval(intervalId);
});

resetButton.addEventListener('click', () => {
  startButton.classList.remove('hidden');
  stopButton.classList.add('hidden');
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
  localStorage.setItem('seconds', JSON.stringify(seconds));
  localStorage.setItem('minutes', JSON.stringify(minutes));
  localStorage.setItem('hours', JSON.stringify(hours));
}

displayTime();