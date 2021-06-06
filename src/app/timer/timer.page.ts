import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';


const settings = {
  workTime: 0.05,
  shortBreakTime: 0.05,
  longBreakTime: 0.5
};



@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  math = Math;
  workTime;
  shortBreakTime;
  longBreakTime;
  timerRunning = false;
  state = 'Working';
  checkMarks = 0;
  shortBreakSound: HTMLAudioElement;
  longBreakSound: HTMLAudioElement;
  workSound: HTMLAudioElement;
  started = false;

  constructor() { }

  ngOnInit() {
    this.setTimes();
    this.shortBreakSound = new Audio('./assets/sounds/ding-dong.wav');
    this.longBreakSound = new Audio('./assets/sounds/longbreak.wav');
    this.workSound = new Audio('./assets/sounds/uplifting-flute.wav');
  }

  start() {
    this.started = true;
    this.timerRunning = true;
    this.runTimer();
  }

  pause() {
    this.timerRunning = false;
  }

  reset() {
    this.started = false;
    this.timerRunning = false;
    this.checkMarks = 0;
    this.setTimes();
    this.state = 'Working';
  }

  runTimer() {
    const timer = setInterval(() => {
      this.state === 'Working' 
        ? this.workTime -- 
        : this.state === 'Short Break' 
          ? this.shortBreakTime --
          : this.longBreakTime --;

      if(!this.timerRunning) {
        clearInterval(timer);
      }

      if(this.workTime <= 0 || this.shortBreakTime <= 0 || this.longBreakTime <= 0) {
        this.setTimes();
        this.changeState();
      }
    }, 1000);
  }

  private setTimes() {
    this.workTime = settings.workTime * 60;
    this.shortBreakTime = settings.shortBreakTime * 60;
    this.longBreakTime = settings.longBreakTime * 60;
  }

  private changeState() {
    if(this.state === 'Working') {
      this.checkMarks ++;

      if(this.checkMarks >= 4) {
        this.state = 'Long Break';
        this.soundAlarm();
      }
      else {
        this.state = 'Short Break';
        this.soundAlarm();
      }
    }
    else if (this.state === 'Short Break') {
      this.state = 'Working';
      this.soundAlarm();
    }
    else {
      this.timerRunning = false;
      this.state = 'Working';
      this.soundAlarm();
      this.checkMarks = 0;
    }
  }

  private soundAlarm() {
    if (this.state === 'Short Break') {
      this.shortBreakSound.play();
    }
    else if (this.state === 'Long Break') {
      this.longBreakSound.play();
    }
    else {
      this.workSound.play();
    }
  }

}
