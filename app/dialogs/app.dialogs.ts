import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  moduleId: module.id,
  selector: 'dialogs',
  directives: [MaterializeDirective],
  templateUrl: 'app.dialogs.html',
})
export class dialogscomponent  {
  printSomething() {
    console.log("tooltip button clicked!");
  }
}