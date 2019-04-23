import { Article } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor( private storage: Storage,
               public toastController: ToastController ) { 

    this.cargarFavoritos();

  }

  async presentToast( message: string ) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  guardarNoticia( noticia: Article ) {

    const existe = this.noticias.find( noti => noti.title === noticia.title);
    
    if( !existe ){
      this.noticias.unshift( noticia );
      this.storage.set('fav', this.noticias );
    }

    this.presentToast('Added to Favorites');

  }

  async cargarFavoritos(){

    const favoritos = await this.storage.get('fav');

    if( favoritos ){
      this.noticias = favoritos;
    }
   
  }

  borrarNoticia( noticia: Article) {

    this.noticias = this.noticias.filter( noti => noti.title !== noticia.title);
    this.storage.set('fav', this.noticias );

    this.presentToast('Delete from Favorites');

  }

}
