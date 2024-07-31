import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;
  constructor(public navCtrl: NavController,public toast:ToastController,private alertController: AlertController) { }

  ngOnInit() {
  }
  fun(){
    if(this.username==="admin"&& this.password==="1234"){
      console.log("suceessful login as admin");
      this.username=""
      this.password=""
      this.navCtrl.navigateForward('/editcrossword');
    }else if(this.username==="user"&& this.password==="1234"){
      this.username=""
      this.password=""
      this.navCtrl.navigateForward('/test');
    }else{
      this.openToast("Please enter a valid username and password")
      this.presentAlert();
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please Login as admin or user',
      subHeader: 'Password for both admin and user is 1234',
      message: 'i.e username:admin , password:1234 and username:user , password=1234.',
      buttons: ['Close'],
    });

    await alert.present();
  }
}
