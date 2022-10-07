import { Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { UserServiceService } from '@shared/services/userService.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  user: User;

  list: any;

  constructor(private userServiceService: UserServiceService) { }

  ngOnInit() {
    this.loadById();
  }

  loadById(): void {
    this.userServiceService.findById(this.userServiceService.userId).subscribe(res => {
      this.user = res;
      this.setList();
    });
  }

  setList(): void {
    this.list =  [
      {
        icon: 'fas fa-map-marker-alt',
        title: 'Endereço',
        subtitle: `${this.user?.location.city}, ${this.user?.location.state} - ${this.user?.location.country}` 
      },
      {
        icon: 'fas fa-phone',
        title: 'Telefone',
        subtitle: this.user.phone
      },
      {
        icon: 'fas fa-venus-mars',
        title: 'Gênero',
        subtitle: this.user.gender
      }
    ]
  }

}
