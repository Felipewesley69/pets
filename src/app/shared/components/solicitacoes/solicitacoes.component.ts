import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {

  lista = [
    {
      icon: 'far fa-user',
      title: 'Pessoa Lorem Ipsum',
      subtitle: 'Lorem ipsum dollor'
    },
    {
      icon: 'far fa-user',
      title: 'Pessoa Lorem Ipsum',
      subtitle: 'Lorem ipsum dollor'
    },
    {
      icon: 'far fa-user',
      title: 'Pessoa Lorem Ipsum',
      subtitle: 'Lorem ipsum dollor'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
