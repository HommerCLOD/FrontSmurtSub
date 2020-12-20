import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../../registration/services/registration.service';
import {Router} from '@angular/router';
import {MustMatch} from '../../registration/validators/must-match.validator';
import {LoginService} from '../services/login.service';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  error: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService,
              private appService: AppService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32),
          // Думаю поміняти патрн
          // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]]
      }
    );
  }


  navigate(): void {
    console.log(this.router);
    this.router.navigate(['/reset-password']);
  }

  // Here Need Rename
  login(): void {
    console.log('Перевірка логіна');
    // console.log(this.loginForm.value);
    const user = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    // Test
    this.loginService.postRequestForLogin(user).subscribe(value => {
        this.loginForm.reset();
        this.router.navigate(['']);
      },
      error => {
        this.error = error.message;
        console.log(error);
      }
    );

    // В сервісах нехватає АПІ для поста
    // this.loginService.postRequestForLogin(this.loginForm.value).subscribe(value => {
    //     // const decodedAccessToken = this.appService.getDecodedAccessToken(value.accessToken);
    //     // localStorage.setItem('userId', decodedAccessToken.sub);
    //     //
    //     // localStorage.setItem('Token', value.tokenType + ' ' + value.accessToken);
    //     this.router.navigate(['']);
    //     this.appService.setUserIn(true);
    //   },
    //   error => {
    //     this.error = error.message;
    //     console.log(error);
    //   }
    //   );
  }
}