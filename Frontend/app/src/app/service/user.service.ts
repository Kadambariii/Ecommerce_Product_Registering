import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }


  userRegistration(user:any):Observable<any>
  {
    console.log(user);
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(user);
    return this.http.post(this.baseUrl+"/user/signup",body,{'headers':headers});
  }

  userLogin(email:any, password:any):Observable<any>
  {
    console.log(email)
    console.log(password)
    //let params=new HttpParams();
    //params.append('email',email);
    //params.append('password',password);
    return this.http.get(this.baseUrl+"/user/signin?"+"email="+email+"&"+"password="+password);
  }


}
