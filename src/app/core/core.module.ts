import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GrowlerModule } from './growler/growler.module';
import { ModalModule } from './modal/modal.module';

import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './services/data.service';
import { FilterService } from './services/filter.service';
import { SorterService } from './services/sorter.service';
import { TrackByService } from './services/trackby.service';
import { DialogService } from './services/dialog.service';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { ValidationService } from './services/validation.service';
import { AuthService } from'./services/auth.service';

@NgModule({
  imports: [ CommonModule, RouterModule, HttpClientModule, GrowlerModule, ModalModule ],
  exports: [ GrowlerModule, RouterModule, HttpClientModule, ModalModule, NavbarComponent ],
  declarations: [ NavbarComponent ],
  providers: [ SorterService, FilterService, DataService, TrackByService, 
               DialogService, ValidationService, AuthService ] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}



