import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {GLOBAL} from '../../services/config/global';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MailSenderService {
  private url:string;
  constructor(private _http: HttpClient) { 
    this.url=GLOBAL.url_api;
  }

  public sendMail(name,from,phone,msj):Observable<any>{
    const headers = new HttpHeaders();
    let subject = 'Mensaje a UPSO INVESTIGACION de: ' + name; 
    let body={
      name:name,
      from:from,
      phone:phone,
      msj:msj,
      subject:subject
    }
    return this._http.post(this.url+'/contact',JSON.stringify(body),{headers:headers}) 
  }

}
