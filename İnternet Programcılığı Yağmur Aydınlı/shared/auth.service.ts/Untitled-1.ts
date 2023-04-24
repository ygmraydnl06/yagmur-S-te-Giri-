import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  registerUser(username: string, password: string) {
    const user = {
      username: username,
      password: password
    };
    localStorage.setItem('user', JSON.stringify(user));
  }

}