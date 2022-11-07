import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;
  constructor(public navCtrl: NavController,public toast:ToastController) { }

  ngOnInit() {
  }
  fun(){
    if(this.username==="admin"&& this.password==="adm@123"){
      console.log("suceessful login as admin");
      this.username=""
      this.password=""
      this.navCtrl.navigateForward('/editcrossword');
    }else if(this.username==="user"&& this.password==="usr@123"){
      this.username=""
      this.password=""
      this.navCtrl.navigateForward('/test');
    }else{
      this.openToast("Please enter a valid username and password")
    }
    console.log(this.username,this.password);
  }

  async openToast(string) {  
    const toast = await this.toast.create({  
      message: string,  
      duration: 5000  
    });  
    toast.present();  
  }  

}
