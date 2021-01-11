import { Component, OnInit } from '@angular/core';
import { Customer } from './../customer';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
list:Customer[]=[];
  constructor(private customers:CustomerService) { }

  ngOnInit(): void {
    
    this.customers.getusers().subscribe(response=>{this.list=response});
    
  }

}
