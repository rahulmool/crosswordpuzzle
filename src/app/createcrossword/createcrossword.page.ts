import { Component, OnInit } from '@angular/core';
import { AlertController, RangeCustomEvent } from '@ionic/angular';

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
 

  constructor(private alertController: AlertController) { }
  down=[];
  right=[];
  row: any;
  col: any;
  async fun(i, j) {
    console.log(i, j);
    const alert = await this.alertController.create({
      header: 'Enter data in block (' + this.row + ',' + this.col + ')',
      buttons: [{
        text: 'Down',
        cssClass: 'secondary',
        handler: data => {
          //console.log('Confirm Cancel: blah');
          this.filldown(j,i,data.string);
          this.down.push(" ("+j+","+i+") "+data.clue);
        }
      }, {
        text: 'Right',
        cssClass: 'secondary',
        handler: data => {
          //console.log('Confirm Cancel: blah');
          //console.log(data.string);
          this.fillright(j, i, data.string);
          this.right.push(" ("+j+","+i+") "+data.clue);
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
  filldown(p, j, string) {
    //const text = 'Hello StackOverflow';
    for (let i = 0; i < string.length; i++) {
      this.b[p + i][j] = string.charAt(i);
      //console.log(i, character);
    }
  }
  fillright(p, j, string) {
    //const text = 'Hello StackOverflow';
    for (let i = 0; i < string.length; i++) {
      this.b[p][j + i] = string.charAt(i);
      //console.log(i, character);
    }
  }


}
