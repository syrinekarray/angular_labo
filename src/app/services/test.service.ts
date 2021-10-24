import { CreateResultat } from './../resultat/resultat';
import { TestCreate } from './../tests/test';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const URL = environment.URL;
@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  getTestsByUserId(id: number) {
    return this.http.get(URL + 'test/user/' + id);
  }

  getResultbyTestId(id: number) {
    return this.http.get(URL + 'resultat/test/' + id);
  }
  createTest(createTest: TestCreate) {
    return this.http.post(URL + 'test', createTest);
  }

  getTestsWithoutResult() {
    return this.http.get(URL + 'resultat/test');
  }
  createResult(resultat: CreateResultat) {
    return this.http.post(URL + 'resultat', resultat);
  }
}
