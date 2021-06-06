import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export enum DurationType {
  focus = 'focusDuration',
  short = 'shortDuration',
  long = 'longDuration'
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  durationType = DurationType;
  focusDuration: number;
  shortDuration: number;
  longDuration: number;

  constructor(private storageService: StorageService) { }

  async updateDarkModeIfEnabled() {
    const darkModeEnabled = await this.checkDarkModeEnabled();
    if(darkModeEnabled) {
      document.body.classList.toggle('dark', darkModeEnabled);
    }
  }

  async checkDarkModeEnabled(): Promise<boolean> {
    const enabled = await this.storageService.get('darkModeToggled');
    return enabled != null ? enabled : false;
  }

  async toggleDarkMode(ev) {
    document.body.classList.toggle('dark', ev.detail.checked);
    await this.storageService.set('darkModeToggled', ev.detail.checked);
  }

  async saveDuration(type: DurationType) {
    const duration = type === this.durationType.focus
      ? this.focusDuration : type === this.durationType.short
        ? this.shortDuration : this.longDuration;

    await this.storageService.set(type, duration);
  }

  async loadDurationSettings() {
    const focus = await this.storageService.get(this.durationType.focus);
    this.focusDuration = isNaN(focus) || focus === null ? 25 : focus;

    const short = await this.storageService.get(this.durationType.short);
    this.shortDuration = isNaN(short) || short === null ? 5 : short;

    const long = await this.storageService.get(this.durationType.long);
    this.longDuration = isNaN(long) || long === null ? 15 : long;
  }
}
