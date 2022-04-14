import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  user = new BehaviorSubject<any>(null);
 
  constructor() { }
}
export interface User {
  name: string;
  password: string;
}
