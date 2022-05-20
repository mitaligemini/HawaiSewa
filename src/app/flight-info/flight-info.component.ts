import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})
export class FlightInfoComponent implements OnInit {

  data:any;
  total:number;
  constructor(private router: Router) { 
     this.data=this.router.getCurrentNavigation()!.extras.state
     console.log(this.data)
     this.total=this.data.flight.ticketPrice + 657-700
     console.log(this.total)
  }

  
 
  


  ngOnInit(): void {
  }

  

}
