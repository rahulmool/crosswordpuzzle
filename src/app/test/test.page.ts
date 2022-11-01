import { Component, OnInit } from '@angular/core';
import { AlertController, RangeCustomEvent } from '@ionic/angular';
import { LocaldataService } from '../services/localdata.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  col = 25
  row = 25
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
  save
  right
  down
  temp
  constructor(private alertController: AlertController, public localdata: LocaldataService) {
    this.save = {
      "array": [
          [
              "",
              "",
              "a",
              "",
              "",
              "",
              "",
              "a",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "s",
              "",
              "",
              "",
              "",
              "r",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "d",
              "",
              "",
              "",
              "",
              "t",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "f",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "h",
              "e",
              "l",
              "l",
              "o",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ],
          [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
          ]
      ],
      "down": [
          {
              "i": 0,
              "j": 2,
              "clue": "asdfasdf",
              "answer": "asdf"
          },
          {
              "i": 0,
              "j": 7,
              "clue": "this is just test",
              "answer": "art"
          }
      ],
      "right": [
          {
              "i": 5,
              "j": 0,
              "clue": "asdfasdf",
              "answer": "hello"
          }
      ],
      "col": 13,
      "row": 13
  }
    this.admindata.push(this.save)
  }
  funcolose(i,j){
    console.log(i,j)
    console.log(this.b[i][j])
  }
  findindex(li,lj,index){
    this.right = this.admindata[index].right;
    this.down = this.admindata[index].down
    for (let p = 0; p < this.down.length; p++) {
      if (this.down[p].i == li && this.down[p].j == lj) {
        return p+1
      }
    }
    for (let p = 0; p < this.right.length; p++) {
      //console.log(this.right[p])
      if (this.right[p].i == li && this.right[p].j == lj) {
        //console.log("we have found a match "+li+"and "+lj)
        return p+1
      }
    }
  }


  admindata = []
  ngOnInit() {
  }
  check(li, lj, index) {
    this.right = this.admindata[index].right;
    this.down = this.admindata[index].down
    for (let p = 0; p < this.down.length; p++) {
      if (this.down[p].i == li && this.down[p].j == lj) {
        return true
      }
    }
    for (let p = 0; p < this.right.length; p++) {
      //console.log(this.right[p])
      if (this.right[p].i == li && this.right[p].j == lj) {
        //console.log("we have found a match "+li+"and "+lj)
        return true
      }
    }
    return false
  }
  aftercheck(li,lj,index){
    if(this.checkright(li,lj,index)){
      this.alertright(li,lj);
    }else if(this.checkdown(li,lj,index)){
      this.alertdown(li,lj);
    }
  }
  checkright(li,lj,index){
    this.right = this.admindata[index].right;
    this.down = this.admindata[index].down
    console.log('length of right is '+this.right.length)
    for (let p = 0; p < this.right.length; p++) {
      if (this.right[p].i == li && this.right[p].j == lj) {
        return true
      }
    }
    return false
  }
  checkboth(li,lj,index){
    this.right = this.admindata[index].right;
    this.down = this.admindata[index].down
    for (let p = 0; p < this.down.length; p++) {
      if (this.down[p].i == li && this.down[p].j == lj) {
        for (let p = 0; p < this.right.length; p++) {
          //console.log(this.right[p])
          if (this.right[p].i == li && this.right[p].j == lj) {
            //console.log("we have found a match "+li+"and "+lj)
            return true
          }
        }
      }
    }
    return false
  }
  checkdown(li,lj,index){
    this.right = this.admindata[index].right;
    this.down = this.admindata[index].down
    for (let p = 0; p < this.down.length; p++) {
      if (this.down[p].i == li && this.down[p].j == lj) {
        return true
      }
    }
    return false
  }
  fillright(p, j, string) {
    //const text = 'Hello StackOverflow';
    for (let i = 0; i < string.length; i++) {
      this.b[p][j+i ] = string.charAt(i);
      console.log(p+i,j)
      //console.log(i, character);
    }
  }
  filldown(p, j, string) {
    for (let i = 0; i < string.length; i++) {
      this.b[p + i][j] = string.charAt(i);
    }
  }
  async alertdown(li,lj){
    if(this.checkdown(li,lj,0)){
      console.log('the code should work correctly')
    }else{
      console.log('please select output correctly')
    }
    this.down=this.admindata[0].down;
    for(let p=0;p<this.down.length;p++){
      if (this.down[p].i == li && this.down[p].j == lj) {
        this.temp=this.down[p] 
        console.log(this.temp)     
      }
    }
    
    const alert=await this.alertController.create({
        header:'Clue: '+this.temp.clue,
        subHeader:'Size of string is '+this.temp.answer.length,
        cssClass: 'my-custom-alert',
        buttons:[{
          text: 'Check',
        cssClass: 'secondary',
        handler: data => {
          if(!this.temp.answer.localeCompare(data.string)){
            console.log('congrats the answer matches')
            this.filldown(li,lj,data.string)
            console.log(this.b)
          }
        }
        }],
        inputs: [
          {
            name: 'string',
            placeholder: 'string',
            attributes: {
              maxlength: 26,
            },
          }
        ],
    })
    await alert.present();
  }
  async alertright(li,lj){
    if(this.checkright(li,lj,0)){
      console.log('the code should work correctly')
    }else{
      console.log('please select output correctly')
    }
    this.right=this.admindata[0].right;
    for(let p=0;p<this.right.length;p++){
      if (this.right[p].i == li && this.right[p].j == lj) {
        this.temp=this.right[p]      
      }
    }
    
    const alert=await this.alertController.create({
        header:'Clue: '+this.temp.clue,
        subHeader:'Size of string is '+this.temp.answer.length,
        cssClass: 'my-custom-alert',
        buttons:[{
          text: 'Check',
        cssClass: 'secondary',
        handler: data => {
          if(!this.temp.answer.localeCompare(data.string)){
            console.log('congrats the answer matches')
            this.fillright(li,lj,data.string)
            console.log(this.b)
          }
          //console.log('Confirm Cancel: blah');
          //this.filldown(j, i, data.string);
          //this.down.push(" (" + pj + "," + pi + ") " + data.clue);
        }
        }],
        inputs: [
          {
            name: 'string',
            placeholder: 'string',
            attributes: {
              maxlength: 26,
            },
          }
        ],
    })
    await alert.present();
  }
  async alertbox(i, j) {
    console.log(i, j);
    const pi = i + 1, pj = j + 1;
    const alert = await this.alertController.create({
      header: 'Enter data in block (' + pj + ',' + pi + ')',
      cssClass: 'my-custom-alert',
      buttons: [{
        text: 'Down',
        cssClass: 'secondary',
        handler: data => {
          //console.log('Confirm Cancel: blah');
          //this.filldown(j, i, data.string);
          //this.down.push(" (" + pj + "," + pi + ") " + data.clue);
        }
      }, {
        text: 'Right',
        cssClass: 'secondary',
        handler: data => {
          //console.log('Confirm Cancel: blah');
          //console.log(data.string);
          //this.fillright(j, i, data.string);
          //this.right.push(" (" + pj + "," + pi + ") " + data.clue);
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
  fun(i, j) {
    console.log(i, j)
  }


}
