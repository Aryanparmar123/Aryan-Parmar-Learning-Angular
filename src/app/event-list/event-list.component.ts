import { Component } from '@angular/core';
import{events} from '../Shared/Models/events';
import {EventListItemComponent} from "../event-list-item/event-list-item.component";
import {NgClass, NgForOf, NgStyle} from "@angular/common";


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

  //Catch the onclick event from the html
  selectedEvents?: events;
  //function to set which student to display
  selectEvents(newevent: events): void {
    this.selectedEvents = newevent;
  }

}
