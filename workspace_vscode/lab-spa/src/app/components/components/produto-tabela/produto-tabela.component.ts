import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.scss']
})
export class ProdutoTabelaComponent implements OnInit {

  produtos: IProduto[] = [];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe({
      next: (dados) => this.produtos = dados,
      error: (e) => console.log
    });

  }

}
