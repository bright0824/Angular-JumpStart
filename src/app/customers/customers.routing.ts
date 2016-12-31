import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  { path: '', component: CustomersComponent }
];

export const customersRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ CustomersComponent, CustomersCardComponent, CustomersGridComponent ]
};