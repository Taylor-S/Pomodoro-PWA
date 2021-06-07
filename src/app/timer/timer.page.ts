import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';


const settings = {
  focusTime: 0.5,
  shortBreakTime: 0.5,
  longBreakTime: 0.5
};



@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  math = Math;
  focusTime;
  shortBreakTime;
  longBreakTime;
  timerRunning = false;
  state = 'Focus Time';
  checkMarks = 0;
  shortBreakSound: HTMLAudioElement;
  longBreakSound: HTMLAudioElement;
  workSound: HTMLAudioElement;
  started = false;
  loadedDurations = false;

  constructor(private settingsService: SettingsService) { }

  async ngOnInit() {
    await this.setTimes();
    this.loadedDurations = true;
    this.shortBreakSound = new Audio('./assets/sounds/ding-dong.wav');
    this.longBreakSound = new Audio('./assets/sounds/longbreak.wav');
    this.workSound = new Audio('./assets/sounds/uplifting-flute.wav');
  }

  ionViewWillEnter() {
    if(!this.started)
    {
      this.setTimes();
    }
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
    this.state = 'Focus Time';
  }

  runTimer() {
    const timer = setInterval(() => {
      this.state === 'Focus Time'
        ? this.focusTime --
        : this.state === 'Short Break'
          ? this.shortBreakTime --
          : this.longBreakTime --;

      if(!this.timerRunning) {
        clearInterval(timer);
      }

      if(this.focusTime <= 0 || this.shortBreakTime <= 0 || this.longBreakTime <= 0) {
        this.setTimes();
        this.changeState();
      }
    }, 1000);
  }

  private async setTimes() {
    await this.settingsService.loadDurationSettings();
    this.focusTime = this.settingsService.focusDuration * 60;
    this.shortBreakTime = this.settingsService.shortDuration * 60;
    this.longBreakTime = this.settingsService.longDuration * 60;
  }

  private changeState() {
    if(this.state === 'Focus Time') {
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
      this.state = 'Focus Time';
      this.soundAlarm();
    }
    else {
      this.timerRunning = false;
      this.state = 'Focus Time';
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
