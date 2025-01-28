import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class ToggleStatusCountService{

  public count : number = 0;

  constructor() {}

  public setCount (){
    this.count ++;

}

}
