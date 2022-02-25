import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Indicacoes } from 'src/app/model/indicacoes';
import { IndicacoesService } from 'src/app/service/indicacoes.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {

  id : any ;
  indicacao! : Indicacoes;
  public indicacoes : Indicacoes[] = [];

  constructor(
    private indicacaoService : IndicacoesService,
    private route: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.indicacaoService.getIndicacao(this.id).subscribe(res => {
      this.indicacao = res;
      alert('indicação achada: ' + this.indicacao.nome);
      this.bt_cancelar();
    })
  }

  detalhar(){
    this._route.navigate(['/detalhar/{{item.id']);
  }  
  

  bt_cancelar(){
    this._route.navigate(['/']);
  }


}
