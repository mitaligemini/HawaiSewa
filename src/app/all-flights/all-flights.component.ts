import { FlightDataService } from './../flight-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {

  constructor( private allFlights:FlightDataService) { }
  public flights:any=[];
  ngOnInit(): void {
    this.flights=this.allFlights.getFlight();
    console.log(this.flights);
  }

  
  
 



}
