import { RespuestaTopHeadlines } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-16&sortBy=publishedAt&apiKey=2fb898c315b04ad5b47806f1d021a304');
  }
}
