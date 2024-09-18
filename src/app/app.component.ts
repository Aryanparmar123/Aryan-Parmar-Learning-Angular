import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './Shared/Models/Counter';
import { JsonPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Counter1: Counter = { id: 1, playerName: "Aryan", guns: "Ak47", places: "Windsor", isCars: true };
  Counter2: Counter = { id: 2, playerName: "Akal", guns: "Uzzi", places: "Windsor", isCars: false };
  Counter3: Counter = { id: 3, playerName: "Dinesh", guns: "UMP", places: "Windsor", isCars: true };
  Counter4: Counter = { id: 4, playerName: "Mayank", guns: "M24", places: "Windsor", isCars: false };
  Counter5: Counter = { id: 5, playerName: "Muskan", guns: "M4", places: "Windsor", isCars: false };
  Counter6: Counter = { id: 6, playerName: "Anil", guns: "Mk16", places: "Windsor", isCars: true };

  counterList: Counter[] = [this.Counter1, this.Counter2, this.Counter3, this.Counter4, this.Counter5, this.Counter6];
}
