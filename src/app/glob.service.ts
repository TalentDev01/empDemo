import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobService {
  public grDdata = new Subject();
  constructor() { }

  addData(data:any){
    this.grDdata.next(data)
  }


}
