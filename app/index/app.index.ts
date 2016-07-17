import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import { navHeader }    from  '../header/app.header';
import { alertcomponent }    from  '../component/app.component';


@Component({
    moduleId: module.id,
    selector: 'index-app',
    styles: ['header, main, footer { padding-left: 260px; }'],
    templateUrl: 'app.index.html',
    directives: [navHeader, alertcomponent],

})
export class AppComponent { }
