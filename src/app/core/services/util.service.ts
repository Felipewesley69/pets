import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { User } from '@shared/models/user.model';

@Injectable()
export class UtilService {

  constructor(private location: Location) { }

  backPage = () => this.location.back();

  getUserSessionStorage(): User {
    const user = window.sessionStorage.getItem('user');
    return JSON.parse(user);
  }

  owner = (id1: string, id2: string): boolean => id1 == id2;

}
