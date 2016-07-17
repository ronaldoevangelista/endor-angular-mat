import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

import {FormExample} from "../forms/form.component";


@Component({
  moduleId: module.id,
  selector: 'dialogs',
  directives: [MaterializeDirective, FormExample],
  templateUrl: 'app.dialogs.html',
})
export class dialogscomponent  {
  printSomething() {
    console.log("tooltip button clicked!");
  }
}