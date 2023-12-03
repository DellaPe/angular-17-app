import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { LastUpdateGame, Username } from '../../types';
import { DeferComponent } from '../defer/defer.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent, DeferComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: Username = 'DellaPe';
  isLoggdIn = true;
  lastUpdateGame: LastUpdateGame = null;
  

  logout() { 
    this.isLoggdIn = false;
    this.username = null;
  }
  login() { 
    this.username = 'DellaPe';
    this.isLoggdIn = true;
  }
  favoriteEvent(gameName: string) {
    this.lastUpdateGame = gameName;
  }
}
