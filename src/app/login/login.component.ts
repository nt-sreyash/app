import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "../app.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.html'
})

export class LoginComponent implements OnInit {

    username: string;
    password: string;

    constructor(public appService: AppService, private router: Router) {
        this.username = '';
        this.password = '';
    }

    ngOnInit() {
        // if the user is logged in redirect to documents page
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/user/document']);
        }
    }

    authenticateUser() {
        this.appService.logout();
        this.appService.loginUser(this.username, this.password)
            .subscribe(
                data => {
                    let returnToken = data as any;
                    if (returnToken.accessToken) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        let loggedInUser = {
                            email: this.username,
                            token: returnToken.accessToken
                        }
                        localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
                    }
                    this.router.navigate(['/student']);
                },
                error => {
                    alert('Wrong Login details');
                });
    }

}