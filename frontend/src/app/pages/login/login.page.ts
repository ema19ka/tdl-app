import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    public userService: AuthService, private router: Router, public formBuilder: FormBuilder, public toastController: ToastController
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.minLength(3), Validators.email] ],
      password: ['',[Validators.required, Validators.minLength(8)] ],
    }) ;
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  onSubmit(){
    const {email, password } = this.loginForm.value;
    this.submitted = true;
    if(!this.loginForm.valid) {
      this.presentToast('All fields are required');
      return false;
    } else {
      try {
        this.userService.login(email,password).then(
        resp => {
          localStorage.setItem('user', resp.data.id);
          this.router.navigate(['/home']);
        }
      ).catch();
      } catch(err) {
        this.presentToast(err);
        console.log(err, 'err');
      }
    }
  }

}
