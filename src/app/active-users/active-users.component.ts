import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../services/users.service";
import {ToggleStatusCountService} from "../services/toggleStatusCount.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  public users :string[] = [];

  public count = 0;

  constructor(private usersSvc : UsersService,private toggleCountSvc : ToggleStatusCountService) {}

  public ngOnInit() {

    this.users = this.usersSvc.activeUsers;

  }

  public onSetToInactive(id: number) {

    this.toggleCountSvc.setCount();

    this.usersSvc.onSetToInactive(id);

  }
}
