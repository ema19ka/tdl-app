import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(public userService: AuthService, private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.minLength(3), Validators.email] ],
      password: ['',[Validators.required, Validators.minLength(8)] ],
    }) ;
  }

  onSubmit(){
    console.log('test');
    const {username, email, password } = this.registerForm.value;
    this.submitted = true;
    if(!this.registerForm.valid) {
      console.log('All fields are required');
      return false;
    } else {
      console.log(this.registerForm.value);
      this.userService.register(username,email,password).subscribe(
        data => {
          this.userService.login(username,email,password).then(
            resp => {
              localStorage.setItem('user', resp.data.id);
              this.router.navigate(['/home']);
            }
          );
        }
      );
    }
  }

}
