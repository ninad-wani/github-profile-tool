import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  username: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  searchProfile() {
    this.http.get(`https://api.github.com/users/${this.username}`).subscribe(
      (data) => {
        this.router.navigate(['/profile', this.username]);
      },
      (err) => {
        swal.fire("Unable to fetch data!");
      }
    );
  }
}
