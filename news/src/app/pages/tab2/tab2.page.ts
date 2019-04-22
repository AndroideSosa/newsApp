import { Article } from 'src/app/interfaces/interfaces';
import { NewsService } from 'src/app/services/news.service';
import { Component,OnInit,ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports','technology'];
  noticias: Article[] = [];

  constructor( private newsService: NewsService){

  }
 
  ngOnInit(){
   this.segment.value = 'business';
   this.cargarNoticias( this.segment.value);
  }

  cambioCategoria( event ){

    this.noticias = [];

    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias( categoria: string, event? ) {
    
    this.newsService.getTopHeadlinesCategories( categoria)
    .subscribe( resp => {
      console.log(resp);
      this.noticias.push( ...resp.articles );

      if(event){
        event.target.complete();
      }
    });
  }

  loadData(event){
    this.cargarNoticias(this.segment.value, event);
  }


}
