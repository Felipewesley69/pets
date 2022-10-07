import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '@shared/services/userService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private touter: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  loguot(): void {
    window.sessionStorage.removeItem('token');
    this.userService.setId(null);
    this.touter.navigate(['/login']);
  }

}
