import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  username: string = '';

  constructor(private router: Router) {}

  searchProfile() {
    // Navigate to the profile route with the username as a parameter
    this.router.navigate(['/profile', this.username]);
  }
}
