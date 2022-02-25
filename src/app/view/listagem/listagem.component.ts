import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Indicacoes } from 'src/app/model/indicacoes';
import { IndicacoesService } from 'src/app/service/indicacoes.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  public deletar = '../../../assets/img/lixeira.png';
  public detalhar = '../../../assets/img/detalhes.png';
  
  title = "Teste RH";

  /*public indicacoes : Indicacoes[] | undefined;*/
  public indicacoes : Indicacoes[] = [];
  public paginaAtual = 1;

  constructor(private indicacoesService : IndicacoesService, 
    private router : ActivatedRoute,
    private _route : Router
    ) { }

  ngOnInit(): void {
    this.listarIndicacoes();
  }

  public listarIndicacoes(){
    this.indicacoesService.getIndicacoes().subscribe(data => {
      this.indicacoes = data;
    
    })
  }

  adicionar_Indicacoes(){
    this._route.navigate(['/cadastrar']);
  }


}
