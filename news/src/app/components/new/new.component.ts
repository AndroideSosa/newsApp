import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input() noticia: Article[] = [];
  @Input() indice: number;

  constructor(  private inAppBrowser: InAppBrowser,
                private actionSheetCtrl: ActionSheetController,
                private socialSharing: SocialSharing) { }

  ngOnInit() {}

  openNew(url){
    console.log(url);
    const browser = this.inAppBrowser.create(url, '_system');
  }

  async lanzarMenu(noticia){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
        text: 'Share',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          this.socialSharing.share(
            noticia.title,
            noticia.source.name,
            '',
            noticia.url
          );
        }
      },
      {
        text: 'Favorite',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        cssClass: 'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  }

