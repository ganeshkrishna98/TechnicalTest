import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'app/services/authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    
    if(this.router.url.includes('logout')){
      localStorage.clear();
      this.authService.userLoggedIn();
      location.replace('/login')
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response) => {
          localStorage.setItem('token',response.token);
          localStorage.setItem('accountType', response.accountType);
          localStorage.setItem('userId', response.userId);
          this.authService.userLoggedIn();
          this.router.navigate(['dashboard']);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }
  redirectToRegister() {
    this.router.navigate(['/register'])
  }
}
