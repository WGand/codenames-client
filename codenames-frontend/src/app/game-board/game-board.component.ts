import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Board } from '../board.interface';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  @Input() board: Board | undefined;
  turn: string | undefined;
  clue: string | undefined;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getBoard();
  }

  getBoard(): void {
    this.gameService.getBoards()
      .subscribe(boards => {
        this.board = boards[0];
        this.turn = this.board?.turn;
        this.clue = this.board?.clue;
      });
  }

  selectCard(cardId: number): void {
    if (this.board) {
      this.gameService.selectCard(this.board.id, cardId)
        .subscribe(() => {
          // Lógica adicional después de seleccionar la tarjeta
        });
    }
  }

  validateClue(): void {
    if (this.board && this.clue) {
      this.gameService.validateClue(this.board.id, this.clue)
        .subscribe(() => {
          // Lógica adicional después de validar la pista
        });
    }
  }
}
