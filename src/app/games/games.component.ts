import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Username } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username: Username = null;
  @Output() favoriteEvent = new EventEmitter<string>();
  games = [
    {id: 1, name: 'Doom', favorite: false},
    {id: 2, name: 'Portal', favorite: false},
    {id: 3, name: 'Call of Duty', favorite: false},
    {id: 4, name: 'Half-Life', favorite: false},
    {id: 5, name: 'Counter-Strike', favorite: false},
    {id: 6, name: 'Quake', favorite: false},
    {id: 7, name: 'Overwatch', favorite: false},
    {id: 8, name: 'League of Legends', favorite: false},
  ]
  handleFavorite(id:number) {
    const game = this.games.find(game => game.id === id);
    if (!game) return;
    game.favorite = !game.favorite;
    this.favoriteEvent.emit(game.name);
  }
}
