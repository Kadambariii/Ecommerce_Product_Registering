import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }



  logout()
  {
    if(confirm('Are You sure to logout?'))
    {
    sessionStorage.clear();
    this.router.navigate(['login']);
    }
    
  }
}
