import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input() noticia: Article[] = [];
  @Input() indice: number;

  constructor( private inAppBrowser: InAppBrowser) { }

  ngOnInit() {}

  openNew(url){
    console.log(url);
    const browser = this.inAppBrowser.create(url, '_system');
  }

}
