import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiService} from './../../services/config/api.service'



@Injectable({
  providedIn: 'root'
})
export class MailSenderService {
  private url:string;
  constructor(private _api: ApiService) { 
  }

  public sendMail(name,from,phone,msj):Observable<any>{
    let subject = 'Mensaje a UPSO INVESTIGACION de: ' + name; 
    let body={
      nombre:name,
      correo:from,
      telefono:phone,
      mensaje:msj,
      subject
    }
    return this._api.post('contact/message',body); 
  }

}
