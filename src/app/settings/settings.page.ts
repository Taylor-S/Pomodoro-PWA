import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { DarkModeService } from '../services/darkmode.service';

export enum DurationType {
  focus = 'focusDuration',
  short = 'shortDuration',
  long = 'longDuration'
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkModeToggled = false;
  focusDuration = 25;
  shortDuration = 5;
  longDuration = 15;
  durationType = DurationType;

  constructor(private storageService: StorageService, private darkModeService: DarkModeService) { }

  async ngOnInit() {
    this.darkModeToggled = await this.darkModeService.checkDarkModeEnabled();
    this.loadDurationSettings();
  }


  async toggleDarkMode(ev) {
    document.body.classList.toggle('dark', ev.detail.checked);
    await this.storageService.set('darkModeToggled', ev.detail.checked);
  }

  async saveDuration(durationType: DurationType, duration: number) {
    await this.storageService.set(durationType, duration);
  }

  async loadDurationSettings() {
    const focus = await this.storageService.get(this.durationType.focus);
    this.focusDuration = isNaN(focus) ? 25 : focus;

    const short = await this.storageService.get(this.durationType.short);
    this.shortDuration = isNaN(short) ? 5 : short;

    const long = await this.storageService.get(this.durationType.long);
    this.longDuration = isNaN(long) ? 15 : long;

  }

}
