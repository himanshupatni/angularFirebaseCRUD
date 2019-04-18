// import { CustomerService } from './cutomer.service';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }

  customerList: AngularFireList<any>;
  form = new FormGroup({
    $key : new FormControl(null),
    fullName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.email),
    mobile : new FormControl('',[Validators.required, Validators.minLength(9)]),
    location : new FormControl(''),

  });

  getCustomer(){
    this.customerList= this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer){
    this.customerList.push(
      {
        fullName: customer.fullName,
        email: customer.email,
        mobile: customer.mobile,
        location: customer.location
      }
    );
  }
  populate(customer){
    this.form.setValue(customer);
  }
  updateCustomer(customer){
    this.customerList.update(customer.$key,{
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    });
  }
  deleteCustomer($key){
    this.customerList.remove($key);
  }
}
