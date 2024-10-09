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




  read(eventId: number): Observable<events | undefined> {
    const event = this.events.find(e => e.eventId === eventId);
    return of(event);
  }


  create(newEvent: events): Observable<events[]> {
    this.events.push(newEvent);
    return of(this.events);
  }


  update(updatedEvent: events): Observable<events[]> {
    const index = this.events.findIndex(e => e.eventId === updatedEvent.eventId);
    if (index !== -1) {
      this.events[index] = updatedEvent;
    }
    return of(this.events);
  }


  delete(eventId: number): Observable<events | undefined> {
    const index = this.events.findIndex(e => e.eventId === eventId);
    if (index !== -1) {
      const removedEvent = this.events.splice(index, 1)[0];
      return of(removedEvent);
    }
    return of(undefined);
  }

}
