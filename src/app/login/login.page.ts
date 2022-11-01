import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  fun(){
    if(this.username==="admin"&& this.password==="adm@123"){
      console.log("suceessful login as admin");
      this.navCtrl.navigateForward('/editcrossword');
    }else{
      this.navCtrl.navigateForward('/test');
    }
    console.log(this.username,this.password);
  }

}
