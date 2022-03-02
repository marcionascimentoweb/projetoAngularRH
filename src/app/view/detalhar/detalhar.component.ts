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

  public editar = '../../../assets/img/editar.png';
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
  
  bt_Voltar(){
    this._route.navigate(['/']);
  }


}
