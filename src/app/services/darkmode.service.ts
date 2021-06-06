import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

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
}
