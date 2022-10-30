import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'gamelist';

@Injectable({
  providedIn: 'root'
})

export class PuzzleService {

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    console.log('INIT');
    await this.storage.create();
    console.log('DONE');
  }

  getData(){
    console.log('GET DATA');
    return this.storage.get(STORAGE_KEY) || [];
  }

  async addData(item){
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.push(item);
    console.log(storedData);
    return this.storage.set(STORAGE_KEY,storedData);
  }



}
