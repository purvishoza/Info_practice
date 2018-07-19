import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
//import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: []
})
export class LoginComponent implements OnInit {
  logon;

  constructor(){}//private userService:UserService, private route: Router) { }

  ngOnInit() {
    this.logon = {
        email:'',
        password:''
    };
  }

/*  login(){
    this.userService.login(this.logon).subscribe(
      response => {
        this.route.navigate(['/raci']);
      },
      error => {
        console.log('error', error);
      }
    );
    this.logon.password = '';
    this.logon.email = '';
  } */

}
