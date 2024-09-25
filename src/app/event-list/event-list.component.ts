import { Component } from '@angular/core';
import{events} from '../Shared/Models/events';
import {EventListItemComponent} from "../event-list-item/event-list-item.component";


@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    EventListItemComponent
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

 events: events[]=
   [{
    eventId:1, Name: "Music Festival", place: "Central Park", type: "Concert", cordinator:"joseph",
    description: "An outdoor music festival featuring various artists."
  },
 {
    eventId:2, Name: "Art Exhibition", place: "City Gallery", type: "Exhibition", cordinator:"joseph",
    description: "A showcase of contemporary art from local artists."
  },
 {
    eventId:3, Name: "Tech Conference", place: "Convention Center", type: "Conference", cordinator:"joseph",
    description: "A gathering of tech enthusiasts and professionals."
  },
  {
    eventId:4, Name: "Food Fair", place: "Downtown Square", type: "Fair", cordinator:"joseph",
    description: "A celebration of local cuisine and culinary delights."
  },
  {
    eventId:5,
    Name: "Theater Play", place: "Main Theater", type: "Performance",cordinator:"joseph",
    description: "A dramatic play performed by the local theater group."
  },
   {
    eventId:6, Name: "Charity Run", place: "City Park", type: "Sporting Event", cordinator:"joseph",
    description: "A fun run to raise funds for local charities."
  }]


}
