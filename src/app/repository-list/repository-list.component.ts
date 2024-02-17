import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent implements OnInit {
  username!: string;
  repositories: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      this.fetchRepositories();
    });
  }

  fetchRepositories() {
    const page: number = this.currentPage;
    const perPage: number = this.itemsPerPage;
    const url: string = `https://api.github.com/users/${this.username}/repos?page=${page}&per_page=${perPage}`;

    this.http.get(url).subscribe((data: any) => {
      this.repositories = data;
    });
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.fetchRepositories();
  }
}
