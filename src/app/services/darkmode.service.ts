import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor(private storageService: StorageService) { }

  async updateDarkModeIfEnabled() {
    const darkModeEnabled = await this.checkDarkModeEnabled();
    console.log(darkModeEnabled);
    if(darkModeEnabled) {
      document.body.classList.toggle('dark', true);
      console.log(document.body.classList);
    }
  }

  async checkDarkModeEnabled(): Promise<boolean> {
    const enabled =  this.storageService.get('darkModeToggled');
    return enabled;
  }
}
