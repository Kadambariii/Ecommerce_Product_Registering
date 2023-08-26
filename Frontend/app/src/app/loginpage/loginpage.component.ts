
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
 

  email: string ="";
  password: string ="";


  constructor(private router: Router,private http: HttpClient,private userService:UserService) {}
 


  Login(data:any) {

    console.log(data.value)
    this.userService.userLogin(data.value.email,data.value.password).subscribe(

      response =>{
        console.log(response)
        if(response.status=='success')
        {
          alert('Login successfull');
          sessionStorage.setItem("status","true");
          this.router.navigate(['register-product']);
        }
        else{
          alert('Login failed');
          this.router.navigate(['login']);
        }
      },

      error =>{
        alert('email or password incorrect')
      }
      );
 
        
   
    }

} 