import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, RangeCustomEvent } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PuzzleService} from '../services/puzzle.service'

@Component({
  selector: 'app-createcrossword',
  templateUrl: './createcrossword.page.html',
  styleUrls: ['./createcrossword.page.scss'],
})
export class CreatecrosswordPage implements OnInit {


  counter(arg0: number): any {
    throw new Error('Method not implemented.');
  }
  b = [['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ]
  constructor(private alertController: AlertController, public navCtrl: NavController, public activatedRoute: ActivatedRoute,private puzzleservice:PuzzleService) {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(JSON.parse(res.value));
    });
  }
  save;
  down = [];
  right = [];
  varminrow=1;
  varmincol=1;
  row: any;
  col: any;
  async savedata(){
    this.save={array:this.b,
      down:this.down,
      right:this.right,
    }
    await this.puzzleservice.addData(this.save);
  }
  async fun(i, j) {
    console.log(i, j);
    const pi = i + 1, pj = j + 1;
    const alert = await this.alertController.create({
      header: 'Enter data in block (' + pj + ',' + pi + ')',
      cssClass: 'my-custom-alert',
      buttons: [{
        text: 'Down',
        cssClass: 'secondary',
        handler: data => {
          const jsondown = {
            i: i,
            j: j,
            clue: data.clue,
            answer: data.string
          }
          //console.log('Confirm Cancel: blah');
          this.filldown(j, i, data.string);
          //this.down.push(" (" + pj + "," + pi + ") " + data.clue);
          this.down.push(jsondown);
          // if(this.varmincol<j){
          //   this.varmincol=j;
          // }
          // if(this.varminrow<i+data.string.length+1){
          //   this.varminrow=i+data.string.length+1;
          // }
        }
      }, {
        text: 'Right',
        cssClass: 'secondary',
        handler: data => {
          const jsonright = {
            i: i,
            j: j,
            clue: data.clue,
            answer: data.string
          }
          //console.log('Confirm Cancel: blah');
          //console.log(data.string);
          this.fillright(j, i, data.string);
          this.right.push(jsonright);
          // if(this.varmincol<i+data.string.length){
          //   this.varmincol=i+data.string.length;
          // }
          // if(this.varminrow<j+1){
          //   this.varminrow=j+1;
          // }
          
          
          //console.log(this.a[i][j]);
        }
      }],
      inputs: [
        {
          name: 'string',
          placeholder: 'string',
          attributes: {
            maxlength: 26,
          },
        },
        {
          name: 'clue',
          placeholder: 'Clue',

        }
      ],
    });

    await alert.present();
  }
  ngOnInit() {
    this.row = 13;
    this.col = 13;
  }
  onIonChangerow(ev: Event) {
    //console.log((ev as RangeCustomEvent).detail.value);
    this.row = (ev as RangeCustomEvent).detail.value;
    //this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;

  }
  onIonChangecol(ev: Event) {
    //console.log((ev as RangeCustomEvent).detail.value);
    this.col = (ev as RangeCustomEvent).detail.value;
    //this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  }

  
  hello() {
    console.log("hello");
  }
  deletedown(i){
    console.log(this.down[i]);
    this.removedown(this.down[i].j,this.down[i].i,this.down[i].answer.length);
    this.down.splice(i,1);
  }
  removedown(p,j,size){
    console.log("inside remove down")
    for (let i = 0; i < size; i++) {
      this.b[p + i][j] = '';
    }
  }
  filldown(p, j, string) {
    for (let i = 0; i < string.length; i++) {
      this.b[p + i][j] = string.charAt(i);
    }
  }
  async fun2(remove,i, j,answer,hint) {
    console.log(i, j);
    const pi = i + 1, pj = j + 1;
    const alert = await this.alertController.create({
      header: 'Enter data in block (' + pj + ',' + pi + ')',
      cssClass: 'my-custom-alert',
      buttons: [{
        text: 'Down',
        cssClass: 'secondary',
        handler: data => {
          const jsondown = {
            i: i,
            j: j,
            clue: data.clue,
            answer: data.string
          }
          this.deleteright(remove);
          this.filldown(j, i, data.string);
          this.down.push(jsondown);
        }
      }, {
        text: 'Right',
        cssClass: 'secondary',
        handler: data => {
          const jsonright = {
            i: i,
            j: j,
            clue: data.clue,
            answer: data.string
          }
          this.deleteright(remove);
          this.fillright(j, i, data.string);
          this.right.push(jsonright);
        }
      }],
      inputs: [
        {
          name: 'string',
          placeholder: 'string',
          attributes: {
            maxlength: 26,
          },
          value:answer
        },
        {
          name: 'clue',
          placeholder: 'Clue',
          value:hint
        }
      ],
    });

    await alert.present();
  }
  async fun3(remove,i, j,answer,hint) {
    console.log(i, j);
    const pi = i + 1, pj = j + 1;
    const alert = await this.alertController.create({
      header: 'Enter data in block (' + pj + ',' + pi + ')',
      cssClass: 'my-custom-alert',
      buttons: [{
        text: 'Down',
        cssClass: 'secondary',
        handler: data => {
          const jsondown = {
            i: i,
            j: j,
            clue: data.clue,
            answer: data.string
          }
          this.deletedown(remove);
          this.filldown(j, i, data.string);
          this.down.push(jsondown);
        }
      }, {
        text: 'Right',
        cssClass: 'secondary',
        handler: data => {
          const jsonright = {
            i: i,
            j: j,
            clue: data.clue,
            answer: data.string
          }
          this.deletedown(remove);
          this.fillright(j, i, data.string);
          this.right.push(jsonright);
        }
      }],
      inputs: [
        {
          name: 'string',
          placeholder: 'string',
          attributes: {
            maxlength: 26,
          },
          value:answer
        },
        {
          name: 'clue',
          placeholder: 'Clue',
          value:hint
        }
      ],
    });

    await alert.present();
  }
  editright(i){
    this.fun2(i,this.right[i].i,this.right[i].j,this.right[i].answer,this.right[i].clue)
  }
  editdown(i){
    this.fun3(i,this.down[i].i,this.down[i].j,this.down[i].answer,this.down[i].clue);
  }
  deleteright(i){
    //console.log("This is inside delete right: "+i);
    this.removeright(this.right[i].j,this.right[i].i,this.right[i].answer.length);
    this.right.splice(i,1);
  }
  removeright(p,j,size){
    //console.log("Inside removeright")
    for (let i = 0; i < size; i++) {
      this.b[p][j + i] = '';
      //console.log("b["+p+"]["+j+"+"+i+"]="+this.b[p][j+i]);
    }
  }
  fillright(p, j, string) {
    //const text = 'Hello StackOverflow';
    for (let i = 0; i < string.length; i++) {
      this.b[p][j + i] = string.charAt(i);
      //console.log(i, character);
    }
  }
  redbox(ti,tj){
    for(let i=0;i<this.down.length;i++){
      if(this.down[i].i==ti && this.down[i].j==tj){
        return true;
      }
    }
    for(let i=0;i<this.right.length;i++){
      if(this.right[i].i==ti && this.right[i].j==tj){
        return true;
      }
    }
    return false;
  }
  toeditcrossword() {
    this.savedata();
    this.navCtrl.navigateForward('/editcrossword');
  }
}
