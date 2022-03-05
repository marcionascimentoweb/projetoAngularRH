import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Indicacoes } from 'src/app/model/indicacoes';
import { IndicacoesService } from 'src/app/service/indicacoes.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  public confirma = '../../../assets/img/confirma.png';
  public indicacoesForm! : FormGroup;

  public indicacao! : Indicacoes; 
  public indicacoes : Indicacoes[] | undefined;
  mostrar: boolean = false;

  constructor(
    private fb: FormBuilder,
    private indicacoesService : IndicacoesService,
    private _route : Router ) {
      this.indicacao = new Indicacoes();
     }

  ngOnInit(): void {
    this.indicacoesForm = this.fb.group({
      nome : ['', [Validators.required]],
      corretor : ['', [Validators.required]],
      status : ['', [Validators.required]],
      telefone : ['', [Validators.required]],
      empresa : ['', ],
      email : ['', [Validators.required]],
      id : ['', [Validators.required]]
  });

}

cadastrar(){
  this.indicacoesService.postIndicacoes(this.indicacoesForm!.value).subscribe(data => {
    this.indicacao = new Indicacoes();
    this.toggle();
  })
}

toggle(){
  this.mostrar = !this.mostrar;
}

bt_cancelar(){
  this._route.navigate(['/']);
}

bt_Voltar(){
  this._route.navigate(['/']);
}

fechar(){
  this._route.navigate(['/']);
}

}
