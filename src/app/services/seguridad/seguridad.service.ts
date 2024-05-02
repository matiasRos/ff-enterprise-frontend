import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USER_KEY, getData, setData } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  private userData = new BehaviorSubject<any>(null);
  public userData$ = this.userData.asObservable();
  
  constructor(private http: HttpClient) { 
    this.userData.next(getData(USER_KEY));
  }


  updateDataUser(data: any) {
    setData(USER_KEY, data);
    this.userData.next(data);
  }

  

}
