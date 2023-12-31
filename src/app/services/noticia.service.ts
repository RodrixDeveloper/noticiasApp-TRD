import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient) { }

     getNoticias(parametros:any):Observable<any>{
      const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=0ab0852289e241d0a49b6ae6d1520004'
      console.log(URL);
      
      return this.http.get(URL);
  }
}
