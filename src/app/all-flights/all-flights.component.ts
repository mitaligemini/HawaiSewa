import { FlightDataService } from './../flight-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {

  constructor(private allFlights: FlightDataService) { }
  public flights: any = [];
  sortedDeparture: any = [];

  ngOnInit(): void {
    this.flights = this.allFlights.getFlight();
    console.log(this.flights);
  }

  duration(): void {
    this.flights.sort((objA: any, objB: any) =>
    objA.duration > objB.duration ? 1 : -1
    )
    console.log(this.flights);
  }

  departure(): void {
    this.flights.sort((objA: any, objB: any) =>
      objA.departure > objB.departure ? 1 : -1
    )
  }
  price(): void {
    this.flights.sort((objA: any, objB: any) =>
      (objA.ticketPrice > objB.ticketPrice ? 1 : -1))
  }
  arrival(): void {
    this.flights.sort((objA: any, objB: any) =>
    objA.arrival > objB.arrival ? 1 : -1
    )
    console.log(this.flights);
  }

}
