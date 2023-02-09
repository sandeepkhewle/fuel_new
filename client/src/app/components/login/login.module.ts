import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers:[
    AuthService,
    LoginService
  ]
})
export class LoginModule { }
