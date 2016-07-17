import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
    moduleId: module.id,
    selector: 'nav-app-header',
    styles: ['header, main, footer { padding-left: 260px; }'],
    templateUrl: 'app.header.html',
})
export class navHeader { }