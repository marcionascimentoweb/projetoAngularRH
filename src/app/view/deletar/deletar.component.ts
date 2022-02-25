import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Indicacoes } from 'src/app/model/indicacoes';
import { IndicacoesService } from 'src/app/service/indicacoes.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  public id!: string ;
  indicacao! : Indicacoes;

  constructor(
    private indicacaoService : IndicacoesService,
    private route: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit(): void {
 
  }

  deletar() {
    this.indicacaoService.deleteIndicacoes(this.id).subscribe(res => {
      alert('Removido com Sucesso!');
      this._route.navigate(['/']);
    })
  }


  cancelar(){
    this._route.navigate(['/']);
  }

}
