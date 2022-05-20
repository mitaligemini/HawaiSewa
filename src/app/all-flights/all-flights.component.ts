
import { FlightDataService } from './../flight-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {

  constructor(private allFlights: FlightDataService,
    private router: Router,
    
    ) { }
  public flights: any = [];
  sortedDeparture: any = [];

  ngOnInit(): void {
    this.flights = this.allFlights.getFlight();
    console.log(this.flights);
  }
  
  isDuration:boolean=false;
  duration(): void {
    this.isDeparture=false;
    this.isDuration=true;
    this.isPrice=false;
    this.isArrival=false;
    this.flights.sort((objA: any, objB: any) =>
    objA.duration > objB.duration ? 1 : -1
    )
    console.log(this.flights);
  }

  isDeparture:boolean=false;

  departure(): void {
    this.isDeparture=true;
    this.isDuration=false;
    this.isPrice=false;
    this.isArrival=false;
    this.flights.sort((objA: any, objB: any) =>
      objA.departure > objB.departure ? 1 : -1
    )
  }
  isPrice:boolean=false;
  price(): void {
      this.isPrice=true;
      this.isDeparture=false;
      this.isDuration=false;
      this.isArrival=false;
    this.flights.sort((objA: any, objB: any) =>
      (objA.ticketPrice > objB.ticketPrice ? 1 : -1))
  }

  isArrival:boolean=false;
  arrival(): void {
    this.isDeparture=false;
    this.isDuration=false;
    this.isPrice=false;
    this.isArrival=true;
    this.flights.sort((objA: any, objB: any) =>
    objA.arrival > objB.arrival ? 1 : -1
    )
    console.log(this.flights);
  }
  data:any;

  bookclicked(flight:any){
    this.data=flight;
    this.router.navigateByUrl('flight-info', {state: {flight: flight}})
  }

  
}
