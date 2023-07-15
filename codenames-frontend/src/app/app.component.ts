import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Codenames Game</h1>
    <app-game-board></app-game-board>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
