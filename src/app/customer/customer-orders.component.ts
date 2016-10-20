import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../core/services/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'customer-orders',
  templateUrl: 'customer-orders.component.html'
})
export class CustomerOrdersComponent implements OnInit {

  filteredOrders: IOrder[] = [];
  customer: ICustomer;
  sub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up. Don't technically need that here
      //since param won't be changing while component is alive. Could use this.route.parent.snapshot.params["id"] to simplify it.
      this.route.parent.params.forEach((params: Params) => {
        let id = +params['id'];
        this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
          this.filteredOrders = orders;
        });
        this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
          this.customer = customer;
        });
      });
  }
  
  orderTrackBy(index: number, order: IOrderItem) {
    return order.id;
  }
  
  orderItemTrackBy(index: number, orderItem: any) {
    return orderItem.id;
  }

}