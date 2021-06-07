import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private settingsService: SettingsService, private platform: Platform) {
    this.platform.ready().then(() => {
      this.settingsService.updateDarkModeIfEnabled();
    });
  }
}
