import { Component,OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor( private noticiasService: NewsService) {

  }

  ngOnInit(){
    this.noticiasService.getTopHeadLines()
    .subscribe( resp => {
      console.log('noticias',resp);
    })
  }

}