import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { DurationType, SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkModeToggled = false;

  constructor(private storageService: StorageService, public settingsService: SettingsService) { }

  async ngOnInit() {
    this.darkModeToggled = await this.settingsService.checkDarkModeEnabled();
  }


  toggleDarkMode(ev) {
    this.settingsService.toggleDarkMode(ev);
  }

  updateDuration(durationType: DurationType) {
    this.settingsService.saveDuration(durationType);
  }

}
