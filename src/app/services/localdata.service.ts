import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  constructor() { }
  admindata=[]
  adddata(item){
    this.admindata.push(item);
  }
  addatindex(item,index){
    this.admindata[index]=item
  }
  getdata(index){
    return this.admindata[index];
  }
  getalldata(){
    return this.admindata;
  }
}
