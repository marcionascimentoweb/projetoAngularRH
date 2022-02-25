import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ListagemComponent } from './view/listagem/listagem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CadastrarComponent } from './view/cadastrar/cadastrar.component';
import { DeletarComponent } from './view/deletar/deletar.component';
import { DetalharComponent } from './view/detalhar/detalhar.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './view/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListagemComponent,
    CadastrarComponent,
    DeletarComponent,
    DetalharComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
