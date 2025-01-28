import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  public users :string[] = [];

  constructor(private usersSvc : UsersService) {}

  public ngOnInit() {

    this.users = this.usersSvc.activeUsers;

  }

  public onSetToInactive(id: number) {

    this.usersSvc.onSetToInactive(id);

  }
}
