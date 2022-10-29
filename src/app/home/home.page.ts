import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listData=[];
  constructor(private dataservice:DataService) {
    this.loadData();
  }
  async loadData(){
    this.listData = await this.dataservice.getData();
  }
  async addData(){
    await this.dataservice.addData(`Simon ${Math.floor(Math.random()*100)}`);
    this.loadData();
  }
  async removeItem(index){
    this.dataservice.removeItem(index);
    this.listData.splice(index,1);
     
  }
   

}
