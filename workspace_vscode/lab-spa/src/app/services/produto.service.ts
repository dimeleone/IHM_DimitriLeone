import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from 'src/app/models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly URI_PRODUTOS = "assets/exemplo-de-produtos.json";
  //private readonly URI_PRODUTOS = "http://localhost:8081/produto";

  constructor(private http: HttpClient) { }

  public findAll(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URI_PRODUTOS);
  }
}
