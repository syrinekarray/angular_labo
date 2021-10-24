import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCreateDto } from '../users/user';
import { environment } from 'src/environments/environment';
const URL = environment.URL;

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: UserCreateDto) {
    return this.http.post(URL + 'auth/signup', user);
  }

  getAllUsers() {
    return this.http.get(URL + 'user/all');
  }

  delete(id: number) {
    return this.http.delete(URL + 'user/' + id);
  }
}
