import { Component } from '@angular/core';
import { GitHubService } from './github/github.service';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" routerLink="">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="GitHub">GitHub</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
    `,
  providers: [GitHubService]
})

export class AppComponent {
  searchControl = new FormControl();
  isLoading = false;

  users = [];

  constructor(private _githubService: GitHubService){

  }

  ngOnInit(){
    this.searchControl.valueChanges
    .pipe(filter(text => text.length >= 3),
      debounceTime(400),
      distinctUntilChanged())
    .subscribe(value => {
      this.isLoading = true;
      this._githubService.getGitHubData(value)
        .subscribe(data => {
          this.isLoading = false;
          this.users = data.items;
          // console.log(data.items);
        });
    });
  }
}
