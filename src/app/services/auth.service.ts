import { HttpClient } from '@angular/common/http';
import { LoginRequest } from './../users/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
const URL = environment.URL;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(user: LoginRequest) {
    return this.http.post(URL + 'auth/login', user).subscribe((data) => {
      localStorage.setItem('token', JSON.stringify(data));
      this.currentUser.next(data);
      this.router.navigate(['/']);
    });
  }

  getUser() {
    return this.currentUser.value;
  }

  loadUser() {
    const res = localStorage.getItem('token');
    {
      if (res) {
        this.currentUser.next(JSON.parse(res));
      } else {
        this.currentUser.next(false);
      }
    }
  }
}
