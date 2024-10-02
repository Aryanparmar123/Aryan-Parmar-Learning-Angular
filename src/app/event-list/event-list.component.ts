import { Component, OnInit } from '@angular/core';
import { events } from '../Shared/Models/events';
import { EventListItemComponent } from "../event-list-item/event-list-item.component";
import { NgForOf } from "@angular/common";
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    EventListItemComponent,
    NgForOf
  ],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent  {

  eventList: events[] = [];

  constructor(private eventsService: EventsService) {}


}
