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

  id : any ;
  public indicacao! : Indicacoes;

  constructor(
    private indicacaoService : IndicacoesService,
    private route: ActivatedRoute,
    private _route: Router
  ) { }


  ngOnInit(): void {
    this.detalhar();
  }

  detalhar(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.indicacaoService.getIndicacaoById(this.id).subscribe(res => {
      this.indicacao = res;
      console.log(this.indicacao);
    })
  }

  deletar(){
    this.indicacaoService.deleteIndicacoes(this.id).subscribe(res => {
      alert('Removido com sucesso!');
      this._route.navigate(['/']);
    })
  } 

  cancelar(){
    this._route.navigate(['/']);
  }

  bt_Voltar(){
    this._route.navigate(['/']);
  }

}
