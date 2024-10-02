import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {events} from "./Shared/Models/events";

import {NgForOf, NgIf} from "@angular/common";
import {EventListComponent} from "./event-list/event-list.component";
import {EventListItemComponent} from "./event-list-item/event-list-item.component";
import {EventsService} from "./services/events.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, EventListComponent, EventListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aryan-Parmar-Learning-Angular';

  heading = 'this is my event site';

  events?: events;
  constructor(private eventsService: EventsService) {}
  ngOnInit(): void {

    const eventId = 2;
    this.eventsService.getEventById(eventId).subscribe(events => {
      this.events = events;
    });
  }

}
