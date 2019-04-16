import {NgModule} from '@angular/core';
import {productManagementRoute} from './product/product.route';
import {categoryManagementRoute} from './category/category.route';
import {RouterModule} from '@angular/router';
import {manufacturerManagementRoute} from './manufacturer/manufacturer.route';
import {orderManagementRoute} from './order/order.route';
import {cartManagementRoute} from './cart/cart.route';

@NgModule(
  {
    imports: [
      RouterModule.forChild(categoryManagementRoute),
      RouterModule.forChild(orderManagementRoute),
      RouterModule.forChild(manufacturerManagementRoute),
      RouterModule.forChild(cartManagementRoute),
      RouterModule.forChild(productManagementRoute)
    ],
    exports: [
      RouterModule
    ]
  })
export class ApiRoutingModule {

}