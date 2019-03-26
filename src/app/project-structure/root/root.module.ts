import { ManageUsersService } from './../../data/services/manage-users.service';
/***
 *    ██████╗  ██████╗  ██████╗ ████████╗
 *    ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝
 *    ██████╔╝██║   ██║██║   ██║   ██║
 *    ██╔══██╗██║   ██║██║   ██║   ██║
 *    ██║  ██║╚██████╔╝╚██████╔╝   ██║
 *    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝
 *
 *    ███╗   ███╗ ██████╗ ██████╗ ██╗   ██╗██╗     ███████╗
 *    ████╗ ████║██╔═══██╗██╔══██╗██║   ██║██║     ██╔════╝
 *    ██╔████╔██║██║   ██║██║  ██║██║   ██║██║     █████╗
 *    ██║╚██╔╝██║██║   ██║██║  ██║██║   ██║██║     ██╔══╝
 *    ██║ ╚═╝ ██║╚██████╔╝██████╔╝╚██████╔╝███████╗███████╗
 *    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
 *
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/root/root.component';
import { BadApproachComponent } from './components/bad-approach/bad-approach.component';
import { HttpClientModule } from '@angular/common/http';
import { CorrectApproachComponent } from './components/correct-approach/correct-approach.component';

@NgModule({
  declarations: [
    RootComponent,
    BadApproachComponent,
    CorrectApproachComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ ManageUsersService ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
