import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared-modules/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from '../login.service';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'trends-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj: any = {};
  iconUrl = '../../../assets/icons/svgIcons/';
  errorMessage: any;
  loginBtn: string = '';
  disabledBtn: boolean = false;
  counter: number = 0;
  popupFlag: boolean = false;

  constructor(    
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    public sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry
  ) {
    this.loginBtn = 'LOG IN';
    // this.iconRegistry.addSvgIcon(
    //   'fyt-user-icon',
    //   this.sanitizer.bypassSecurityTrustResourceUrl(this.iconUrl + 'icon _dgrey-01.svg'));
    // this.iconRegistry.addSvgIcon(
    //   'fyt-lock-icon',
    //   this.sanitizer.bypassSecurityTrustResourceUrl(this.iconUrl + 'icon _dgrey-09.svg'));
   }

  ngOnInit(): void {
  }

  login() {
    this.loginBtn = 'PLEASE WAIT...';
    this.disabledBtn = true;
    this.loginService.loginUser(this.loginObj).subscribe(res => {
      if (res.status == 'Success') {
        this.authService.storeUserData(res.jwt, res.payload);
        // this.popupFlag = true;
        // localStorage.setItem("popupFlag", JSON.stringify(this.popupFlag));
        this.router.navigate(['/trends/members']);
      }
      else {
        if (res.statusCode == '002') {
          this.errorMessage = 'Your username/password is incorrect'
        }
      }
      this.disabledBtn = false;
      this.loginBtn = 'LOG IN';
    });
  }

  forgetpass() {
    this.router.navigate(['forgetpassword']);
  }

}
