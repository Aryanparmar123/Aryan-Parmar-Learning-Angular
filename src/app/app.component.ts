import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {events} from "./Shared/Models/events";

import {NgForOf, NgIf} from "@angular/common";
import {EventListComponent} from "./event-list/event-list.component";
import {EventListItemComponent} from "./event-list-item/event-list-item.component";
import {EventService} from "./service/event.service";

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

  selectedEvent?: events;

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    const eventId = 4;
    this.eventService.read(eventId).subscribe(event => {
      this.selectedEvent = event;
    });


  }

}
