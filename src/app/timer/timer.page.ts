import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  math = Math;
  focusTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  seconds = 0;
  timerProgressChunk: number;
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
    this.updateTimerProgressChunk();
    this.runTimer();
  }

  pause() {
    this.timerRunning = false;
  }

  reset() {
    this.started = false;
    this.timerRunning = false;
    this.checkMarks = 0;
    this.seconds = 0;
    this.setTimes();
    this.state = 'Focus Time';
  }

  runTimer() {
    const timer = setInterval(() => {
      this.seconds ++;

      switch (this.state)
      {
        case 'Focus Time':
          this.focusTime --;
          break;
        case 'Short Break':
          this.shortBreakTime --;
          break;
        default:
          this.longBreakTime --;
      }

      if(!this.timerRunning) {
        clearInterval(timer);
      }

      if(this.focusTime <= 0 || this.shortBreakTime <= 0 || this.longBreakTime <= 0) {
        this.setTimes();
        this.changeState();
        this.seconds = 0;
      }
    }, 1000);
  }

  currentCountDownTime() {
    return this.state === 'Focus Time' 
      ? this.focusTime : this.state === 'Short Break' 
        ? this.shortBreakTime : this.longBreakTime;
  }

  progressStyles() {
    return {
      'stroke-dashoffset': this.seconds * this.timerProgressChunk * -1,
      'stroke': this.state === 'Focus Time' ? '#00FF00' : '#ff9500'
    };
  }

  private async setTimes() {
    await this.settingsService.loadDurationSettings();
    this.focusTime = this.convertToSeconds(this.settingsService.focusDuration);
    this.shortBreakTime = this.convertToSeconds(this.settingsService.shortDuration);
    this.longBreakTime = this.convertToSeconds(this.settingsService.longDuration);
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

    this.updateTimerProgressChunk();
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

  private convertToSeconds(time: number) {
    return time * 60;
  }

  private updateTimerProgressChunk() {
    const currentTime = this.state === 'Focus Time' 
      ? this.settingsService.focusDuration : this.state === 'Short Break' 
        ? this.settingsService.shortDuration : this.settingsService.longDuration;

    this.timerProgressChunk = 870 / this.convertToSeconds(currentTime);
  }

}
