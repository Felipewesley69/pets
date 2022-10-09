import { Component, OnInit } from '@angular/core';
import { UtilService } from '@core/services/util.service';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  user: User;
  list: any;

  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(): void {
    this.user = this.utilService.getUserSessionStorage();
    this.setList();
  }

  setList(): void {
    this.list = [
      {
        icon: 'fas fa-map-marker-alt',
        title: 'Endereço',
        subtitle: `${this.user?.location?.city}, ${this.user?.location?.state}`
      },
      {
        icon: 'fas fa-phone',
        title: 'Telefone',
        subtitle: this.user?.phone
      },
      {
        icon: 'fas fa-venus-mars',
        title: 'Gênero',
        subtitle: this.user?.gender
      }
    ]
  }

}
