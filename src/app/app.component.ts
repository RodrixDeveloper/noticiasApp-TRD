import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string = 'noticiasApp';
  listNoticias:any []= []
  loading:boolean = false;

  constructor(private _noticiaService:NoticiaService){}

  buscarNoticias(parametros: any) {
    console.log("PADRE");
    console.log(parametros);
    this.loading=true;
    this.listNoticias=[];
    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(data=>{
        this.loading=false;
        console.log(data.articles);
        this.listNoticias = data.articles
      }, error=>{
        console.log(error);
        this.loading=false
      })
    }, 1500);
  }
}
