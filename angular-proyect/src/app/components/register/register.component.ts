import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

/**
 * @param  {AuthService} privateauthService
 * @param  {Router} privaterouter
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  /**
   * @param  {} form
   * @returns void
   */
  onRegister(form): void {
    this.authService.register(form.value).subscribe(res => {
      window.location.href="/"
    });
  }
}
