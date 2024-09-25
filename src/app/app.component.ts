import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {events} from "./Shared/Models/events";

import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aryan-Parmar-Learning-Angular';

  heading = 'this is my event site';





  event1: events={
      eventId:1, Name: "Music Festival", place: "Central Park", type: "Concert", cordinator:"joseph",
      description: "An outdoor music festival featuring various artists."
    }
  event2: events={
    eventId:2, Name: "Art Exhibition", place: "City Gallery", type: "Exhibition", cordinator:"joseph",
      description: "A showcase of contemporary art from local artists."
    }
  event3: events={
    eventId:3, Name: "Tech Conference", place: "Convention Center", type: "Conference", cordinator:"joseph",
      description: "A gathering of tech enthusiasts and professionals."
    }
  event4: events={
    eventId:4, Name: "Food Fair", place: "Downtown Square", type: "Fair", cordinator:"joseph",
      description: "A celebration of local cuisine and culinary delights."
    }
  event5: events={
    eventId:5,
      Name: "Theater Play", place: "Main Theater", type: "Performance",cordinator:"joseph",
      description: "A dramatic play performed by the local theater group."
    }
  event6: events= {
    eventId:6, Name: "Charity Run", place: "City Park", type: "Sporting Event", cordinator:"joseph",
      description: "A fun run to raise funds for local charities."
    }
  events :events[]=[this.event1,this.event2,this.event3,this.event4,this.event5,this.event6]
}
