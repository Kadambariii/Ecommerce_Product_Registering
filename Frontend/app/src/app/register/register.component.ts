
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string ="";
  email: string ="";
  password: string ="";
  gender:string="";
  city:string="";
  adress:string="";
  phone:Number;
  pin:number;
  country:string="";




  constructor(private http: HttpClient, private userService:UserService, private route:Router )
  {

  }
  save(data:any)
  {
    console.log(data.value)
  
  
    let bodyData = {
      "username" : data.value.name,
      "email" : data.value.email,
      "password" : data.value.password,
      "gender":data.value.gender,
      "city":data.value.city,
      "country":data.value.country,
      "phone":data.value.phone,
      "pin":data.value.pin,
      "address":data.value.address
    };

    this.userService.userRegistration(bodyData).subscribe(
      response =>{
        console.log(response);
        alert('Registration successfull');
        this.route.navigate(['login']);
      }
    );
   

  }


}
