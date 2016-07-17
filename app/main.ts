import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './index/app.index';
import { navHeader }    from  './header/app.header';
import { alertcomponent }   from  './component/app.component';
import { dialogscomponent } from "./dialogs/app.dialogs";
import {FormExample} from "./forms/form.component";

bootstrap(AppComponent, [navHeader, alertcomponent, dialogscomponent, FormExample] );