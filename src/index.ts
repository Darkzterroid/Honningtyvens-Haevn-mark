alert('Program Compiled Successfully inside mitchs kode');
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
    startScreen: true,
    startButtonText: 'Start',
    startMessage: 'Welcome to The Game',
    timerId: 0,
    timeAnimation: {},
    buttonAnimation: {},
    init() {
      this.time = this.levelArray[this.level][4];
      this.updateStates();
      this.currentTime = this.time;
      this.$watch('level', () => {
        this.time = this.levelArray[this.level][4];
        this.gameRunning = true;
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
      this.level = 1;
      this.score = 0.0;
      this.startScreen = false;
      this.timeUpdate();
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
    subtractScore() {
      this.score = Number((this.score / 2).toFixed(1));
    },
    win() {
      clearInterval(this.timerId);
      this.stopAnimation();
      this.level = 0;
      this.startScreen = true;
      this.startMessage = 'You Win';
    },
    lose() {
      clearInterval(this.timerId);
      this.stopAnimation();
      this.level = 0;
      this.startScreen = true;
      this.startMessage = 'You Lose';
    },
    /*
    continue() {
      clearInterval(this.timerId);
      this.stopAnimation();
      this.startScreen = true;
      this.startMessage = 'Difficulty is:';
    },
    */
    reset() {
      this.showBlue = true;
      this.showYellow = true;
      this.showGreen = true;
      this.showRed = true;
      this.subtractScore();
    },
    stopAnimation() {
      this.timeAnimation.stop();
      this.buttonAnimation.stop();
    },
  }));
});
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
