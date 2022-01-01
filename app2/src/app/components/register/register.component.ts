import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

table:any = [];

  constructor(private servce:ServiceService) { }

  ngOnInit(): void {
    this.getdata();
   
  }
    
getdata(){

  this.table = this.servce.datatable;
}


}
