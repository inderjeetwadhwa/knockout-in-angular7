import { Component, AfterViewInit } from '@angular/core';
import {HelloViewModel} from '../common/HelloViewModel';
import * as ko from "knockout";

@Component({
  selector: 'app-knockout-container',
  templateUrl: './knockout-container.component.html',
  styleUrls: ['./knockout-container.component.scss']
})
export class KnockoutContainerComponent implements AfterViewInit {

  constructor() { 
  }

  ngAfterViewInit() {
    this.loadKnockoutComponent();
  }

  private loadKnockoutComponent() {
    ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"), document.getElementById('knockout'));    
  }



}
