//alert(document.location.pathname);
import barba from '@barba/core';
import { animate } from 'motion';

//Main
document.addEventListener('alpine:init', () => {
  Alpine.data('utils', () => ({
    level: 0,
    time: 5.0,
    updateRate: 0.1,
    currentTime: 0.0,
    score: 0.0,
    levelArray: [
      [false, false, false, false, 0.0], //BEGIN RANGE
      //EASY
      [false, false, false, true, 10.0],
      [true, false, false, true, 5.0],
      [false, true, true, false, 5.0],
      //MEDIUM
      [true, true, true, false, 5.0],
      [true, true, true, true, 5.0],
      [true, true, true, true, 5.0],
      //Hard
      [true, false, false, false, 3.0],
      [false, true, true, false, 3.0],
      [true, true, true, false, 3.0],
      [true, true, true, true, 3.0],
      [], //END RANGE
    ],
    showBlue: Boolean,
    showYellow: Boolean,
    showGreen: Boolean,
    showRed: Boolean,
    showForm: false,
    startScreen: true,
    startButtonText: 'Start New Game',
    startMessage: 'Welcome to The Game',
    timerId: 0,
    timeAnimation: {},
    buttonAnimation: {},
    startAnimation: {},
    animateStartScreen() {
      animate(
        '#bearStart',
        {
          transform: ['translate(80svw, 0px)', 'translate(-80svw, 0px)'],
        },
        { duration: 36, easing: 'linear' }
      );
      animate(
        '#leaderboard-wrapper',
        {
          transform: ['translate(80svw, 0px)', 'translate(0px, 0px)'],
        },
        { duration: 18, easing: [0.64, 0.64, 0.89, 0.99] }
      );
    },
    init() {
      this.animateStartScreen();
      this.time = this.levelArray[this.level][4];
      this.updateStates();
      this.currentTime = this.time;
      this.$watch('level', () => {
        this.time = this.levelArray[this.level][4];
        this.timeAnimation = animate(
          '.time',
          { scale: [1, 0.5] },
          { duration: this.time, easing: 'ease-in' }
        );
        this.buttonAnimation = animate(
          '.button.animate',
          { scale: [1, 0.5], opacity: [1, 0] },
          { duration: this.time, easing: 'ease-in' }
        );
        this.updateStates();
        this.currentTime = this.time;
        if (this.level === this.levelArray.length - 1) {
          this.win();
        }
      });
    },
    refresh() {
      animate('.start-screen', { transform: 'translate(0px, 100%)' }, { duration: 0.2 });
      this.startScreen = false;
      this.level = 1;
      this.score = 0.0;
      this.timeUpdate();
      /*
      setTimeout(function () {
      }, 200);
      */
      /*
      if (window.location.pathname == '/leaderboard') {
        window.location.pathname = '/';
      }*/
    },
    cloakBlue() {
      if (!this.startScreen) {
        if (this.showBlue) {
          this.showBlue = false;
          this.addScore();
        } else {
          this.reset();
        }
        this.update();
      }
    },
    cloakYellow() {
      if (!this.startScreen) {
        if (this.showYellow) {
          this.showYellow = false;
          this.addScore();
        } else {
          this.reset();
        }
        this.update();
      }
    },
    cloakGreen() {
      if (!this.startScreen) {
        if (this.showGreen) {
          this.showGreen = false;
          this.addScore();
        } else {
          this.reset();
        }
        this.update();
      }
    },
    cloakRed() {
      if (!this.startScreen) {
        if (this.showRed) {
          this.showRed = false;
          this.addScore();
        } else {
          this.reset();
        }
        this.update();
      }
    },
    update() {
      if (!this.showBlue && !this.showYellow && !this.showGreen && !this.showRed) {
        this.level++;
      }
    },
    timeUpdate() {
      this.timerId = setInterval(() => {
        if (this.currentTime > 0) {
          this.currentTime = Number((this.currentTime - this.updateRate).toFixed(1));
        } else {
          this.lose();
        }
      }, 1000 * this.updateRate);
    },
    updateStates() {
      this.showBlue = this.levelArray[this.level][0];
      this.showYellow = this.levelArray[this.level][1];
      this.showGreen = this.levelArray[this.level][2];
      this.showRed = this.levelArray[this.level][3];
    },
    addScore() {
      this.score = Number((this.score + this.currentTime).toFixed(1));
    },
    divideScore() {
      this.score = Number((this.score / 2).toFixed(1));
    },
    win() {
      this.stopGame();
      this.startMessage = 'You Win';
    },
    lose() {
      this.stopGame();
      this.startMessage = 'You Lose';
    },
    stopGame() {
      clearInterval(this.timerId);
      this.timeAnimation.stop();
      this.buttonAnimation.stop();
      this.level = 0;
      animate('.start-screen', { transform: 'translate(0px, 0%)' }, { duration: 0.2 });
      this.animateStartScreen();
      this.startScreen = true;
      this.showForm = true;
      document.getElementById('score').value = this.score;
    },
    reset() {
      this.showBlue = true;
      this.showYellow = true;
      this.showGreen = true;
      this.showRed = true;
      this.divideScore();
    },
  }));
});

//Barba Init
barba.init();

//Key Listeners
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('startButton')?.click();
  }
  if (e.key === '1') {
    document.getElementById('blue')?.click();
  }
  if (e.key === '2') {
    document.getElementById('yellow')?.click();
  }
  if (e.key === '3') {
    document.getElementById('green')?.click();
  }
  if (e.key === '4') {
    document.getElementById('red')?.click();
  }
});

//fetch from Xano
/*
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const raw = JSON.stringify({
  Name: 'Hansiiii Hansisher',
  Score: '1000000',
  Item_ID: '',
});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
};

fetch('https://x8ki-letl-twmt.n7.xano.io/api:SUP2mHFr/user', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
*/
