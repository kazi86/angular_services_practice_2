import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../services/users.service";
import {ToggleStatusCountService} from "../services/toggleStatusCount.service";
import {count} from "rxjs";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements  OnInit{

  public users : string[]= [];

  public count : number = 0;

  constructor(private  userSvc : UsersService, private toggleCountSvc : ToggleStatusCountService) {}

  public ngOnInit() {

  this.users = this.userSvc.inactiveUsers;

}

  onSetToActive(id: number) {

    this.toggleCountSvc.setCount();

    this.userSvc.onSetToActive(id);

  }
}
