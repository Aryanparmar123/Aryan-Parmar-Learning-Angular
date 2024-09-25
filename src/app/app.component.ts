import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {events} from "./Shared/Models/events";

import {NgForOf, NgIf} from "@angular/common";
import {EventListComponent} from "./event-list/event-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, EventListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aryan-Parmar-Learning-Angular';

  heading = 'this is my event site';





}
