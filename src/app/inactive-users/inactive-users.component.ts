import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements  OnInit{

  public users : string[]= [];

  constructor(private  userSvc : UsersService) {}

  public ngOnInit() {

  this.users = this.userSvc.inactiveUsers;

}

  onSetToActive(id: number) {

    this.userSvc.onSetToActive(id);

  }
}
