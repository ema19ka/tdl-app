import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(public userService: AuthService, private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.minLength(3), Validators.email] ],
      password: ['',[Validators.required, Validators.minLength(8)] ],
    }) ;
  }

  onSubmit(){
    console.log('test');
    const {username, email, password } = this.loginForm.value;
    this.submitted = true;
    if(!this.loginForm.valid) {
      console.log('All fields are required');
      return false;
    } else {
      console.log(this.loginForm.value);
      try {
        this.userService.login(username,email,password).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/home']);
        }
      );
      } catch(err) {
        console.log(err, 'err');
      }
    }
  }

}
