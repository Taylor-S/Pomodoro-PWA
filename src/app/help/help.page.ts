import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  helpItems = [
    'What is the Pomodoro technique?',
    'What makes the Pomodoro technique so effective?',
    'How to use the Pomodoro technique?',
    'Variations'
  ];

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal(helpItem: number) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'help-modal',
      componentProps: {
        helpItem,
        modalHeading: this.helpItems[helpItem]
      }
    });
    return await modal.present();
  }

}
