import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  cantidad:number=0;
  constructor() { }

  wau(){
    //alert("wau"+this.cantidad);
    this.cantidad++;

  }
}
