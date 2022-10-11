import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { UserServiceService } from '@shared/services/userService.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  classMenu: string;

  constructor(private touter: Router, public userService: UserServiceService) {
  }
  
  ngOnInit(): void {
    this.classMenu = window.innerWidth > 991 ? 'dropdown-menu-right' : 'dropdown-menu-left';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.classMenu = event.target.innerWidth > 991 ? 'dropdown-menu-right' : 'dropdown-menu-left';
  }

  loguot(): void {
    Swal.fire({
      title: 'Você tem certeza que deseja sair?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim, sair!',
    }).then((result) => {
      if (result.isConfirmed) {
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('user');
        this.userService.setId(null);
        this.touter.navigate(['/login']);
      }
    });
  }

}
