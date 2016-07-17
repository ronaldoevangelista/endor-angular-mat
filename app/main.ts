import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './index/app.index';
import { navHeader }    from  './header/app.header';
import { alertcomponent }    from  './component/app.component';

//import { navDialogs}    from "./dialogs/dialogs";

bootstrap(AppComponent, [navHeader, alertcomponent] );


//bootstrap(navDialogs);