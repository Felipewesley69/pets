import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.scss']
})
export class CardUsuarioComponent implements OnInit {

  lista = [
    {
      icon: 'fas fa-share-alt',
      title: 'Conexões',
      subtitle: '1586'
    },
    {
      icon: 'far fa-chart-bar',
      title: 'Estartíticas',
      subtitle: 'Lorem ipsum dollor'
    },
    {
      icon: 'far fa-bookmark',
      title: 'Ítens salvos',
      subtitle: 'Lorem ipsum dollor'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
