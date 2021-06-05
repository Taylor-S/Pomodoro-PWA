import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  workTime = 25;
  shortBreakTime = 5;
  longBreakTime = 15;

  constructor() { }

  ngOnInit() {
  }

}
