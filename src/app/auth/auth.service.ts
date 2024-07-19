import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { TokenResponse } from './auth.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  router = inject(Router)
  baseApiUrl = 'https://icherniakov.ru/yt-course/auth/ '

  token: string | null = null
  refreshToken: string | null = null

  get isAuth(){
    return !!this.token
  }

  login(payload: {username:string, password: string}){
     const fd = new FormData()

    fd.append('username', payload.username)
    fd.append('password', payload.password)

    return this.http.post<TokenResponse>('https://icherniakov.ru/yt-course/auth/token',
      fd,
    ).pipe(
      tap( val => this.saveTokens(val))
    )


  }
  refreshAuthToken() {
    return this.http.post<TokenResponse>(
      `${this.baseApiUrl}refresh`,
    {
      refresh_oken: this.refreshToken,
    }
  ).pipe(
    tap( val => this.saveTokens(val)),           
    catchError(err =>{
      this.logout()
      return throwError(err)
          
    })
  )
  }
  logout() { 
    this.token = null
    this.refreshToken = null;
    this.router.navigate(['/login'])
  }

  saveTokens(res: TokenResponse){
    this.token = res.access_token
    this.refreshToken = res.refresh_token
  }
}