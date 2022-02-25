import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './view/cadastrar/cadastrar.component';
import { DeletarComponent } from './view/deletar/deletar.component';
import { DetalharComponent } from './view/detalhar/detalhar.component';
import { HeaderComponent } from './view/header/header.component';
import { ListagemComponent } from './view/listagem/listagem.component';

const routes: Routes = [
  {path: '', component: ListagemComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'deletar/:id', component: DeletarComponent},
  {path: 'detalhar/:id', component: DetalharComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
