import { RespuestaTopHeadlines } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders ({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  headlinesPage = 0;

  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>( query: string){

    query = apiUrl+ query

    return this.http.get<T>(query, { headers} );
  }

  getTopHeadLines(){

    this.headlinesPage  ++;

    return this.ejecutarQuery<RespuestaTopHeadlines>('/top-headlines?country=us&page='+ this.headlinesPage);
    //return this.http.get<RespuestaTopHeadlines>('/everything?q=bitcoin&from=2019-03-17&sortBy=publishedAt&apiKey=cff3ccbddded42a399a3ab08996a90af');
  }

  getTopHeadlinesCategories( categoria: string){
    console.log(categoria);
    return this.ejecutarQuery<RespuestaTopHeadlines>('/top-headlines?country=us&category='+categoria);
    //return this.http.get('https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=cff3ccbddded42a399a3ab08996a90af');
  }
}
