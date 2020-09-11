import { NgModule} from "@angular/core";

import { NavigationComponent } from '../administrator/navigation/navigation.component';
import { NavbarPage } from '../administrator/navigation/navbar/navbar.page';
@NgModule({
    declarations:[NavigationComponent,NavbarPage],
    imports:[],
    exports:[NavigationComponent,NavbarPage]
})
export class AdminNavigationModule{}