import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  data: any = {
    title: 'Opções',
    links: [
      {
        icon: 'fas fa-user-plus',
        label: 'Minhas conexões',
        route: 'requests/connections'
      },
      {
        icon: 'far fa-calendar-minus',
        label: 'Pessoas que sigo',
        route: 'requests/people-i-follow'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
