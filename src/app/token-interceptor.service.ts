import { Injectable, Injector} from '@angular/core';
import {HttpInterceptors,HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import {UserService} from './user.service';
import { Observable } from 'rxjs/Observable';
import {HttpHeaders} from '@angular/common/http';
//import {LocalStorageService} from './LocalStorageService';

@Injectable({
  providedIn: 'root'

})
export class TokenInterceptorService implements HttpInterceptors {
  access_token:string;

  constructor(private injector : Injector) { }
  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
//let userService = this.injector.get(UserService)
console.log("hello");
//var tokendata = this.localstorageService.GetValueFromLocalStorage();
//var authHeader = 'Bearer' + tokendata.access_token;
let abc = this.injector.get(UserService)
    let tokenizedReq = req.clone({
      setHeaders: {Authorization : `Bearer ${abc.getToken()}`}})
    return next.handle(tokenizedReq)
  }
}
