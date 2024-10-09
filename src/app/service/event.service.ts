import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {events } from '../Shared/Models/events';
import {eventlist} from "../data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: events[] = eventlist;

  constructor() { }

  getAllEvents(): Observable<events[]> {
    return of(this.events); // Return the events wrapped in an Observable
  }
}
