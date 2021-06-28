import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogged: Boolean;
  faSearch = faSearch;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem("ACCESS_TOKEN")){
      this.userLogged = true;
    } else {
      this.userLogged = false;
    }
  }

  search(value: string) {
    this.router.navigate(['/search/' + value]);
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
