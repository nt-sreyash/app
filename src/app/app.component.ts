import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(public appService: AppService, private router: Router) {

  }

  ngOnInit() {
    // if the user is logged in redirect to documents page
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/student']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
