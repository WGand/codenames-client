import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from './board.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'http://localhost:8810'; // Cambia el puerto y el host según corresponda

  constructor(private http: HttpClient) { }

  getBoards(): Observable<Board[]> {
    const url = `${this.apiUrl}/game/boards`;
    console.log(this.http.get<Board[]>(url));
    return this.http.get<Board[]>(url);
  }

  selectCard(gameId: string, cardId: number): Observable<void> {
    const url = `${this.apiUrl}/game/boards/${gameId}/cards/${cardId}`;
    return this.http.put<void>(url, {});
  }

  validateClue(gameId: string, clue: string): Observable<void> {
    const url = `${this.apiUrl}/game/boards/${gameId}/clue`;
    return this.http.put<void>(url, { clue });
  }
}
