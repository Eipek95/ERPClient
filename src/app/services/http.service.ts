import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { api } from '../constants';
import { ResultModel } from '../models/result.model';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private  auth:AuthService,
    private error:ErrorService
  ) { }

  post<T>(apiUrl:string,body:any,callback:(res:T)=>void,errorCallBack?:()=>void){
    this.http.post<ResultModel<T>>(`${api}/${apiUrl}`,body,{
      headers: {
        "Authorization": "Bearer "+this.auth.token
      }
    }).subscribe({
      next:(res)=>{
        if(res.data) callback(res.data);
      },
      error:(err:HttpErrorResponse)=>{
        this.error.errorHandler(err);
        
        if(errorCallBack){
          errorCallBack();
        }
      }
    })
  }
}
