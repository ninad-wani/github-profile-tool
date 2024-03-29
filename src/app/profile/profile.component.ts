import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username!: string;
  user: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      this.fetchUserData();
    });
  }

  fetchUserData() {
    this.http
      .get(`https://api.github.com/users/${this.username}`)
      .subscribe((data: any) => {
        this.user = data;
      });
  }

  viewRepos() {
    this.router.navigate(['/repositories', this.username]);
  }
}
