import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCredencials(email:string,password:string): void{
    console.log('Informacion:',email,password);
  }


}
