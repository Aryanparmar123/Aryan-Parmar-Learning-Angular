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
}
