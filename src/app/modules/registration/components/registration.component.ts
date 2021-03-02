import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../services/registration.service';
import {Router} from '@angular/router';
// import custom validator to validate that password and confirm password fields match
import {MustMatch} from '../validators/must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService, private router: Router) {
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        username: ['', [Validators.minLength(4), Validators.maxLength(32), Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(8), Validators.required, Validators.maxLength(32)]],
        repeatPassword: ['', [Validators.minLength(8), Validators.required, Validators.maxLength(32)]],
      }
      ,
      {
        validator: MustMatch('password', 'repeatPassword')
      }
    );
  }

  postDataForRegistration(): void {
    console.log(this.registrationForm);
    const user = {
      username: this.registrationForm.value.username,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
    };
    this.registrationService.postRequestForRegistration(user).subscribe(value => {
      this.registrationForm.reset();
      this.router.navigate(['']);
    });

  }
}
