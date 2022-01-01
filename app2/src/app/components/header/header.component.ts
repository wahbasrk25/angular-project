import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private route : Router) { 
    
  }

  ngOnInit(): void {
   
  }


  getrouter(){
    let rot = document.getElementById("searchtxt"); 

    
      this.getlink();

     
      
    


}

getlink(){
  this.route.navigate(["/user"]);
}


}
