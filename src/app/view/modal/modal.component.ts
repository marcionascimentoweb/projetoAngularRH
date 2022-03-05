import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public confirma = '../../../assets/img/confirma.png';

  constructor(
    private route: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit(): void {
  }

  fechar(){
    this._route.navigate(['/']);
  }

}
