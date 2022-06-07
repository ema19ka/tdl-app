import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    public userService: AuthService, private router: Router, public formBuilder: FormBuilder, public toastController: ToastController) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(3)]],
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
    const {username, email, password } = this.registerForm.value;
    this.submitted = true;
    if(!this.registerForm.valid) {
      this.presentToast('All fields required');
      return false;
    } else {
      this.userService.register(username,email,password).then(
        data => {
          this.userService.login(email,password).then(
            resp => {
              localStorage.setItem('user', resp.data.id);
              this.router.navigate(['/home']).then(() => window.location.reload());
            }
          );
        }, data => {
          this.presentToast(data);
        }
      );
    }
  }

}
