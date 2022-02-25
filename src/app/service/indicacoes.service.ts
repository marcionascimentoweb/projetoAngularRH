import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Indicacoes } from '../model/indicacoes';

@Injectable({
  providedIn: 'root'
})
export class IndicacoesService {

  private url = "http://localhost:3000/indicacoes";
  private urlID = "http://localhost:3000/indicacoes/id";

  //Headers
  HttpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  //Listar as Indicações
  getIndicacoes():Observable<Indicacoes[]>{
    return this.http.get<Indicacoes[]>(this.url);
  }

  //Cadastrar Indicações
  postIndicacoes(indicacoes : Indicacoes): Observable<Indicacoes>{
    return this.http.post<Indicacoes>(this.url, indicacoes);
  }

  //Deletar Indicações
  deleteIndicacoes(id : string) : Observable<Indicacoes>{
    const _url = `${this.url}/${id}`;
    return this.http.delete<Indicacoes>(_url);
  }

  //detalhar Indicação
  getIndicacao(id: any): Observable<Indicacoes>{
    const _url = `${this.url}/${id}`;
    return this.http.get<Indicacoes>(_url);

  }
}
