import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

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
