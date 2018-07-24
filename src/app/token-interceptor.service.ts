import { Injectable, Injector} from '@angular/core';
import {HttpInterceptor,HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import {UserService} from './user.service';
import { Observable } from 'rxjs/Observable';
import {HttpHeaders} from '@angular/common/http';
import { do } from "rxjs/operators";

@Injectable({
  providedIn: 'root'

})
export class TokenInterceptorService implements HttpInterceptor {
  access_token:string;

  constructor(private injector : Injector, private userservice : UserService) { }
  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
//let userService = this.injector.get(UserService)
console.log("hello");

let abc = this.injector.get(UserService)
let Authorization = this.userservice.getToken();
let tokenizedReq = req.clone({
      headers: req.headers.set('authorization', 'Authorization')})
    return next.handle(tokenizedReq);
  
  }
}
