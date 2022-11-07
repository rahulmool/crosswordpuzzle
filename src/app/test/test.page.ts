import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, RangeCustomEvent } from '@ionic/angular';
import { LocaldataService } from '../services/localdata.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit{
  constructor(public navCtrl: NavController,public localdata:LocaldataService, public router: Router){}
  admindata
  index = {
    number: 1,
  }
  ngOnInit() {
    this.localdata.oninit();
    this.admindata=this.localdata.getalldata();
  }
  
  navigate(i){
    this.index.number = i;
    this.router.navigate(['/play'], {
      queryParams: {
        value: JSON.stringify(this.index)
      },
    });
  }
  direction(){
    this.navCtrl.navigateRoot('/login')
  }
}
