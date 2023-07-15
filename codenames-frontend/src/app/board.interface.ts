export interface Board {
    id: string;
    name: string;
    turn: string;
    clue: string;
    cards: Card[];
  }
  
  export interface Card {
    id: number;
    word: string;
    team: string;
  }
  