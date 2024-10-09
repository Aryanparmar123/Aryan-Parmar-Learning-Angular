import { Component } from '@angular/core';
import{events} from '../Shared/Models/events';
import {EventListItemComponent} from "../event-list-item/event-list-item.component";
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {EventService} from "../service/event.service";


@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    EventListItemComponent,
    NgForOf,
    NgClass,
    NgStyle
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events: events[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((data: events[]) => {
      this.events = data;
    });
  }



}
