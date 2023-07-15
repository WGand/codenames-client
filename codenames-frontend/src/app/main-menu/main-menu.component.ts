import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  // Variables para manejar la selección de equipo
  selectedTeam: string = '';

  joinTeam(team: string): void {
    this.selectedTeam = team;
    // Lógica para unirse al equipo (llamar a la API, etc.)
  }

  leaveTeam(): void {
    this.selectedTeam = '';
    // Lógica para salir del equipo (llamar a la API, etc.)
  }
}
