import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //url: string = "https://nanreh1976.herokuapp.com/api";
  url: string = environment.apiUrl;

  user: User = { username: "", password: "", token: "" };

  constructor(private http: HttpClient) {

  } 

  login(username: string, password: string): Observable<any> {  
    this.user.username = username;
    this.user.password = password;
    //return this.http.post(`https://nanreh1976.herokuapp.com/api/login`, this.user);
    return this.http.post(environment.apiUrl, this.user);
	}

  
}
