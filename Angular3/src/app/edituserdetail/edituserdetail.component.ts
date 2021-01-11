import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-edituserdetail',
  templateUrl: './edituserdetail.component.html',
  styleUrls: ['./edituserdetail.component.css']
})
export class EdituserdetailComponent implements OnInit {
  cust = {fname: '', lname: '',phone: '',role:'User'};
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(customer:Customer){
    window.alert("Account Successfully Created Now You Can Login!");
    console.log(customer);
    console.log(customer.fname);
    console.log(customer.lname);
    console.log(customer.phone);
    
    

  }


}
