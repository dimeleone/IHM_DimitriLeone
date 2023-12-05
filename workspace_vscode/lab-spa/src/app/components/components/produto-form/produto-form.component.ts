import { OnInit } from '@angular/core';
import { IProduto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

export class ProdutoFormComponent implements OnInit{

  //inputs
  descricao: string = '';
  preco: number = 0;

  formulario !: FormGroup;

  constructor(
    private ProdutoService: ProdutoService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      descricao: ['', Validators.compose ( [Validators.required, Validators.minLenght(5)])],
      preco: ['', Validators.required]
    });
  }


  onCadastrar(){

    if (this.formulario.invalid){
      this.alertService.error('Formulário inválido', 'Existem campos pendentes');
      return;
    }

    let produto: IProduto = {descricao: this.descricao, preco: this.preco};

    this.produtoService.create(produto).subscribe({
      next: (data) => {
        produto = data;
        const tit = 'Sucesso';
        const msg = 'Produto salvo com sucesso';
        this.alertService.sucesso(tit, msg);
        this.router.navigate(['/produtotabela']);
      },
      error: (e) => {
        const tit = 'Erro';
        const msg = e.message;
        this.alertService.error(tit, msg);
      }
    });
  }


}
