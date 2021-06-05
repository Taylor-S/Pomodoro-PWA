import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DarkModeService } from './services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private darkModeService: DarkModeService, private platform: Platform) {
    this.platform.ready().then(() => {
      this.darkModeService.updateDarkModeIfEnabled();
    });
  }
}
