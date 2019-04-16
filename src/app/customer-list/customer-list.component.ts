import { CustomerService } from './../shared/cutomer.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor( private customerService: CustomerService) { }
customerArray=[];
  ngOnInit() {
    this.customerService.getCustomer().subscribe(list =>{
      this.customerArray = list.map(item =>{
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }
  onDelete($key: string){
    if(confirm("Are you sure you want to delte this customer ?"))
    this.customerService.deleteCustomer($key);

  }

}
