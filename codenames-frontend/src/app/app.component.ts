import { Component } from '@angular/core';
import { GameService } from './game.service';
import { Board } from './board.interface';

@Component({
  selector: 'app-root',
  template: `
    <h1>Codenames Game</h1>
    <app-main-menu (teamSelected)="handleTeamSelected($event.team)"></app-main-menu>
    <ng-container *ngIf="selectedTeam !== '' && board">
      <app-game-board [team]="selectedTeam" [board]="board"></app-game-board>
    </ng-container>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTeam: string = '';
  board: Board | undefined;

  constructor(private gameService: GameService) { }

  handleTeamSelected(team: string): void {
    this.selectedTeam = team;
    if (team === 'RED' || team === 'BLUE') {
      this.gameService.getBoards().subscribe(boards => {
        this.board = boards[0];
      });
    }
  }
}
