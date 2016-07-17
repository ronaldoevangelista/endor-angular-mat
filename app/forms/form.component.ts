import {Component,EventEmitter,Output} from '@angular/core';
import {CORE_DIRECTIVES,FORM_DIRECTIVES} from '@angular/common';
import {GreenCar} from "./greencar";

@Component({
    selector: 'angular-typescript-form',
    templateUrl: '../app/forms/form.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]

})
export class FormExample {

    myCar = new GreenCar(1,'BMW Serie 1','Red',2);
    constructor(){
        console.log("Form Component Start");
    }

    submitted = false;
    data: string; 
    onSubmit(data:any) {
        this.submitted = true;
        this.data = JSON.stringify(data, null, 2);
        console.log(this.data);
    }
}
