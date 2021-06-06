import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { DarkModeService } from '../services/darkmode.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkModeToggled = false;

  constructor(private storageService: StorageService, private darkModeService: DarkModeService) { }

  async ngOnInit() {
    this.darkModeToggled = await this.darkModeService.checkDarkModeEnabled();
  }


  async toggleDarkMode(ev) {
    document.body.classList.toggle('dark', ev.detail.checked);
    await this.storageService.set('darkModeToggled', ev.detail.checked);
  }

}
