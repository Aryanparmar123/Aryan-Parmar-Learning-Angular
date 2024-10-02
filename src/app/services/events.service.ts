import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {events} from "../Shared/Models/events"
import {event} from "../data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events : events[] = event;

  constructor() { }


  getEvents(): Observable<events[]> {
    return of(this.events);
  }
  getEventById(eventId: number): Observable<events | undefined> {
    const foundEvent = this.events.find(event => event.eventId === eventId);
    return of(foundEvent);
  }

  addEvent(newEvent: events): Observable<events[]> {
    this.events.push(newEvent);
    return of(this.events);
  }

  updateEvent(updatedEvent: events): Observable<events[]> {
    const index = this.events.findIndex(event => event.eventId === updatedEvent.eventId);
    if (index !== -1) {
      this.events[index] = updatedEvent;
    }
    return of(this.events);
  }

  deleteEvent(eventId: number): Observable<events[]> {
    this.events = this.events.filter(event => event.eventId !== eventId);
    return of(this.events);
  }
}
