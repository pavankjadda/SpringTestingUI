import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit
{

  ngOnInit()
  {
    if(!AuthService.isUserLoggedIn())
    {

    }
  }

}
