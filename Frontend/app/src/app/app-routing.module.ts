import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthenticationGuard } from './service/authentication.guard';



const routes: Routes = [
  { path: '', component:LandingComponent },
  { path: 'register-product', component: RegisterProductComponent , canActivate:[AuthenticationGuard]},
  { path: 'login', component:LoginpageComponent  },
  { path: 'register', component:RegisterComponent },
  { path: 'landing', component: LandingComponent },
  

  {
    path: 'detail/:id', 
    component: ProductDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
