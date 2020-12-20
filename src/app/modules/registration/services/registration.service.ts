import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserRegistrationModel} from '../models/UserRegistration.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }


  postRequestForRegistration(user: UserRegistrationModel): Observable<UserRegistrationModel> {
       return this.http
      .post<UserRegistrationModel>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`, user);
  }
}
