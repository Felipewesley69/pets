import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '@core/services/util.service';
import { User } from '@shared/models/user.model';
import { UserServiceService } from '@shared/services/userService.service';
import { finalize } from 'rxjs/operators';
import { ModalUserComponent } from '../modal-user/modal-user.component';

@Component({
  selector: 'app-card-user-profile',
  templateUrl: './card-user-profile.component.html',
  styleUrls: ['./card-user-profile.component.scss']
})
export class CardUserProfileComponent implements OnInit {

  @ViewChild('modal') modal: ModalUserComponent;

  user: User;
  list: any;

  constructor(
    private utilService: UtilService,
    private router: ActivatedRoute,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(res => Boolean(res.userId) && this.userById(res.userId));
  }

  userById(id: string): void {
    this.userService.findById(id)
      .pipe(finalize(() => this.setList()))
      .subscribe(res => this.user = res);
  }

  openModal = (id?: string): void => this.modal.open(id);

  owner = (): boolean => {
    const user = this.utilService.getUserSessionStorage();
    return this.utilService.owner(user?.id, this.user?.id);
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
