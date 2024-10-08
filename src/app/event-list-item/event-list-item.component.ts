import {Component, Input} from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-event-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './event-list-item.component.html',
  styleUrl: './event-list-item.component.css'
})
export class EventListItemComponent {
 @Input() events?:any;
  @Input() index?: any;
}
