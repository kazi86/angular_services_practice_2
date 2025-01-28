import {Component, OnInit} from '@angular/core';
import {ToggleStatusCountService} from "./services/toggleStatusCount.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public count  = 0;

  constructor(public toggleCountSvc : ToggleStatusCountService) {}

  public ngOnInit() {

    this.toggleCountSvc.setCount();

  }

}
